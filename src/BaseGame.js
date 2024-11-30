import { height, width } from "."

export class BaseGame {
    /** @type {Direction} */
    #direction = 'right'
    #snakeSequence = [[4, 2], [3, 2], [2, 2]]
    /** @type {Position[]} */
    #food = []
    /** @type {Position[]} */
    #directionsQueue = []
    #onGameOverCallbacks = []
    #directionChanged = false
    #isGameOver = false

    constructor() {
        this.#addFood()
    }

    #getRandomFreePosition() {
        const freeCells = width * height - this.#snakeSequence.length + this.#food.length
        if (freeCells === 0) {
            throw 'no more place'
        }
        const freePosinitionNumber = this.#food.concat(this.#snakeSequence).reduce((freePositionNumber, busyPosition) => {
            if (freePositionNumber >= this.#pos2num(busyPosition)) {
                freePositionNumber++
            }
            return freePositionNumber
        }, Math.floor(Math.random() * freeCells))
        return this.#num2pos(freePosinitionNumber)
    }

    update() {
        if (this.#isGameOver) {
            return
        }
        const newHeadPosition = this.#getNewHeadPosition()
        if (!newHeadPosition) {
            this.#gameOver()
            return
        }
        this.#snakeSequence.unshift(newHeadPosition)
        const newFood = this.#food.filter(([x, y]) => newHeadPosition[0] !== x || newHeadPosition[1] !== y)
        if (newFood.length === this.#food.length) {
            this.#snakeSequence.pop()
        } else {
            this.#food = newFood
            try {
                this.#addFood()
            } catch {
                this.#gameOver()
                return
            }
        }
        const newDirection = this.#directionsQueue.shift()
        this.#directionChanged = !!newDirection
        this.#direction = newDirection ?? this.#direction

    }

    #getNewHeadPosition() {
        let [x, y] = this.#snakeSequence[0]
        switch (this.#direction) {
            case "up":
                y -= 1
                if (y < 0) {
                    return
                }
                break
            case "down":
                y += 1
                if (y >= height) {
                    return
                }
                break
            case "left":
                x -= 1
                if (x < 0) {
                    return
                }
                break
            case "right":
                x += 1
                if (x >= width) {
                    return
                }
        }
        return this.#snakeSequence.some(([tailX, tailY]) => tailX === x && tailY === y) ? undefined : [x, y]
    }

    #gameOver() {
        this.#isGameOver = true
        this.#onGameOverCallbacks.forEach(callBack => callBack())
        console.log('gameOver')
    }

    /**
     * @param {Direction} direction 
     */
    changeDirection(direction) {
        const { length } = this.#directionsQueue
        const comparedDirection = length ? this.#directionsQueue[length - 1] : this.#direction
        if (comparedDirection !== direction && !this.#isOposite(comparedDirection, direction)) {
            if (this.#directionChanged) {
                this.#directionsQueue.push(direction)
            } else {
                this.#direction = direction
                this.#directionChanged = true
            }

        }
    }

    /**
     * @param {() => void} callBack 
     */
    onGameOver(callBack) {
        this.#onGameOverCallbacks.push(callBack)
    }

    getСontext() {
        return {
            head: this.#snakeSequence[0],
            tails: this.#snakeSequence.slice(1),
            food: this.#food.concat()
        }
    }

    /**
     * @param {number} position
     */
    #num2pos(position) {
        const result = [position % width]
        result[1] = (position - result[0]) / width
        return result
    }

    /**
     * @param {Position} position
     */
    #pos2num(position) {
        const [x, y] = position
        return y * width + x
    }

    #addFood() {
        this.#food.push(this.#getRandomFreePosition())
    }
    /**
     * @param {Direction} direction1 
     * @param {Direction} direction2 
     */
    #isOposite(direction1, direction2) {
        const opposites = {
            left: 'right',
            right: 'left',
            up: 'down',
            down: 'up',
        }
        return opposites[direction1] === direction2;
    }
}
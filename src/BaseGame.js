import { height, width } from "."

export class BaseGame {
    /** @type {Direction} */
    _direction = 'right'
    _snakeSequence = [[4, 2], [3, 2], [2, 2]]
    /** @type {Position[]} */
    _food = []
    /** @type {Position[]} */
    #directionsQueue = []
    #directionChanged = false
    #isGameOver = false
    _updateTimeMS = 500
    get updateTimeMS() {
        return this._updateTimeMS
    }

    constructor() {
        this._food.push(this._getRandomFreePosition())
    }

    /**
     * @param {position[]} alsoCheck 
     */
    _getRandomFreePosition(alsoCheck) {
        let checkList = this._food.concat(this._snakeSequence)
        if (alsoCheck) {
            checkList = checkList.concat(alsoCheck)
        }
        const freeCells = width * height - checkList.length
        if (freeCells <= 0) {
            throw 'no more place'
        }
        const freePositionNumber = checkList.sort((a, b) => this.#pos2num(a) - this.#pos2num(b)).reduce((freePositionNumber, busyPosition) => {
            if (freePositionNumber >= this.#pos2num(busyPosition)) {
                freePositionNumber++
            }
            return freePositionNumber
        }, Math.floor(Math.random() * freeCells))
        return this.#num2pos(freePositionNumber)
    }

    update() {
        if (this.#isGameOver) {
            return
        }
        const newHeadPosition = this._getNewHeadPosition()
        if (!newHeadPosition) {
            this.#gameOver('you crashed')
            return
        }
        this._snakeSequence.unshift(newHeadPosition)
        try {
            this._eatIfPossible()
        } catch (e) {
            this.#gameOver(e)
            return
        }
        const newDirection = this.#directionsQueue.shift()
        this.#directionChanged = !!newDirection
        this._direction = newDirection ?? this._direction
    }

    _getNewHeadPosition() {
        let [x, y] = this._snakeSequence[0]
        switch (this._direction) {
            case "up":
                y -= 1
                break
            case "down":
                y += 1
                break
            case "left":
                x -= 1
                break
            case "right":
                x += 1
        }
        if (this._hasCollisions([x, y])) {
            return
        }
        return [x, y]
    }

    /**
     * @param {string} text 
     */
    #gameOver(text) {
        this.#isGameOver = true
        console.log('gameOver', text)
    }

    /**
     * @param {Direction} direction 
     */
    changeDirection(direction) {
        const { length } = this.#directionsQueue
        const comparedDirection = length ? this.#directionsQueue[length - 1] : this._direction
        if (comparedDirection !== direction && !this.#isOposite(comparedDirection, direction)) {
            if (this.#directionChanged) {
                this.#directionsQueue.push(direction)
            } else {
                this._direction = direction
                this.#directionChanged = true
            }

        }
    }

    getContext() {
        return {
            head: this._snakeSequence[0],
            tails: this._snakeSequence.slice(1),
            food: this._food.concat()
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
     * @param {Position} param0
     */
    #pos2num([x, y]) {
        return y * width + x
    }

    _addFood() {
        this._food.push(this._getRandomFreePosition())
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

    _eatIfPossible() {
        const [headX, headY] = this._snakeSequence[0]
        const newFood = this._food.filter(([x, y]) => headX !== x || headY !== y)
        if (newFood.length === this._food.length) {
            this._snakeSequence.pop()
        } else {
            this._food = newFood
            this._addFood()
        }
    }

    /**
     * @param {Position} param0 
     */
    _hasCollisions([x, y]) {
        return x < 0 || x >= width || y < 0 || y >= height || this._snakeSequence.slice(1, -1).some(([tailX, tailY]) => tailX === x && tailY === y)
    }
}
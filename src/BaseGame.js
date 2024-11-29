import { height, width } from "."

export class BaseGame {
    #directions = {
        up: -height,
        down: height,
        left: -1,
        right: 1
    }
    /** @type {Direction} */
    #direction = 'right'
    #snakeSequence = [23, 22, 21]
    /** @type {Cell[]} */
    #map = []
    /** @type {Direction[]} */
    #directionsQueue = []
    #onGameOverCallbacks = []

    constructor() {
        this.#setStartingCells()
    }

    #getFreeRandomPosition() {
        //TODO
    }

    update() {
        const newHeadPosition = this.#getNewHeadPosition()
        if (!newHeadPosition) {
            this.#gameOver()
            return
        }
        this.#map[this.#snakeSequence[0]] = 'tail'
        this.#snakeSequence.unshift(newHeadPosition)
        this.#map[this.#snakeSequence[0]] = 'head'
        delete this.#map[this.#snakeSequence.pop()]
        this.#direction = this.#directionsQueue.shift() ?? this.#direction
    }

    #getNewHeadPosition() {
        const newHeadPosition = this.#snakeSequence[0] + this.#directions[this.#direction]
        return newHeadPosition > 0
            && newHeadPosition < width * height
            && ((this.#direction === 'left' && this.#snakeSequence[0] % width)
                || (this.#direction === 'right' && newHeadPosition % width))
            && !this.#map[newHeadPosition] ? newHeadPosition : undefined
    }

    #gameOver() {
        this.#onGameOverCallbacks.forEach(callBack => callBack())
        console.log('gameOver')
    }

    #setStartingCells() {
        this.#snakeSequence.forEach((position, i) => {
            this.#map[position] = i == 0 ? 'head' : 'tail'
        })
    }
    /**
     * @param {Direction} direction 
     */
    addDirection(direction) {
        this.#directionsQueue.push(direction)
    }

    /**
     * @param {()=>void} callBack 
     */
    onGameOver(callBack) {
        this.#onGameOverCallbacks.push(callBack)
    }

    getСontext() {
        return this.#map.reduce((result, cell, position) => {
            switch (cell) {
                case 'head':
                    result.head = this.#num2pos(position)
                    break
                case 'tail':
                    result.tails.push(this.#num2pos(position))
                    break
                case 'food':
                    result.food.push(this.#num2pos(position))
            }
            return result
        }, { tails: [], food: [] })
    }
    /**
     * @param {number} position
     */
    #num2pos(position) {
        const result = [position % width]
        result[1] = (position - result[0]) / width
        return result
    }
}
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
    /** @type {Cell[]} */
    #cells = []
    /** @type {Direction[]} */
    #directionsQueue = []
    #headPosition
    #lastTailPosition
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
        this.#cells[this.#headPosition] = 'head'
        this.#direction = this.#directionsQueue.shift() ?? this.#direction
    }

    #getNewHeadPosition() {
        const newHeadPosition = this.#headPosition + this.#directions[this.#direction]
        return newHeadPosition > 0
            && newHeadPosition < width * height
            && (this.#direction === 'left' && this.#headPosition % width)
            && (this.#direction === 'right' && newHeadPosition % width)
            && !this.#cells[newHeadPosition] ? newHeadPosition : undefined
    }

    #gameOver() {
        this.#onGameOverCallbacks.forEach(callBack => callBack())
    }

    #setStartingCells() {
        this.#headPosition = width - 1 + height / 2
        this.#lastTailPosition = this.#headPosition - 2
        this.#cells[this.#headPosition] = 'head'
        for (let i = this.#headPosition; i >= this.#lastTailPosition; i--) {
            this.#cells[i] = 'tail'
        }
    }

    addDirection(direction) {
        this.#directionsQueue.push(direction)
    }

    onGameOver(callBack) {
        this.#onGameOverCallbacks.push(callBack)
    }

    getСontext() {
        return this.#cells.reduce((result, cell, position) => {
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
import { BaseGame } from "./BaseGame";

export default class WallsGame extends BaseGame {
    /**
     * @type {Position[]}
     */
    #walls = []

    _addFood() {
        super._addFood()
        this.#walls.push(this._getRandomFreePosition())
    }

    _getNewHeadPosition() {
        const [x, y] = super._getNewHeadPosition()
        return this.#walls.some(([wallX, wallY]) => wallX === x && wallY === y) ? undefined : [x, y]
    }

    getСontext() {
        return {
            walls: this.#walls.concat(),
            ...super.getСontext()
        }
    }

    _getRandomFreePosition() {
        return super._getRandomFreePosition(this.#walls)
    }
}
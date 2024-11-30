import { BaseGame } from "./BaseGame";

export default class WallsGame extends BaseGame {
    /**
     * @type {Position[]}
     */
    _walls = []

    _addFood() {
        super._addFood()
        this._walls.push(this._getRandomFreePosition())
    }

    _getNewHeadPosition() {
        const [x, y] = super._getNewHeadPosition()
        return this._walls.some(([wallX, wallY]) => wallX === x && wallY === y) ? undefined : [x, y]
    }

    getContext() {
        return {
            walls: this._walls.concat(),
            ...super.getContext()
        }
    }

    _getRandomFreePosition() {
        return super._getRandomFreePosition(this._walls)
    }
}
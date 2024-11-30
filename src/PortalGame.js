import { BaseGame } from "./BaseGame";

export default class PortalGame extends BaseGame {
    constructor() {
        super()
        this._addFood()
    }
    _eatIfPossible() {
        const [headX, headY] = this._snakeSequence[0]
        const i = this._food.findIndex(([x, y]) => headX === x && headY === y)
        if (i === -1) {
            this._snakeSequence.pop()
            return
        }
        this._snakeSequence[0] = this._food[i ^ 1]
        this._food = []
        this._addFood()
        this._addFood()
    }
}
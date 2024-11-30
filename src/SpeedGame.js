import { BaseGame } from "./BaseGame";

export default class SpeedGame extends BaseGame {
    _addFood() {
        super._addFood()
        this._updateTimeMS *= 1 / 1.1
    }
}
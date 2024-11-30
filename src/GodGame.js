import { height, width } from ".";
import { BaseGame } from "./BaseGame";

export default class GodGame extends BaseGame {
    _getNewHeadPosition() {
        let [x, y] = this._snakeSequence[0]
        switch (this._direction) {
            case "up":
                y -= 1
                if (y < 0) {
                    y = height - 1
                }
                break
            case "down":
                y += 1
                if (y >= height) {
                    y = 0
                }
                break
            case "left":
                x -= 1
                if (x < 0) {
                    x = width - 1
                }
                break
            case "right":
                x += 1
                if (x >= width) {
                    x = 0
                }
        }
        return [x, y]
    }
}
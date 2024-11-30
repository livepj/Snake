import { ui, board } from "."
import { BaseGame } from "./BaseGame"
import GodGame from "./GodGame"
import { KeyboardHandler } from "./KeyboardHandler"
import PortalGame from "./PortalGame"
import SpeedGame from "./SpeedGame"
import Timer from "./Timer"
import WallsGame from "./WallsGame"

export default class GameControl {
    /**
     * @type {BaseGame}
     */
    #game
    #timer = new Timer()
    #keyboardHandler = new KeyboardHandler()
    #_isPlaying = false
    #snakeSize = 0
    /**
     * @type {string[]}
     */
    #modesList
    #score = 0
    constructor(modesList) {
        this.#modesList = modesList
        this.#subscribeOnUI()
        this.#subscribeOnKeyboard()
    }

    #subscribeOnUI() {
        ui.on('MENU_CLICKED', () => {
            this.#isPlaying = false
        })
        ui.on('EXIT_CLICKED', () => {
            this.#isPlaying = true
        })
        ui.on('PLAY_CLICKED', async modeNumber => {
            this.#timer.clear()
            this.#isPlaying = true
            this.#startGame(this.#modesList[modeNumber])
        })
    }

    #subscribeOnKeyboard() {
        ['left', 'right', 'up', 'down'].forEach(direction =>
            this.#keyboardHandler.onKeyDown(`Arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`, () =>
                this.#isPlaying && this.#game.changeDirection(direction)
            )
        )
    }

    async #startGame(mode) {
        this.#score = 0
        switch (mode) {
            case 'Classic':
                this.#game = new BaseGame()
                break
            case 'No Die':
                this.#game = new GodGame()
                break
            case 'Walls':
                this.#game = new WallsGame()
                break
            case 'Speed':
                this.#game = new SpeedGame()
                break
            case 'Portal':
                this.#game = new PortalGame()
        }
        let context = this.#game.getContext()
        this.#snakeSize = context.tails.length
        while (context) {
            ui.setScore(this.#score)
            board.drawContext(context)
            try {
                await this.#timer.delay(this.#game.updateTimeMS)
            }
            catch (e) {
                break
            }
            this.#game.update()
            context = this.#game.getContext()
            const snakeSize = context.tails.length
            if (snakeSize > this.#snakeSize) {
                this.#score += snakeSize - this.#snakeSize
                this.#snakeSize = snakeSize
            }
        }
    }
    get #isPlaying() {
        return this.#_isPlaying
    }
    set #isPlaying(value) {
        if (value) {
            this.#timer.resume()
        } else {
            this.#timer.pause()
        }
        this.#_isPlaying = value
    }
}
import { ui, board } from "."
import { BaseGame } from "./BaseGame"
import { KeyboardHandler } from "./KeyboardHandler"
import Timer from "./Timer"

export default class GameControl {
    /**
     * @type {BaseGame}
     */
    #game
    #timer = new Timer()
    #keyboardHandler = new KeyboardHandler()
    #_isPlaying = false
    /**
     * @type {string[]}
     */
    #modesList
    #timePerMoveMS = 100
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
        switch (mode) {
            case 'Classic':
                this.#game = new BaseGame()
                break
            case 'Speed':

                break
            case 'No Die':
            case 'Walls':
            case 'Portal':
        }
        let context = this.#game.getСontext()
        while (context) {
            board.drawContext(context)
            try {
                await this.#timer.delay(this.#timePerMoveMS)
            }
            catch (e) {
                break
            }
            this.#game.update()
            context = this.#game.getСontext()
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
import * as PIXI from 'pixi.js'
import { screenHeihgt, screenWidth } from '.'
import { Menu } from './Menu'
import Button from './Button'

export class UI extends PIXI.Container {
    /**
     * @type {PIXI.TextStyle}
     */
    #textStyle = { fontFamily: "times new roman", fill: 0xffffff, fontSize: 36 }
    #bestText = new PIXI.Text("0", this.#textStyle)
    #scoreText = new PIXI.Text("0", this.#textStyle)
    #width = screenWidth - screenHeihgt
    /**
     * @type {Menu}
     */
    #menu
    /**
     * @param {text[]} modesList 
     */
    constructor(modesList) {
        super()
        this.x = screenHeihgt
        this.addChild(new PIXI.Graphics()).beginFill(0x077482).drawRect(0, 0, this.#width, screenHeihgt)
        this.#addLabel()
        this.#addBest()
        this.#addScore()
        this.#addMenu(modesList)
        this.#addButtons()
    }

    #addLabel() {
        const label = this.addChild(new PIXI.Text('Snake Game', { fill: 0x55d292, fontSize: 45, fontFamily: "times new roman", fontWeight: 'bold' }))
        label.anchor.set(0.5)
        label.position.set(this.#width / 2, 55)
    }

    #addPanel(y, color, text, pixiText) {
        const panel = this.addChild(new PIXI.Graphics().beginFill(color).drawRect(0, 0, this.#width, 50))
        const constantText = panel.addChild(new PIXI.Text(text, { fontFamily: "times new roman", fill: 0xffffff, fontSize: 30 }))
        constantText.position.set(15, panel.height / 2)
        constantText.anchor.y = 0.5
        panel.addChild(pixiText)
        pixiText.position.set(204, panel.height / 2)
        pixiText.anchor.set(0.5)
        panel.y = y
    }

    #addBest() {
        this.#addPanel(123, 0x075e6c, 'Best :', this.#bestText)
    }

    #addScore() {
        this.#addPanel(199, 0x074e5c, 'Score :', this.#scoreText)
    }

    /**
     * @param {text[]} modesList 
     */
    #addMenu(modesList) {
        this.#menu = this.addChild(new Menu(modesList, this.#width))
        this.#menu.y = 272
    }

    #addButtons() {
        const setMenuVisible = (value) => {
            menuButtons.visible = this.#menu.visible = !(menu.visible = !value)
        }

        const y = 628
        const menu = this.addChild(new Button('Menu'))
        menu.position.set(this.#width / 2, y)
        menu.visible = false
        menu.on('pointertap', () => {
            setMenuVisible(true)
            this.emit('MENU_CLICKED')
        })

        const menuButtons = this.addChild(new PIXI.Container())
        const distance = 140
        const [play, exit] = ['Play', 'Exit'].map((text, i) => {
            const button = menuButtons.addChild(new Button(text))
            button.x = i * distance
            return button
        })
        menuButtons.pivot.x = distance / 2
        menuButtons.position = menu.position
        exit.on('pointertap', () => {
            setMenuVisible(false)
            this.emit('EXIT_CLICKED')
        })
        play.on('pointertap', () => {
            setMenuVisible(false)
            this.emit('PLAY_CLICKED', this.#menu.value)
        })
    }

    /**
     * @param {number} score 
     */
    setScore(score) {
        this.#scoreText.text = score.toString()
        if (score > this.#bestText.text) {
            this.#bestText.text = score.toString()
        }
    }
}
import * as PIXI from 'pixi.js'

export class Menu extends PIXI.Container {
    #value = 0
    /**
     * @param {string[]} texts 
     * @param {number} width 
     */
    constructor(texts, width) {
        super()
        this.addChild(new PIXI.Graphics()).beginFill(0x195756).drawRect(0, 0, width, 280)
        texts.forEach((text, i) => {
            const container = this.addChild(new PIXI.Container())
            const { body, onGraphics } = this.#createCheckBox()
            onGraphics.visible = i === this.#value
            container.addChild(body)
            container.position.set(34, 25 + i * 50)
            this.on('VALUE_CHANGED', () => {
                onGraphics.visible = this.#value === i
            })
            const pixiText = container.addChild(new PIXI.Text(text, { fontFamily: "times new roman", fill: 0xffffff, fontSize: 30 }))
            pixiText.anchor.y = 0.5
            pixiText.x = 40
            container.interactive = this.buttonMode = true
            container.on('pointertap', () => {
                this.#value = i
                this.emit('VALUE_CHANGED')
            })
        })
    }

    #createCheckBox() {
        const size = 30
        const body = new PIXI.Container()
        body.addChild(new PIXI.Graphics().beginFill(0xffffff).drawRoundedRect(-size / 2, -size / 2, size, size, 2))
        const onGraphics = body.addChild(new PIXI.Graphics())
            .beginFill(0x0075ff)
            .drawRoundedRect(-size / 2, -size / 2, size, size, 2)
            .endFill()
            .lineStyle({ width: 5, color: 0xffffff })
            .moveTo(-9, 0)
            .lineTo(-3, 6)
            .lineTo(9, -9)
        return { body, onGraphics }
    }

    get value() {
        return this.#value
    }
}
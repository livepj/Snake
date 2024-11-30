import * as PIXI from 'pixi.js'

export default class Button extends PIXI.Container {
    constructor(text) {
        super()
        const width = 120
        const height = 80
        this.pivot.set(width / 2, height / 2)
        const base = this.addChild(new PIXI.Graphics())
        base.beginFill(0x245450)
        base.drawRect(0, 0, width, height)
        base.endFill()

        const lightBorder = this.addChild(new PIXI.Graphics())
        lightBorder.lineStyle(1, 0x3e5d61, 1)
        lightBorder.moveTo(0, height)
        lightBorder.lineTo(0, 0)
        lightBorder.lineTo(width, 0)

        const darkBorder = this.addChild(new PIXI.Graphics())
        darkBorder.lineStyle(1, 0, 1)
        darkBorder.moveTo(0, height)
        darkBorder.lineTo(width, height)
        darkBorder.lineTo(width, 0)

        const label = this.addChild(new PIXI.Text(text, {
            fontSize: 25,
            fill: 0xffffff,
            fontWeight: '600'
        }))
        label.anchor.set(0.5)
        label.x = width / 2
        label.y = height / 2

        this.interactive = true
        this.buttonMode = true

        this.on('pointerdown', () => {
            lightBorder.visible = darkBorder.visible = false
        })

        this.on('pointerup', () => {
            lightBorder.visible = darkBorder.visible = true
        })

        this.on('pointerupoutside', () => {
            lightBorder.visible = darkBorder.visible = true
        })
    }
}
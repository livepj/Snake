import * as PIXI from 'pixi.js'
import { height, screenHeihgt } from '.'
export class Board extends PIXI.Container {
    #background = this.addChild(new PIXI.Graphics())
    #graphics = this.addChild(new PIXI.Graphics())
    #cellSize = screenHeihgt / (height + 2)
    constructor() {
        super()
        this.#drawBackground()
        this.#graphics.lineStyle({ width: 1 })
        this.#graphics.position.set(this.#cellSize, this.#cellSize)
    }
    /**
     * @param {Context} context 
     */
    drawContext(context) {
        this.#graphics.clear().lineStyle({ width: 1 })
        const { walls, head, tails, food } = context
        if (walls) {
            walls.forEach(cell => this.#drawCell(cell, 'wall'))
        }
        food.forEach(cell => this.#drawCell(cell, 'food'))
        tails.forEach(cell => this.#drawCell(cell, 'tail'))
        this.#drawCell(head, 'head')
    }

    #drawBackground() {
        this.#background.lineStyle({ width: this.#cellSize, color: 0xa96a0e })
            .drawRect(this.#cellSize / 2, this.#cellSize / 2, screenHeihgt - this.#cellSize, screenHeihgt - this.#cellSize)
    }

    /**
     * @param {Cell} cell 
     * @param {[number, number]} position
     */
    #drawCell(position, cell) {
        this.#graphics.beginFill(cell === 'food' ? 0x27865d : cell === 'head' ? 0xb8b926 : cell === 'tail' ? 0xf4f2f4 : 0x345662)
            .drawRect(...position.map(value => value * this.#cellSize), this.#cellSize, this.#cellSize)
    }
}
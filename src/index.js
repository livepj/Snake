
import * as PIXI from 'pixi.js'
import { Board } from './Board'
import { UI } from './UI'
import Timer from './Timer'
import GameControl from './GameControl'

export const screenWidth = 1000, screenHeihgt = 700, width = 20, height = 20
const app = new PIXI.Application({ width: screenWidth, height: screenHeihgt, backgroundColor: 0x575757, antialias: true })
document.body.appendChild(app.view)
globalThis.__PIXI_APP__ = app

const modesList = ['Classic', 'No Die', 'Walls', 'Portal', 'Speed']
export const board = window.board = app.stage.addChild(new Board())
export const ui = window.UI = app.stage.addChild(new UI(modesList))
new GameControl(modesList)


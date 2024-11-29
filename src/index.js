
import * as PIXI from 'pixi.js'

export const screenWidth = 1000, screenHeihgt = 704, width = 20, height = 20
const app = new PIXI.Application({ width: screenWidth, height: screenHeihgt, backgroundColor: 0x575757 });
document.body.appendChild(app.view)
globalThis.__PIXI_APP__ = app
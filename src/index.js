
import * as PIXI from 'pixi.js'

const app = new PIXI.Application()
document.body.appendChild(app.view)
globalThis.__PIXI_APP__ = app
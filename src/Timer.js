import * as PIXI from 'pixi.js'
export default class Timer {
    #ticker = new PIXI.Ticker()
    /**
     * @type {() => void}
     */
    #reject
    /**
     * @param {number} timeMS 
     */
    delay(timeMS) {
        return new Promise((resolve, reject) => {
            this.#reject = reject
            const callback = () => {
                timeMS -= this.#ticker.deltaMS
                if (timeMS <= 0) {
                    this.#ticker.remove(callback)
                    resolve()
                }
            }
            this.#ticker.add(callback)
        })
    }
    pause() {
        this.#ticker.stop()
    }
    resume() {
        this.#ticker.start()
    }
    clear() {
        if (this.#reject) {
            this.#reject()
        }
    }
}
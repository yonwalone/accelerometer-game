import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'

export default class Experience {
    constructor(canvas) {
        // Global access
        window.experience = this
        // Options
        this.canas = canvas
        // Setup
        this.sizes = new Sizes()
        this.time = new Time()

        // Resize event
        this.sizes.on('resize', () => {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {

    }

    update() {

    }
}
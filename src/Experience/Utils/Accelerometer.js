import EventEmitter from './EventEmitter.js'
import Experience from '../Experience'

export default class Accelerometer {
    constructor() {
        // super()
        this.experience = new Experience()
        this.debug = this.experience.debug

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('sensors')
        }

        // Setup

        // Devicemotion event
        window.addEventListener('devicemotion', (e) => {
            this.debug.ui.add(e.acceleration.x, 'accelX')
            this.debug.ui.add(e.acceleration.y, 'accelY')
            this.debug.ui.add(e.acceleration.z, 'accelZ')
        })
    }
}
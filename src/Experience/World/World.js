import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Ball from './Ball.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            // Setup
            this.ball = new Ball()
            this.floor = new Floor()
            this.evironment = new Environment()
        })
    }
}
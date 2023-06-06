import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Ball from './Ball.js'
import Physics from './Physics.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.physics = new Physics()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            // Setup
            this.ball = new Ball()
            this.floor = new Floor()
            this.evironment = new Environment()
        })
    }    

    update() {
        if (this.ball) {
            this.ball.update(
                this.physics.ball.body.position.x,
                this.physics.ball.body.position.y,
                this.physics.ball.body.position.z
            )
        }  
    }
}
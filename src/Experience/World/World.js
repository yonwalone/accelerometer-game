import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Ball from './Ball.js'
import Wall from './Wall.js'
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
            this.wall1 = new Wall(
                new THREE.Vector3(20, 1, 0.5), // dimension (x, y, z)
                new THREE.Vector3(0, 0.5, 10), // position (x, y, z)
                0 // rotation in y
            )
            this.wall2 = new Wall(
                new THREE.Vector3(20, 1, 0.5), // dimension (x, y, z)
                new THREE.Vector3(0, 0.5, -10),// position (x, y, z)
                0 // rotation in y
            )
            this.wall3 = new Wall(
                new THREE.Vector3(20, 1, 0.5), // dimension (x, y, z)
                new THREE.Vector3(-10, 0.5, 0),// position (x, y, z)
                Math.PI/2 // rotation in y
            )
            this.wall4 = new Wall(
                new THREE.Vector3(20, 1, 0.5), // dimension (x, y, z)
                new THREE.Vector3(10, 0.5, 0),// position (x, y, z)
                Math.PI/2 // rotation in y
            )
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
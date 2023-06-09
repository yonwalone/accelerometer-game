import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Ball from './Ball.js'
import Wall from './Wall.js'
import Physics from './Physics.js'
import Overlay from './Overlay.js'
import objects from '../objects.js'
import Hole from './Hole.js'
import Cirlce from './Circle.js'

export default class World {
    constructor(level) {
        this.experience = new Experience()
        this.physics = new Physics()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.level = level
        
        this.overlay = new Overlay()

        this.resources.on('ready', () => {
            // Setup
            this.ball = new Ball()
            // Playing field frame
            this.wallBottom = new Wall(objects.wallButtom)
            this.wallTop = new Wall(objects.wallTop)
            this.wallLeft = new Wall(objects.wallLeft)
            this.wallRight = new Wall(objects.wallRight)
            this.floor = new Floor()

            const levelWalls = objects.levels[this.level].walls;
            const wallObjects = [];

            for (let i = 0; i < levelWalls.length; i++) {
                const wall = new Wall(levelWalls[i]);
                wallObjects.push(wall);
            }

            const levelHoles = objects.levels[this.level].holes;
            const holeObjects = [];

            for (let i = 0; i < levelHoles.length; i++) {
                const hole = new Hole(levelHoles[i]);
                holeObjects.push(hole);
            }

            this.start = new Cirlce(objects.levels[this.level].start)
            this.end = new Cirlce(objects.levels[this.level].end)

            this.evironment = new Environment()
        })
        if (this.level === 1) {
            this.updateLevel()
        }
    }

    updateLevel() {
        // Clear previous walls and holes
        if (this.wallObjects) {
            this.wallObjects.forEach(wall => {
            this.scene.remove(wall.mesh);
            });
        }
        this.wallObjects = [];

        if (this.holeObjects) {
            this.holeObjects.forEach(hole => {
            this.scene.remove(hole.mesh);
            });
        }
        this.holeObjects = [];

        // Add new walls for the current level
        const levelWalls = objects.levels[this.level].walls;
        for (let i = 0; i < levelWalls.length; i++) {
            const wall = new Wall(levelWalls[i]);
            this.wallObjects.push(wall);
            this.scene.add(wall.mesh);
        }

        // Add new holes for the current level
        const levelHoles = objects.levels[this.level].holes;
        for (let i = 0; i < levelHoles.length; i++) {
            const hole = new Hole(levelHoles[i]);
            this.holeObjects.push(hole);
            this.scene.add(hole.mesh);
        }
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
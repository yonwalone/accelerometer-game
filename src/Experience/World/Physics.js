import Experience from '../Experience.js'
import Sensors from '../Utils/Sensors.js'
import CANNON from 'cannon'
import objects from '../objects.js'
import World from './World.js'

export default class Physics {
    constructor() {
        this.experience = new Experience()
        this.sensors = new Sensors()
        this.debug = this.experience.debug
        this.time = this.experience.time

        // Set up
        if(this.debug.active) {
            this.physicsFolder = this.debug.ui.addFolder('physics')
        }

        this.setWorld()
        this.setMaterials()

        this.setBall()

        // Playing field frame
        this.setWall(objects.wallButtom)
        this.setWall(objects.wallTop)
        this.setWall(objects.wallLeft)
        this.setWall(objects.wallRight)
        this.setFinish(objects.levels[0].end)
        this.setFloor()

        // Level 1 Walls
        const level1Walls = objects.levels[0].walls
        for (const wall of level1Walls) {
            this.setWall(wall)
        }

        const level1Holes = objects.levels[0].holes
        for (const hole of level1Holes) {
            this.setHole(hole)
        }

        this.time.on('tick', () => {
            this.moveBall(this.sensors.x, this.sensors.y)
            this.world.step(1/60, this.time.delta, 3)
        })
    }

    setWorld() {
        this.world = new CANNON.World()
        this.world.gravity.set(0, -9.82, 0)

        if (this.debug.active) {
            this.physicsFolder
                .add(this.world.gravity, 'y')
                .name('worldGravity')
                .min(-10)
                .max(0)
                .step(0.001)
        }
    }

    setMaterials() {
        this.defaultMaterial = new CANNON.Material('default')
        this.defaultContactMaterial = new CANNON.ContactMaterial(
            this.defaultMaterial, 
            this.defaultMaterial,
            {
                friction: 0.5,
                restitution: 0.7
            }
        )
        this.world.addContactMaterial(this.defaultContactMaterial)

        if (this.debug.active) {
            this.physicsFolder
                .add(this.defaultContactMaterial, 'restitution')
                .name('restitution')
                .min(0)
                .max(1)
                .step(0.001)
        }

        if (this.debug.active) {
            this.physicsFolder
                .add(this.defaultContactMaterial, 'friction')
                .name('friction')
                .min(0)
                .max(1)
                .step(0.001)
        }
    }

    setFloor() {
        this.floor = {}
        this.floor.body = new CANNON.Body({
            mass: 0,
            shape: new CANNON.Plane(),
            material: this.defaultMaterial
        })
        this.floor.body.quaternion.setFromAxisAngle(
            new CANNON.Vec3(-1, 0, 0),
             Math.PI * 0.5
        ) // Rotating the plane by 90 degrees around the X-axis
        this.world.addBody(this.floor.body);
    }

    setBall() {
        this.ball = {}
        this.ball.shape = new CANNON.Sphere(0.51)
        this.ball.body = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(-8, 15, 8),
            shape: this.ball.shape,
            material: this.defaultMaterial,
        })
        this.world.addBody(this.ball.body)
    }

    setWall(object) {
        this.wall = {}
        this.wall.body = new CANNON.Body({
            mass: 0,
            shape: new CANNON.Box(
                new CANNON.Vec3(
                    object.dimension.x / 2,
                    object.dimension.y / 2,
                    object.dimension.z / 2,
                )),
            material: this.defaultMaterial,
            position: new CANNON.Vec3(
                object.position.x,
                object.position.y,
                object.position.z,
            ),
            quaternion: new CANNON.Quaternion().setFromEuler(
                object.rotation.x, 
                object.rotation.y,
                object.rotation.z
            )
        })
        this.world.addBody(this.wall.body)
    }

    setHole(object) {
        this.hole = {}
        this.hole.shape = new CANNON.Sphere(0.51)
        this.hole.body = new CANNON.Body({
            mass: 0,
            position: new CANNON.Vec3(
                object.position.x,
                object.position.y,
                object.position.z,
            ),
            shape: this.hole.shape,
        })
        this.world.addBody(this.hole.body)

        // Add event listener for collision
        this.hole.body.addEventListener('collide', (event) => {
            setTimeout(() => {
                const collidedBody = event.contact.bi.id === this.hole.body.id ? event.contact.bj : event.contact.bi;
                if (collidedBody === this.ball.body) {
                    // Ball has collided with the hole
                    this.resetBall();
                }
            }, 0)
        });
    }

    setFinish(object) {
        this.hole = {}
        this.hole.shape = new CANNON.Sphere(0.51)
        this.hole.body = new CANNON.Body({
            mass: 0,
            position: new CANNON.Vec3(
                object.position.x,
                object.position.y,
                object.position.z,
            ),
            shape: this.hole.shape,
        })
        this.world.addBody(this.hole.body)

        // Add event listener for collision
        this.hole.body.addEventListener('collide', (event) => {
            setTimeout(() => {
                const collidedBody = event.contact.bi.id === this.hole.body.id ? event.contact.bj : event.contact.bi;
                if (collidedBody === this.ball.body) {
                    // Ball has collided with the hole
                    this.resetGame();
                }
            }, 0)
        });
    }

    moveBall(x, y) {
        const force = new CANNON.Vec3(x, 0, -y);
        this.ball.body.applyForce(force, this.ball.body.position);
    }

    resetBall() {
        this.ball.body.position.set(-8, 0, 8)
    }

    resetGame() {
        setTimeout(() => {
            this.resetBall();
        }, 0)
        
        // const bodies = this.world.bodies
        
        // for (const body of bodies) {
        //     this.world.remove(body)
        // }

        this.setLevel2()
    }

    setLevel2() {
        this.setBall()

        // Playing field frame
        this.setWall(objects.wallButtom)
        this.setWall(objects.wallTop)
        this.setWall(objects.wallLeft)
        this.setWall(objects.wallRight)
        this.setFloor()

        // Level 1 Walls
        const level1Walls = objects.levels[1].walls
        for (const wall of level1Walls) {
            this.setWall(wall)
        }

        const level1Holes = objects.levels[1].holes
        for (const hole of level1Holes) {
            this.setHole(hole)
        }

        this.level2 = new World(1)
    }
}

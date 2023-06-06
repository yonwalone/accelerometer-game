import Experience from '../Experience.js'
import Sensors from '../Utils/Sensors.js'
import CANNON from 'cannon'

export default class Physics {
    constructor() {
        this.experience = new Experience()
        this.sensors = new Sensors()
        this.debug = this.experience.debug
        this.time = this.experience.time

        // Set up
        if(this.debug.active) {
            this.physicsFolder = this.debug.ui.addFolder('physics')
            this.sensorsFolder = this.debug.ui.addFolder('sensors')
        }

        this.setWorld()
        this.setMaterials()
        this.setFloor()
        this.setBall()

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
            position: new CANNON.Vec3(0, 5, 0),
            shape: this.ball.shape,
            material: this.defaultMaterial,
        })
        this.world.addBody(this.ball.body)
    }

    moveBall(x, y) {
        const force = new CANNON.Vec3(-y, 0, -x)
        this.ball.body.applyForce(force, this.ball.body.position)
    }

    // setSensor() {
    //     if (this.debug.active) {
    //         this.sensorsFolder
    //             .add(this.sensors, 'x')
    //             .name('accelX')
    //             .min(-0.5)
    //             .max(0.5)
    //             .step(0.001)
    //     }
    //     if (this.debug.active) {
    //         this.sensorsFolder
    //             .add(this.sensors, 'z')
    //             .name('accelZ')
    //             .min(-0.5)
    //             .max(0.5)
    //             .step(0.001)
    //     }
    // }
}
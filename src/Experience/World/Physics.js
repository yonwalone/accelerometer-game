import Experience from '../Experience.js'
import CANNON from 'cannon'

export default class Physics {
    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.time = this.experience.time

        // Set up
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('physics')
        }

        this.setWorld()
        this.setMaterials()
        this.setFloor()
        this.setBall()

        this.time.on('tick', () =>
        {
            this.world.step(1/60, 1/60, 3)
            // this.applyForces()
        })

        console.log(window.DeviceOrientationEvent.arguments)
    }

    setWorld() {
        this.world = new CANNON.World()
        this.world.gravity.set(0, -9.82, 0)
    }

    setMaterials() {
        this.defaultMaterial = new CANNON.Material('default')
        this.defaultContactMaterial = new CANNON.ContactMaterial(
            this.defaultMaterial, 
            this.defaultMaterial,
            {
                friction: 0.1,
                restitution: 0.7
            }
        )
        this.world.addContactMaterial(this.defaultContactMaterial)
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
}
import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Cirlce {
    constructor(object) {
        this.position = object.position
        this.rotation = object.rotation
        this.color = object.color
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.CircleGeometry(1, 32)
    }

    setMaterial() {
        this.material = new THREE.LineBasicMaterial({ 
            color: this.color
        })
    }

    setMesh() {
        this.mesh = new THREE.LineLoop(this.geometry, this.material)
        this.mesh.position.set(
            this.position.x,
            this.position.y,
            this.position.z
        )
        this.mesh.rotation.set(
            this.rotation.x,
            this.rotation.y,
            this.rotation.z
        )
        this.scene.add(this.mesh)
    }
}
import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Hole {
    constructor(object) {
        this.position = object.position
        this.rotation = object.rotation
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.CircleGeometry(0.8, 32)
    }

    setMaterial() {
        this.material = new THREE.MeshBasicMaterial({
            color: 0x000000
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true
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
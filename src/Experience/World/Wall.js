import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Wall {
    constructor(dimensions, position, rotation) {
        this.dimensions = dimensions
        this.position = position
        this.rotation = rotation
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.BoxGeometry(
            this.dimensions.x,
            this.dimensions.y,
            this.dimensions.z,
        )
    }

    setTextures() {
        this.textures = {}

        this.textures.color = this.resources.items.ballColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.ballNormalTexture
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.receiveShadow = true
        this.mesh.castShadow = true
        this.mesh.position.set(
            this.position.x,
            this.position.y,
            this.position.z
        )
        this.mesh.rotateY(this.rotation)
        this.scene.add(this.mesh)
    }
}
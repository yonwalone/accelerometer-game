const objects = {
    wallButtom: {
        dimension: { x: 20, y: 1, z: 0.5 },
        position: { x: 0, y: 0.5, z: 10 },
        rotation: { x: 0, y: 0, z: 0 }
    },
    wallTop: {
        dimension: { x: 20, y: 1, z: 0.5 },
        position: { x: 0, y: 0.5, z: -10 },
        rotation: { x: 0, y: 0, z: 0 }
    },
    wallLeft: {
        dimension: { x: 20, y: 1, z: 0.5 },
        position: { x: -10, y: 0.5, z: 0 },
        rotation: { x: 0, y: Math.PI/2, z: 0 }
    },
    wallRight: {
        dimension: { x: 20, y: 1, z: 0.5 },
        position: { x: 10, y: 0.5, z: 0 },
        rotation: { x: 0, y: Math.PI/2, z: 0 }
    },
    levels: [
        {
            walls: [
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -6, y: 0.5, z: -9 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: 2, y: 0.5, z: -9 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: 5, y: 0.5, z: -9 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: 9, y: 0.5, z: -4 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: 9, y: 0.5, z: 2 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: 9, y: 0.5, z: 6 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: 4, y: 0.5, z: 9 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -5, y: 0.5, z: 9 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -9, y: 0.5, z: -6 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -9, y: 0.5, z: -2 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 10, y: 1, z: 0.5 },
                    position: { x: 2, y: 0.5, z: 3 },
                    rotation: { x: 0, y: Math.PI/4, z: 0 }
                },
                {
                    dimension: { x: 4, y: 1, z: 0.5 },
                    position: { x: 4, y: 0.5, z: 4 },
                    rotation: { x: 0, y: -Math.PI/4, z: 0 }
                },
            ],
            holes: [
                {
                    position: { x: -8, y: 0.05, z: -4 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: -9, y: 0.05, z: -1 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: -3, y: 0.05, z: 5 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: 2, y: 0.05, z: 5 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: 4, y: 0.05, z: -4 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: 7, y: 0.05, z: 1 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: 0, y: 0.05, z: 1 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: 3, y: 0.05, z: 0 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: -3, y: 0.05, z: -4 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
            ],
            start: {
                position: { x: -8, y: 0.05, z: 8 },
                rotation: { x: -Math.PI/2, y: 0, z: 0 },
                color: 0x000000
            },
            end: {
                position: { x: 8, y: 0.05, z: -8 },
                rotation: { x: -Math.PI/2, y: 0, z: 0 },
                color: 0x0000ff
            }
        },
        {
            walls: [
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -9, y: 0.5, z: 2 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 10, y: 1, z: 0.5 },
                    position: { x: 0, y: 0.5, z: -6 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -2, y: 0.5, z: -7 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 4, y: 1, z: 0.5 },
                    position: { x: -5, y: 0.5, z: -4 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 4, y: 1, z: 0.5 },
                    position: { x: -4, y: 0.5, z: -2 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -2, y: 0.5, z: -3 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 4, y: 1, z: 0.5 },
                    position: { x: 2, y: 0.5, z: -4 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 5, y: 1, z: 0.5 },
                    position: { x: 0, y: 0.5, z: -1 },
                    rotation: { x: 0, y: Math.PI/5, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -3, y: 0.5, z: 0.5 },
                    rotation: { x: 0, y: -Math.PI/8, z: 0 }
                },
                {
                    dimension: { x: 6, y: 1, z: 0.5 },
                    position: { x: -4, y: 0.5, z: 6 },
                    rotation: { x: 0, y: 0, z: 0 }
                },
                {
                    dimension: { x: 2, y: 1, z: 0.5 },
                    position: { x: -7, y: 0.5, z: 5 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
                {
                    dimension: { x: 4, y: 1, z: 0.5 },
                    position: { x: -4, y: 0.5, z: 4 },
                    rotation: { x: 0, y: Math.PI/2, z: 0 }
                },
            ],
            holes: [
                {
                    position: { x: 0, y: 0.05, z: -8 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: 7, y: 0.05, z: 3 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
                {
                    position: { x: -4, y: 0.05, z: -8 },
                    rotation: { x: -Math.PI/2, y: 0, z: 0 }
                },
            ],
            start: {
                position: { x: -8, y: 0.05, z: 8 },
                rotation: { x: -Math.PI/2, y: 0, z: 0 },
                color: 0x000000
            },
            end: {
                position: { x: 8, y: 0.05, z: -8 },
                rotation: { x: -Math.PI/2, y: 0, z: 0 },
                color: 0x0000ff
            }
        }
    ],
}

export default objects
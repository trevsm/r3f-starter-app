import React from 'react'

import { Canvas } from 'react-three-fiber'
import { OrbitControls, softShadows } from '@react-three/drei'

import { Lighting } from './lighting/Lighting'
import { Terrain } from './terrain/Terrain'
import { Box } from './object/Box.js'
import { Stats } from './stats/Stats'

import './App.css'

softShadows()

export default function App() {
  return (
    <Canvas
      shadowMap
      gl={{ alpha: false }}
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <Stats />
      <OrbitControls />
      <Lighting />
      <Box />
      <Terrain />
    </Canvas>
  )
}

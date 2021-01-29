import React, { useRef } from 'react'

import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls, softShadows } from '@react-three/drei'

import './App.css'

softShadows()

function Box(){
  const mesh = useRef()

  useFrame(()=>{
    mesh.current.rotation.x = mesh.current.rotation.y += 0.002
  })
  
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <OrbitControls/>
      <Box/>
    </Canvas>
  )
}

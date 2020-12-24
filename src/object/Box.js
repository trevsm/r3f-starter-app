import React, { useRef, useState } from 'react'
import { useSpring, a } from 'react-spring/three'
import { useFrame } from 'react-three-fiber'

export const Box = () => {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'pink' : 'lightblue',
  })

  useFrame(() => {
    ref.current.rotation.x += 0.005
    ref.current.rotation.z += 0.005
  })

  return (
    <a.mesh
      ref={ref}
      position={[0, 2, 0]}
      rotation={[0, 0, 0]}
      scale={props.scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial
        attach="material"
        roughness={0}
        metalness={0.1}
        color={props.color}
      />
    </a.mesh>
  )
}

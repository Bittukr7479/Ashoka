import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import './Plant.css'

function Model(props) {
  const { nodes, materials } = useGLTF('/cactus.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Cactus_Material_#2143937762_0'].geometry} material={materials.Material_2143937762} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Igolki_Material_#2143937762_0'].geometry} material={materials.Material_2143937762} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/cactus.gltf')

function LoremPage() {
  const [mesh, setMesh] = useState("#ffff");
  const [stripes, setStripes] = useState("#ffff");
  const [soul, setSoul] = useState("#ffff");

  return (
    <div>
      <div className="product-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight intensity={0.9} angle={0.1} penumbra={1}
              position={[10, 10, 10]} castShadow
            />
            <Model
              customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
              scale={[0.0114, 0.0114, 0.0114]} 
              position={[0, -0.3, 0]}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={4}   // Minimum zoom distance
              maxDistance={9}  // Maximum zoom distance
              // minPolarAngle={Math.PI / 2}  // Lock vertical rotation angle
              // maxPolarAngle={Math.PI / 2}  // Lock vertical rotation angle
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default LoremPage

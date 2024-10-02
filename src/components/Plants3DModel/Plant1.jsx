import React, { Suspense } from 'react'
import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, } from '@react-three/drei'
import './Plant.css'

function Model(props) {
  const { nodes, materials } = useGLTF('/aloevera.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Plante04_AloeVera} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.wire_177028149} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.wire_028089177} />
      </group>
    </group>
  )
}

useGLTF.preload('/aloevera.gltf')
function LoremPage() {
  const [mesh, setMesh] = useState("#ffff");
  const [stripes, setStripes] = useState("#ffff");
  const [soul, setSoul] = useState("#ffff");
  return (
    <div >
      <div class="product-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight intensity={0.9} angle={0.1} penumbra={1}
              position={[10, 10, 10]} castShadow
            />
            <Model
              customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
              scale={[0.4, 0.4, 0.4]} // Decrease the size of the model
              position={[0, 0.9, 0]}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={4}   // Minimum zoom distance
              maxDistance={9}  // Maximum zoom distance
        //       minPolarAngle={Math.PI / 2}  // Fix the vertical angle to 90 degrees
        // maxPolarAngle={Math.PI / 2}    // Limit horizontal rotation (right)
            />
            {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}


export default LoremPage

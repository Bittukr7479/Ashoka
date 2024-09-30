import React, { Suspense } from 'react'
import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, } from '@react-three/drei'
import './Lorem.css'

// function Model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/shoe.gltf')
//   return (
//     <group ref={group} {...props} dispose={null} scale={3}>
//       <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={ "red"}/>
//       <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh} />
//       <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={"blue"} />
//       <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={"blue"} />
//       <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.soul} />
//       <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes} />
//       <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={"blue"} />
//       <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={"blue"} />
//     </group>
//   )
// }
function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} position={[0, -3, 0]}>
        <group position={[0, 0, 10.524]}>
          <mesh geometry={nodes.Aloevera_Aloe_vera_0.geometry} material={materials.Aloe_vera} />
          <mesh geometry={nodes.Aloevera_Aloe_vera_0_1.geometry} material={materials.Aloe_vera} />
          <mesh geometry={nodes.Aloevera_Aloe_vera_0_2.geometry} material={materials.Aloe_vera} />
        </group>
        <mesh geometry={nodes.Cube_Envi_0.geometry} material={materials.Envi} position={[0, 100.025, 10]} />
        <mesh geometry={nodes.Cube001_Envi_0.geometry} material={materials.Envi} position={[0, 100.025, 0]} />
        <mesh geometry={nodes.Wood_Envi_0.geometry} material={materials.Envi} position={[0, -99.975, 0]} />
        <mesh geometry={nodes.Pot_Envi_0.geometry} material={materials.Envi} position={[0, 0, 10.524]} />
      </group>
    </group>
  )
}
useGLTF.preload('/scene.gltf')
function LoremPage() {
  const [mesh, setMesh] = useState("#ffff");
  const [stripes, setStripes] = useState("#ffff");
  const [soul, setSoul] = useState("#ffff");
  return (
    <div style={{width:'100%', height:'fit-content'}}>
      <div class="product-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight intensity={0.9} angle={0.1} penumbra={1}
              position={[10, 10, 10]} castShadow
            />
            <Model
              customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
              scale={[0.6, 0.6, 0.6]} // Decrease the size of the model
              position={[0, 0, 0]}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minPolarAngle={Math.PI / 2}  // Fix the vertical angle to 90 degrees
        maxPolarAngle={Math.PI / 2}    // Limit horizontal rotation (right)
            />
            {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}


export default LoremPage

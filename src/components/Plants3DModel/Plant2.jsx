// import React, { Suspense } from 'react'
// import { useRef, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, useGLTF, } from '@react-three/drei'
// import './Plant.css'

// function Model(props) {
//   const { nodes, materials } = useGLTF('/salviaRosmarinus.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0.044, 0]} scale={0.248}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
//           <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
//           <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
//           <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
//           <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
//           <mesh geometry={nodes.Object_9.geometry} material={materials.material_1} />
//           <mesh geometry={nodes.Object_10.geometry} material={materials.material_1} />
//           <mesh geometry={nodes.Object_11.geometry} material={materials.material_1} />
//           <mesh geometry={nodes.Object_12.geometry} material={materials.material_1} />
//           <mesh geometry={nodes.Object_13.geometry} material={materials.material_1} />
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/salviaRosmarinus.gltf')

// function LoremPage() {
//   const [mesh, setMesh] = useState("#ffff");
//   const [stripes, setStripes] = useState("#ffff");
//   const [soul, setSoul] = useState("#ffff");
//   return (
//     <div >
//       <div class="product-canvas">
//         <Canvas>
//           <Suspense fallback={null}>
//             <ambientLight />
//             <spotLight intensity={0.9} angle={0.1} penumbra={1}
//               position={[10, 10, 10]} castShadow
//             />
//             <Model
//               customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
//               scale={[11, 11, 11]} // Decrease the size of the model
//               position={[0, 2.5, 0]}
//             />
//             <OrbitControls
//               enablePan={true}
//               enableZoom={true}
//               enableRotate={true}
//               minPolarAngle={Math.PI / 2}  // Fix the vertical angle to 90 degrees
//         maxPolarAngle={Math.PI / 2}    // Limit horizontal rotation (right)
//             />
//             {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   )
// }


// export default LoremPage

import React, { Suspense } from 'react'
import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, } from '@react-three/drei'
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
              scale={[0.0114, 0.0114, 0.0114]} // Decrease the size of the model
              position={[0, -0.3, 0]}
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

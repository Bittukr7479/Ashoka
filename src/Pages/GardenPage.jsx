// src/Pages/GardenPage.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/virtualGarden.glb");  // Ensure this file is in the public folder
  return <primitive object={scene} {...props} />;
}

function GardenPage() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default GardenPage;

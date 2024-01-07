import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Dragon from "../models/dragonFountain.glb";

function Model() {
  const gltf = useGLTF(Dragon);
  return (
    <primitive
      object={gltf.scene}
      scale={[1.5, 1.5, 1.5]}
      position={[0, 0, 0]}
    />
  );
}

function DragonComponent() {
  return (
    <div style={{ width: "70vw", height: "50vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 15, 10]} angle={0.3} />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default DragonComponent;

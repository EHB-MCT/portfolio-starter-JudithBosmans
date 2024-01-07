import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Dragon from "./models/dragonFountain.glb";
import "./App.css";

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

function App() {
  return (
    <div className="App">
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

export default App;

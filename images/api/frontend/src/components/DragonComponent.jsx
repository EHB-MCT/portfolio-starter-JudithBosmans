import React, { Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Dragon from "../models/dragonFountain.glb";
import "../App.css";

function Model() {
  const gltf = useGLTF(Dragon);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={[8, 8, 8]}
      position={[0, 0, 0]}
    />
  );
}

function CameraPositionSetter() {
  const { camera } = useThree();
  camera.position.set(0, 30, 30);
  return null;
}

function DragonComponent() {
  return (
    <div className="dragon-component" style={{ width: "50vw", height: "30vh" }}>
      <Canvas>
        <CameraPositionSetter />
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

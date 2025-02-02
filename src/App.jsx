import { Canvas, useFrame } from "@react-three/fiber";

import "./App.css";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function App() {
  const RotatingCube = () => {
    const meshRef = useRef();
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
    return (
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshLambertMaterial color="#4682b4" opacity={0.5} />
      </mesh>
    );
  };
  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <directionalLight color={0xffffff} />
        <OrbitControls enableZoom enablePan enableRotate />
        <RotatingCube />
      </Canvas>
    </>
  );
}

export default App;

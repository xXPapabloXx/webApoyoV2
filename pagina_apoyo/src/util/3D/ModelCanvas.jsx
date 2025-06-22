import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import CameraController from "./CameraControler";

const mannequinPath = "/models/Mannequin-draco.glb";

const Mannequin = () => {
  const { scene } = useGLTF(mannequinPath);
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

const ClothingItem = ({ model, colorMap }) => {
  const { scene } = useGLTF(model.modelPath);
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current && colorMap) {
      groupRef.current.traverse((child) => {
        if (child.isMesh && child.material && child.material.name) {
          const newColor = colorMap[child.material.name];
          if (newColor) {
            child.material.color.set(newColor);
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [colorMap]);

  return (
    <group ref={groupRef} position={model.position} scale={model.scale}>
      <primitive object={scene} />
    </group>
  );
};


const ModelCanvas = ({ selectedModel, category, colorMap }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <perspectiveCamera makeDefault position={[0, 2, 8]} />
        <ambientLight intensity={1} />
        <pointLight position={[1, 1, 1]} intensity={8.0} />
        <directionalLight position={[0, 1, 1.5]} intensity={4.0} />
        <Suspense fallback={null}>
          <CameraController category={category} />
          <OrbitControls enableZoom={false} />
          <Mannequin />
          {selectedModel && (
            <ClothingItem model={selectedModel} colorMap={colorMap} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;

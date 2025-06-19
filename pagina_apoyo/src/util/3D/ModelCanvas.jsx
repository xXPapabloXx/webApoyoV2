import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

const mannequinPath = "/models/Mannequin-draco.glb";

const Mannequin = () => {
  const { scene } = useGLTF(mannequinPath);
  return <primitive object={scene} />;
};

const ClothingItem = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  return (
    <primitive
      object={scene}
      position={model.position}
      rotation={model.rotation}
      scale={model.scale}
    />
  );
};

const CameraController = ({ category }) => {
  const { camera } = useThree();
  const targetPositionRef = useRef(new Vector3(0, 2, 10)); // destino cámara
  const targetLookAtRef = useRef(new Vector3(0, 1, 0)); // punto a mirar

  useEffect(() => {
    const cameraPositions = {
      prendas_superiores: new Vector3(0, 2, 3),
      prendas_inferiores: new Vector3(0, -2, 3),
      vestidos_de_bano: new Vector3(0, 1.5, 2.5),
    };

    const lookAtTargets = {
      prendas_superiores: new Vector3(0, 15, 0),
      prendas_inferiores: new Vector3(0, -15, 0),
      vestidos_de_bano: new Vector3(0, 15, 0),
    };

    targetPositionRef.current =
      cameraPositions[category] || new Vector3(0, 2, 6);
    targetLookAtRef.current = lookAtTargets[category] || new Vector3(0, 1, 0);
  }, [category]);

  useFrame(() => {
    
    camera.position.lerp(targetPositionRef.current, 0.02);

    
    const currentLookAt = new Vector3().lerp(targetLookAtRef.current, 0.05);
    camera.lookAt(currentLookAt);
  });

  return null;
};

const ModelCanvas = ({ selectedModel, category }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <perspectiveCamera makeDefault position={[0, 2, 8]} />
        <ambientLight intensity={1} />
        <pointLight position={[1, 1, 1]} intensity={8.0} />
        <directionalLight position={[0, 1, 1.5]} intensity={4.0} />
        <Suspense fallback={null}>
          <CameraController category={category} />
          <Mannequin />
          {selectedModel && <ClothingItem model={selectedModel} />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;

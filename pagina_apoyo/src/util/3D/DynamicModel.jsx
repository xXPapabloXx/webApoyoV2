import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const DynamicModel = ({ modelPath, position, rotation, scale, rotates }) => {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame(({clock}) => {
    if (rotates && ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

export default DynamicModel;

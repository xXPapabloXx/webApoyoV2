import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, OrbitControls } from "@react-three/drei";
import IsolatedModel from "./IsolatedModel";


function RotatingModel({ modelPath, scale, rotation }) {
  const modelRef = useRef();
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.6;
    }
  });

  return (
    <IsolatedModel
      ref={modelRef}
      modelPath={modelPath}
      rotation={rotation || [0, 0, 0]}
      scale={scale || [1, 1, 1]}
    />
  );
}

export default function Rotation({ modelPath, scale, rotation }) {
  return (
    <div className="m-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[1, 1, 1]} intensity={10.0} />
          <directionalLight position={[0, 1, 1.5]} intensity={4.0} />
          <Bounds fit clip margin={1.2}>
            <Center>
              <RotatingModel modelPath={modelPath} scale={scale} rotation={rotation} />
            </Center>
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
}

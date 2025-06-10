import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, OrbitControls } from "@react-three/drei";
import IsolatedModel from "./IsolatedModel";

function RotatingModel({ modelPath }) {  
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    } 
  });

  return <IsolatedModel ref={modelRef} modelPath={modelPath} />;

}

export default function Rotation({ modelPath }) {  
    return (
      <div className="m-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <pointLight position={[1, 1, 1]} intensity={10.0} />
            <directionalLight position={[0, 1, 1.5]} intensity={4.0} />
            <Bounds fit clip observe margin={1.2}>
              <Center>
                <RotatingModel
                  modelPath={modelPath}
                />
              </Center>
            </Bounds>
          </Suspense>
        </Canvas>
      </div>
    );
}

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center } from "@react-three/drei";
import IsolatedModel from "./IsolatedModel";

function MouseReactiveModel({ modelPath, globalMouse, rotation, scale }) {
  const modelRef = useRef();
  const baseRotation = useRef(rotation || [0, 0, 0]);

  useFrame(() => {
    if (modelRef.current) {
      const [baseX, baseY, baseZ] = baseRotation.current;
      modelRef.current.rotation.y +=
        (baseY + globalMouse.current.x * 0.08 - modelRef.current.rotation.y) *
        0.03;
      modelRef.current.rotation.x +=
        (baseX - globalMouse.current.y * 0.05 - modelRef.current.rotation.x) *
        0.03;
      modelRef.current.rotation.z = baseZ;
    }
  });

  return (
    <IsolatedModel
      ref={modelRef}
      modelPath={modelPath}
      scale={scale || [1, 1, 1]}
    />
  );
}

export default function NoRotation({ modelPath, rotation, scale }) {
  const globalMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      globalMouse.current = { x, y };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="m-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[1, 1, 1]} intensity={10.0} />
          <directionalLight position={[0, 1, 1.5]} intensity={4.0} />
          <Bounds fit clip margin={1}>
            <Center>
              <MouseReactiveModel
                modelPath={modelPath}
                globalMouse={globalMouse}
                rotation={rotation}
                scale={scale}
              />
            </Center>
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
}

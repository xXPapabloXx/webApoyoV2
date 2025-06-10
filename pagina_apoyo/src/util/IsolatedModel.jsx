import { useEffect, useMemo, useState, forwardRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { LoadingManager } from "three";

const IsolatedModel = forwardRef(({ modelPath, ...props }, ref) => {
  const [cloned, setCloned] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const sceneClone = clone(gltf.scene);
        sceneClone.traverse((node) => {
          if (node.isMesh && node.material) {
            if (Array.isArray(node.material)) {
              node.material = node.material.map((mat) => mat.clone());
            } else {
              node.material = node.material.clone();
            }
          }
        });
        setCloned(sceneClone);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF:", error);
      }
    );
  }, [modelPath]);

  if (!cloned) return null;

  return (
    <group ref={ref}>
      <primitive object={cloned} {...props} />
    </group>
  );
});


export default IsolatedModel;

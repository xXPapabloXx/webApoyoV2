import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";

const CameraController = ({ category }) => {
  const { camera } = useThree();
  const targetPositionRef = useRef(new Vector3(0, 2, 10));
  const targetLookAtRef = useRef(new Vector3(0, 1, 0));

  useEffect(() => {
    const cameraPositions = {
      prendas_superiores: new Vector3(0, 2, 3),
      prendas_inferiores: new Vector3(0, 1, 4),
      vestidos_de_bano: new Vector3(0, 1.5, 2.5),
    };

    const lookAtTargets = {
      prendas_superiores: new Vector3(0, 15, 0),
      prendas_inferiores: new Vector3(0, -10, 0),
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

export default CameraController;

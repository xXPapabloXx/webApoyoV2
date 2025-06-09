import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Bounds, Center } from '@react-three/drei'

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} />
}

export default function ModelRender({ modelPath }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <Model modelPath={modelPath} />
            </Center>
          </Bounds>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

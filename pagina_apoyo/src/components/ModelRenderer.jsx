import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function ModelRenderer({ src, className = '', style = {} }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 1, 3)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.inset = 0
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const ambient = new THREE.HemisphereLight(0xffffff, 0x444444)
    ambient.position.set(0, 1, 0)
    scene.add(ambient)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1)
    dirLight.position.set(2, 4, 2)
    dirLight.castShadow = true
    dirLight.shadow.bias = -0.0001
    scene.add(dirLight)

    const shadowPlane = new THREE.PlaneGeometry(10, 10)
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.2 })
    const plane = new THREE.Mesh(shadowPlane, shadowMaterial)
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -0.01
    plane.receiveShadow = true
    scene.add(plane)

    const loader = new GLTFLoader()
    let model

    loader.load(src, (gltf) => {
      model = gltf.scene
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      scene.add(model)
    })

    const handleResize = () => {
      const { clientWidth: width, clientHeight: height } = container
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (model) scene.remove(model)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      className={`model-container ${className}`}
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', ...style }}
    >
      <div
        className="model-gradient"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(200,200,200,0.8))',
          zIndex: 0,
        }}
      />
    </div>
  )
}

export default ModelRenderer

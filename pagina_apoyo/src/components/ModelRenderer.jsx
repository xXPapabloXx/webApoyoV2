import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function ModelRenderer({ src }) {
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

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const light = new THREE.HemisphereLight(0xffffff, 0x444444)
    light.position.set(0, 1, 0)
    scene.add(light)

    const loader = new GLTFLoader()
    let model

    loader.load(src, (gltf) => {
      model = gltf.scene
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

  return <div ref={containerRef} style={{ width: '100%', height: '400px' }} />
}

export default ModelRenderer

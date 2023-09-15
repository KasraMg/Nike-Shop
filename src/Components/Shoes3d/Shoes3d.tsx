import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ContactShadows, Environment } from '@react-three/drei'
 
 

export default function Shoes3d() {
  return (
    <div className=' h-full sm-x2:h-[71%] w-[137%] md:!w-[108%]'>
       <Canvas eventSource={document.getElementById('root')!} eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <Environment preset="city" background blur={1} />
      <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
      
        <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
      
    </Canvas>
    </div>
 
  )
}

  
function Shoe(props:any) {
  const ref = useRef<any>()
  const { nodes , materials } = useGLTF('/nike_air_zoom_pegasus_36-transformed.glb') as any;
  useFrame((state) => { 
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
  })
  return (
    <group ref={ref}>
      <mesh receiveShadow castShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} {...props} />
    </group>
  )
}

useGLTF.preload('/nike_air_zoom_pegasus_36-transformed.glb')

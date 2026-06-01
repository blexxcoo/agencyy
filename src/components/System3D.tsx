import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Text, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Node = ({ position, label, color }: { position: [number, number, number], label: string, color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.2}
          color="white"
          font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3u559weua8z52UTS.woff"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
};

const Core = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#9b5cff" emissive="#9b5cff" emissiveIntensity={2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshStandardMaterial color="#35d6ff" emissive="#35d6ff" emissiveIntensity={1} transparent opacity={0.5} />
      </mesh>
      
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.1, 0.005, 16, 100]} />
        <meshStandardMaterial color="#24f0b6" emissive="#24f0b6" emissiveIntensity={0.5} transparent opacity={0.2} />
      </mesh>
      
      <Sphere args={[0.6, 64, 64]} scale={1}>
        <MeshDistortMaterial
          color="#9b5cff"
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#9b5cff"
          emissiveIntensity={0.5}
        />
      </Sphere>

      <Text
        fontSize={0.4}
        color="white"
        font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3u559weua8z52UTS.woff"
        fontStyle="italic"
        fontWeight="900"
        anchorX="center"
        anchorY="middle"
      >
        BXX
      </Text>

      <pointLight position={[0, 0, 0]} intensity={1.5} color="#9b5cff" />
    </group>
  );
};

export const System3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center" aria-hidden="true">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} />
          <pointLight position={[-10, -10, -10]} intensity={5} color="#35d6ff" />
          
          <Core />
          
          <Node position={[-3, 2, 0]} label="DEVELOP" color="#35d6ff" />
          <Node position={[3, 1, 0]} label="EDIT" color="#9b5cff" />
          <Node position={[1.5, -2.5, 0]} label="GROW" color="#24f0b6" />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

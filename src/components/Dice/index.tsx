import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DiceWrapper } from './styles';

function Dice() {
  return (
    <DiceWrapper>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial 
            color="#FFB5B5"
            emissive="#FFB5B5"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </DiceWrapper>
  );
}

export default Dice; 
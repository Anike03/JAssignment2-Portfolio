import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


function SparkleStars() {
  const ref = useRef();
  const starCount = 500;
  const positions = Array.from({ length: starCount }, () => [
    Math.random() * 100 - 50,
    Math.random() * 100 - 50,
    Math.random() * 100 - 50,
  ]).flat();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" color="#ffffff" size={0.5} sizeAttenuation />
    </points>
  );
}

export default function CanvasBackground() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 10, 100]} />
      <SparkleStars />
    </Canvas>
  );
}

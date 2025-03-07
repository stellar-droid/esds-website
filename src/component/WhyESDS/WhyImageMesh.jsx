import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import graphic from '../../images/graphicElement.png'



const WyImageMesh = () => {
  let meshRef = useRef()

  return (
    <mesh  ref={meshRef}  position={[-0.918, 0.354, 0.433]} rotation={[0, -1.571, 0]}  scale={[0.5,0.22,0]}>
      {/* Create a plane geometry */}
      <planeGeometry args={[1, 1]} />
      {/* Load the image texture */}
      <meshBasicMaterial map={new THREE.TextureLoader().load(graphic)} transparent opacity={1} />
    </mesh>
  );
}

export default WyImageMesh
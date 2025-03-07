import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import graphic from '../../images/graphicElement.png'
import gsap from 'gsap';


const ImageMesh = () => {
  let meshRef = useRef()

  useLayoutEffect(() => {
    const mesh1 = meshRef.current
 
    let t23 = gsap.timeline({
      scrollTrigger: {
        trigger: "#server-model",
        start: "top top",
        end: () => innerHeight *6,
        scrub: true,
        // markers: true,
   
      },
    });
    t23.fromTo(mesh1.position, {y: 0.354}, {y: 0.354, duration : 2})
    t23.fromTo(mesh1.position, {y: 0.354}, {y: 1.3, duration : 2})
    t23.fromTo(mesh1.position, {y: 1.3}, {y: 0.354, duration : 2})
    t23.fromTo(mesh1.position, {y: 0.354}, {y: 0.354, duration : 2})
    
  

    return () => {
      if(t23) t23.kill()
    };
  },[])
  return (
    <mesh  ref={meshRef}  position={[-0.918, 0.354, 0.433]} rotation={[0, -1.571, 0]}  scale={[0.5,0.22,0]}>
      {/* Create a plane geometry */}
      <planeGeometry args={[1, 1]} />
      {/* Load the image texture */}
      <meshBasicMaterial map={new THREE.TextureLoader().load(graphic)} transparent opacity={1} />
    </mesh>
  );
}

export default ImageMesh
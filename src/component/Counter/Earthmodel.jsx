import React, { useRef, useEffect } from 'react';
import Globe from 'three-globe';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthmap from '../../images/earth texture/Earth Map Without tech.jpg';
// import markerImage from '../../images/india_flag.png'; // Replace with your image path

function Earthmodel() {
  const globeRef = useRef();

  const myData = [
    { lat: 19.9975, lng: 73.789803, radius: 8, color: '#00C1FE', speed: 2 },
    { lat: 58.621322361013092, lng: 77.20347613099612, radius: 8, color: '#00C1FE', speed: 2, repeat: 1000 },
    { lat: 12.9716, lng: 77.5946, radius: 8, color: '#00C1FE', speed: 2, repeat: 1000 },
    { lat: 53.8008, lng: 1.5491, radius: 8, color: '#00C1FE', speed: 2, repeat: 1000 },
    { lat: 40, lng: -80, radius: 8, color: '#00C1FE', speed: 2, repeat: 1000 },
  ];

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(12, 30, 130);
    camera.scale.set(6.5, 7, 6.1);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight*1.1);
    renderer.setClearColor("#010614");
    globeRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
    controls.rotateSpeed = 0.5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 7, 5).normalize();
    scene.add(directionalLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      earthmap,
      (texture) => {
        const globe = new Globe()
          .globeImageUrl(earthmap)
          .showAtmosphere(true)
          .atmosphereColor("#3a228a")
          .atmosphereAltitude(0.4)
          .ringsData(myData)
          .ringColor(() => "#fff");

        const globeMaterial = globe.globeMaterial();
        globeMaterial.color = new THREE.Color('#3110c2');
        scene.add(globe);

        const arcsData = [];
        for (let i = 0; i < myData.length; i++) {
          const start = myData[i];
          const end = myData[(i + 1) % myData.length];
          arcsData.push({
            startLat: start.lat,
            startLng: start.lng,
            endLat: end.lat,
            endLng: end.lng,
            color: '#ff0000',
          });
        }

        globe.arcsData(arcsData)
          .arcColor(() => '#fff')
          .arcAltitudeAutoScale(0.3)
          .arcStroke(0.1)
          .arcDashLength(0.9)
          .arcDashGap(2)
          .arcDashInitialGap(() => Math.random() * 5)
          .arcDashAnimateTime(2000);

        // const markerTexture = new THREE.TextureLoader().load(markerImage);
        // myData.forEach(dataPoint => {
        //   const marker = createMarker(dataPoint.lat, dataPoint.lng, markerTexture);
        //   scene.add(marker);
        // });

        const animate = function () {
          requestAnimationFrame(animate);
          controls.update();
          globe.rotation.y += 0.0005;
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the texture:', error);
      }
    );

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (globeRef.current) {
        globeRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);


  return <div ref={globeRef} style={{ width: '100vw', height: '100vh', background: "#fff", marginTop: "18vw" }} />;
}

export default Earthmodel;

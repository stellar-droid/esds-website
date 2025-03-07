import { Canvas } from "@react-three/fiber"
import MobileServer from '../../../public/MobileServer'
import { Suspense, useEffect, useRef, useState } from "react"



export default function MobileModel() {
    const mountRef = useRef(null);
  const [isModelVisible, setIsModelVisible] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsModelVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mount) {
      observer.observe(mount);
    }

    return () => {
      if (mount) {
        observer.unobserve(mount);
      }
    };
  }, []);
    return (
        <>
      <div ref={mountRef} style={{position:"absolute", top: 0, width: "100%",  height: "100%", opacity:1,zIndex:0}} className="" id="mobile-server-model">
      {isModelVisible &&
   <Canvas  camera={{position: [-2.8,-0.29,1.2],  zoom: 1.6}}  scene={{position: [0.2,-1.4,-0.1], AmbientLight:[0,0,0] ,rotation: [-0.1,-0.2,-0.18]}} >
        {/* <AmbientLight color={"white"} /> */}
       <directionalLight  color={"#4C7DBD"} position={[-1,2,4]} rotation={[0,-8,1]}  intensity={10}  /> 
      
      <spotLight  color={"white"} position={[1,-2,-4]} rotation={[1,2,1]} intensity={0} />
     <pointLight color={"white"} position={[-4,2,1]} intensity={600}  />
     <pointLight  color={"#4C7DBD"} position={[5,0,8]}  intensity={2000}  />


<Suspense fallback={""}>
<MobileServer  />
</Suspense>
</Canvas>}

        </div>
        </>
    )
}
import { Canvas } from "@react-three/fiber"
import FooterServer from "../../../public/FooterServer";
import { Suspense, useEffect, useRef, useState } from "react"


export default function ContactServer() {
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
      <div ref={mountRef} style={{position:"absolute", top: "40%", left : 0,  width: "100%",height: "100%",  padding : 0, opacity:1,zIndex:0}} className="" id="topesction-server">
      {isModelVisible &&
      <Canvas  camera={{position: [8,1.19,2.5],scale: [1.5,1.5,1.8],  zoom: 1.85}}  scene={{position: [-0.8,1.5,-0.1], AmbientLight:[0,0,0] ,rotation: [0,0,0]}} >

      <directionalLight  color={"#4C7DBD"} position={[4,1,12]} rotation={[0,0,1]}  intensity={10}  />
      <spotLight  color={"white"} position={[2,22,12]} intensity={1000} />
     <pointLight color={"white"} position={[-10,6,0]} intensity={2000}  />
     <pointLight  color={"white"} position={[0,0,28]}  intensity={2000}  />


<Suspense fallback={<h1>laoding</h1>}>
<FooterServer  />
</Suspense>
</Canvas>}

        </div>
        </>
    )
}
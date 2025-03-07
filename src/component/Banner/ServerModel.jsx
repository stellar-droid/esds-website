import { Canvas } from "@react-three/fiber"
// import Model from "../../../public/Server"
import { memo, Suspense, useEffect, useRef, useState } from "react"
import LowServer from "../../../public/LowServer";
// import compressed from "../../../public/Compressed-Server";

const ServerModel = memo (() => {
    
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

    useEffect(() => {
      
      if(document.getElementById("server-model").childNodes[0] != undefined) {
        document.getElementById("server-model").childNodes[0].style.pointerEvents = "none"
      } 
      },[mountRef.current])



    return (
        <>
      <div ref={mountRef} style={{position:"fixed", top: 0, width: "100vw",  height: "100vh", opacity:1,zIndex:8, pointerEvents: "none"}} className="" id="server-model">
      {isModelVisible &&
      <Canvas  camera={{position: [-1.8,0.69,1],  zoom: 1.8}}  scene={{position: [-0.2,-0.8,-0.1], AmbientLight:[0,0,0] ,rotation: [-0.05,0.1,-0.18]}} >

      <directionalLight  color={"#4C7DBD"} position={[4,1,12]} rotation={[0,0,1]}  intensity={10}  />
      <directionalLight  color={"#4C7DBD"} position={[0,10,-2]} rotation={[0,0,0]}  intensity={0}  />
      <directionalLight color={"#C2D9FF"} position={[5,10,-5]} rotation={[0,0,0]}  intensity={0}  />
      <spotLight  color={"white"} position={[2,22,12]} intensity={1000} />
     <pointLight color={"white"} position={[-10,6,0]} intensity={2000}  />
     <pointLight  color={"white"} position={[0,0,28]}  intensity={2000}  />
     <pointLight color={"#ffffff"} position={[0,0,4]} intensity={0}  />
     <directionalLight color={"#ffffff"} position={[0,10,-2]} rotation={[0,0,0]}  intensity={0}  />

<Suspense fallback={null}>
<LowServer  />
</Suspense>
</Canvas>}

        </div>
        </>
    )
})

export default ServerModel;
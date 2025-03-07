import { Canvas } from "@react-three/fiber"
import ModelTwo from "../../../public/ModelTwo"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"



export default function WhyESDSServer() {
    
    return (
        <>
      <div style={{position:"fixed", top: 0, width: "100vw",  height: "100vh", opacity:1,zIndex:4}} className="" id="server-model">
      <Canvas  camera={{position: [-8.2,0.69,1],  zoom: 2.15}}  scene={{position: [0.2,-1.8,-0.1], AmbientLight:[0,0,0] ,rotation: [0,0.11,-0.1]}} >            {/* <directionalLight color={"#4C7DBD"} position={[5,5,0]} rotation={[0,0,0]}  intensity={5}  /> */}
       {/* <pointLight color={"#0a2472"} position={[5,10,-5]}   intensity={2000}  /> */}
  <pointLight color={"white"} position={[-15,5,3]} intensity={2000}  />
  <directionalLight color={"#ffffff"} position={[0,10,-2]} rotation={[0,0,0]}  intensity={10}  />
  {/* <OrbitControls /> */}
<Suspense fallback={null}>
    
<ModelTwo  />
</Suspense>
</Canvas>

        </div>
        </>
    )
}
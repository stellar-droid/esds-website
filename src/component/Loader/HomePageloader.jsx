import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from "react"
import './loader.css'
import loader from '../../images/loader-cloud.svg'
import CountUp from "react-countup";

export default function HomePageLoader() {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        gsap.fromTo(".home-loader-bg", {opacity: 1}, {delay : 3, opacity: 0, duration : 1.5, ease : "power3.inOut", onComplete : () => {
 document.body.style.overflowY = "visible"
        }})
    },[])

    return (
        <div className="home-loader-bg">
           {/* <div className="cloud-load">
           <img loading="lazy" src={loader} alt="loader" className="loader" />
           <div className="shadow"></div>
           </div> */}
            <div className="top-shutter"> <div className="counter-slot">
                        <CountUp end={100} duration={4} />
                        <span>%</span>
                    </div></div>
        </div>
    )
}
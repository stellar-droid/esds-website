import { useLayoutEffect } from 'react'
import './loader.css'
import gsap from 'gsap'

export default function Loader({time}) {
    // console.log("meghna")
    // useLayoutEffect(() => {
    //     console.log("meghna")
    //   gsap.fromTo(".line-bar", {y : "-100%"}, {y : 0, stagger : 0.05, duration : 0.5,ease: "sine.inOut"}, "key1")
    //   gsap.fromTo(".line-bar", {y : "0"},  {delay : 2,y : "100%", stagger : 0.06, duration : 1,ease: "sine.inOut" },"key2")
    //   gsap.to(".center-text", {delay :2.5,y : "100vh", duration : 1},"key2")
    // },[])
    return ( 
            <section className='loader-container'>
                {/* <div className="loader">
                    <div className="line-bar"> </div>
                    <div className="line-bar"></div>
                    <div className="line-bar"></div>
                    <div className="line-bar"></div>
                    <div className="line-bar"></div>
                    <div className="loader-center-text">
                        <p className='center-text'>{centerText}</p>
                    </div>
                </div> */}
                <h1>{time}</h1>
            </section>
    )
}
import Starfield from "./SpaceBackground";
import MobileModel from "./MobileModel";
import './Mobilebanner.css'
import SparklesPreview from "../../components/ui/Heading text effect/BannerHeading";
import SparklesPreview2 from "../../components/ui/subheading text effect/bannerSubheading";
import { useLayoutEffect } from "react";
import ScrollIndicator from "../../components/ui/ScrollIndicator";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

export default function MobileBanner() {
    
    let navigate = useNavigate()

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(".splash-first", { skewX: 5, y: 15, opacity : 0, rotateX : 40 }, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut" })
        gsap.fromTo(".splash-second", { skewX: 5, y: 15, opacity : 0, rotateX : 40 }, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut"  })
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mobile-banner",
                start : 'top top',
                end : () => innerHeight *3.5,
                pin : true,
                scrub : true,
                onLeave : () => {
                    document.querySelector(".mobile-banner").style.position = "relative"
                }

            }
        })
        t1.to(".mobile-splash-screen", {opacity : 0, },"key")
        t1.fromTo(".mobile-first-screen", {opacity: 0}, { zIndex : 5, opacity : 2, onStart: () => { gsap.fromTo(".mobile-first", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
        gsap.fromTo(".mobile-second", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
      }},"key1")
       t1.to(".mobile-first-screen", {opacity: 0, duration: 0.1, zIndex: -1}, "key2")
      t1.fromTo(".mobile-second-screen", {opacity: 0}, { zIndex : 5, opacity : 2, onStart: () => { gsap.fromTo(".mobile-third", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
      gsap.fromTo(".mobile-fourth", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
    }},"key3")
    t1.to(".mobile-second-screen", {zIndex : -1, opacity: 0, duration: 0.1}, "key4")
    t1.fromTo(".mobile-third-screen", {opacity: 0}, {zIndex: 5, opacity : 2, onStart: () => {  gsap.fromTo(".mobile-fifth", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
    gsap.fromTo(".mobile-sixth", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
  }},"key5")
  t1.to(".mobile-third-screen", {zIndex : -1, opacity: 0,duration: 0.1}, "key6")
  t1.fromTo(".mobile-fourth-screen", {zIndex : 2,opacity: 0}, {opacity : 2, onStart: () => { gsap.fromTo(".mobile-seventh", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
  gsap.fromTo(".mobile-eight", { skewX: 5, y: 15, opacity : 0, rotateX : 40}, { opacity: 1, y: 0, skewX: 0, duration: 0.5, rotateX : 0, ease: "power1.inOut",})
}, },"key7")
        return () => {
            if(t1) t1.kill()
        }
    },[])
    return(
        <section className="mobile-banner">
             <ScrollIndicator /> 
           <div className="space-bg">
            <Starfield />
           </div>
                <div className="mobile-banner-container">
                    <div className="top-server">
                        <MobileModel />
                    </div>
                    <div className="banner-content">
                        <div className="mobile-splash-screen">
                            <div className="splash-screen-first">
                                <p className="splash-first">Enabling the Future of Digital India</p>
                            </div>
                            <div className="splash-screen-second">
                                <p className="splash-second">We’re an ethical Cloud & Data center service provider</p>
                            </div>
                        </div>
                    <div className="mobile-first-screen">
                            <div className="mobile-screen-first">
                                <p className="mobile-first">Local By Roots, Global By Reach </p>
                            </div>
                            <div className="mobile-screen-second">
                                <p className="mobile-second">Embrace a cloud that recognizes your potential and frees you to grow</p>
                            </div>

                        <div style={{ textAlign: "center", marginTop: "4vh" }}>
                        <Link to={"/cloud-services"}> <button onClick={() => { navigate('/contact-us') }} class="CTA-button" data-text="Awesome">
                                <span class="actual-text">&nbsp;Get Started&nbsp;</span>
                                <span aria-hidden="true" class="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                            </button> </Link>
                        </div>
                        </div>
                       <div className="mobile-second-screen">
                        <div className="mobile-screen-third">
                            <p className="mobile-third">Gain the All-in-one advantage with our Cloud infra management & SaaS solutions</p>
                        </div>
                        <div className="mobile-screen-fourth">
                            <p className="mobile-fourth">Do you want a partner that goes beyond the basics?</p>
                        </div>
                        <div style={{ textAlign: "center", marginTop: "4vh" }}>
                        <Link to={"/software-as-a-service"}><button onClick={() => { navigate('/contact-us') }} class="CTA-button" data-text="Awesome">
                                <span class="actual-text">&nbsp;Get Started&nbsp;</span>
                                <span aria-hidden="true" class="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                            </button></Link> 
                        </div>
                            </div>
                    <div className="mobile-third-screen">
                        <div className="mobile-screen-fifth">
                            <p className="mobile-fifth">Managing cyber security for Top Banks & Cloud for 50 of India's Fortune 500</p>
                        </div>
                        <div className="mobile-screen-sixth">
                            <p className="mobile-sixth">Which side are you on-An Indian expert with 20+ years of experience or an expansive MNC?</p>
                        </div>
                        <div style={{ textAlign: "center", marginTop: "4vh" }}>
                        <Link to={"/managed-services"}> <button onClick={() => { navigate('/contact-us') }} class="CTA-button" data-text="Awesome">
                                <span class="actual-text">&nbsp;Get Started&nbsp;</span>
                                <span aria-hidden="true" class="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                            </button></Link>
                        </div>
                    </div>
                    <div className="mobile-fourth-screen">
                    <div className="mobile-screen-seventh">
                            <p className="mobile-seventh">We’re with you, helping you conquer challenges and proper your business goals</p>
                        </div>
                        <div className="mobile-screen-eight">
                            <p className="mobile-eight">Tired of Cloud providers that leave you with just a login portal?</p>
                        </div>    
                        <div style={{ textAlign: "center", marginTop: "4vh" }}>
                            <button onClick={() => { navigate('/contact-us') }} class="CTA-button" data-text="Awesome">
                                <span class="actual-text">&nbsp;Get Started&nbsp;</span>
                                <span aria-hidden="true" class="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                            </button>
                        </div>
                     </div>
                    </div>
                </div>
        </section>
    )
}
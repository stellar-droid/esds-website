import { useEffect, useLayoutEffect, useState } from "react"
import './loader.css'
import gsap from "gsap"
import { CustomEase } from 'gsap/all'
import SparklesPreview2 from "../../components/ui/subheading text effect/bannerSubheading"

export default function InnerPageLoader() {

    useLayoutEffect(() => {
        gsap.registerPlugin(CustomEase)
 document.body.style.overflow = "hidden"
        CustomEase.create(
            "title-ease",
            "0.6, -0.28, 0.735, 0.045"
          );
          CustomEase.create(
            "bg-ease",
            "0.86, 0, 0.07, 1"
          );
        gsap.to(".loader-char", {delay : 1, y : "-50vh", filter : "blur(0)", stagger : 0.08, ease : "title-ease", duration: 0.7 }, "key")
        gsap.to(".loader-char", {delay : 2, y : "-100vh", filter : "blur(6px)",stagger : 0.08, ease : "title-ease", duration: 1 }, "key1")
        gsap.to(".innerpage-loader", {delay : 2.2, y : "-100%", ease : "bg-ease", duration: 1.8, onComplete : () => {
            document.body.style.overflowY = "visible"
            document.getElementById("innerpage-loader").style.display = "none"
                   } }, "key1")

    },[])
    
    return (
        <div>
            <section id="innerpage-loader" className="innerpage-loader">
                      <div className="loader-title-box">
                      <SparklesPreview2 word={[
                                {
                                    text: "ESDS",
                                    class: "loader-center-text",
                                    className: "inline-block loader-char"
                                },
                                
                            ]} />
                      </div>
            </section>
        </div>
    )
}
import gsap from "gsap"
import SparklesPreview2 from "../../components/ui/subheading text effect/bannerSubheading"
import { useLayoutEffect } from "react"
import { CustomEase } from "gsap/all"

export default function HeadingAnimation({CharArray}) {

    
    useLayoutEffect(() => {

        gsap.registerPlugin(CustomEase)

        CustomEase.create(
            "hop",
            "0.77, 0, 0.175, 1"
          );
        gsap.fromTo(".top-heading-char", { x: -50, opacity: 0, skewX: 22, }, { opacity: 1, x: 0, skewX: 0, stagger: 0.03, duration: 0.4, ease: "hop"})  
        gsap.fromTo(".top-heading-char2", { x: -50, opacity: 0, skewX: 22, }, { opacity: 1, x: 0, skewX: 0, stagger: 0.03, duration: 0.4, ease: "hop"} )  
        gsap.fromTo(".top-heading-char3", { x: -50, opacity: 0, skewX: 22, }, { opacity: 1, x: 0, skewX: 0, stagger: 0.03, duration: 0.4, ease: "hop"})  
    },[])
  
    return (
        <>
            <h3 className="heading-banner">
            <SparklesPreview2 className={"sections-heading"} word={CharArray} />
            </h3>
        </>
    )
}
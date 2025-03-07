import gsap from "gsap"
import SparklesPreview2 from "../../components/ui/subheading text effect/bannerSubheading"
import { useLayoutEffect } from "react"
import { CustomEase } from "gsap/all"

export default function SubheadingAnimation({CharArray, classNa}) {

    
    useLayoutEffect(() => {

        gsap.registerPlugin(CustomEase)

        CustomEase.create(
            "hop",
            "0.77, 0, 0.175, 1"
          );
        gsap.fromTo(".top-heading-char1", { x: -50, opacity: 0, skewX: 22, }, { opacity: 1, x: 0, skewX: 0, stagger: 0.02, duration: 0.2, ease: "hop"})  
    },[])
  
    return (
        <>
            <p>
            <SparklesPreview2 classna={"subheading-banner"} className={"sections-heading"} word={CharArray} />
            </p>
        </>
    )
}
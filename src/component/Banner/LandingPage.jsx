import { lazy, useEffect } from "react"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
const Banner = lazy(() => import("../Banner/Banner"))
const Testimonial = lazy(() => import("../Testimonial/Testimonial"))
const Partner = lazy(() => import("../Partner/Partner"))
const CounterSection = lazy(() => import("../Counter/Counter"))
const GlobeSection = lazy(() => import("../Counter/GlobeSection"))
const FourB = lazy(() => import("../FourB/FourB"))
import partner1 from '../../images/partners/partner1.png'
import partner2 from '../../images/partners/partner2.png'
import partner3 from '../../images/partners/partner3.png'
import partner4 from '../../images/partners/partner4.png'
import partner5 from '../../images/partners/partner5.png'
import partner6 from '../../images/partners/partner6.png'
import partner7 from '../../images/partners/partner7.png'

export default function LandingPage() {
    let logos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7]
    return (
        <>
        <ReactLenis root options={{smoothWheel: true, duration: 3, easing : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier : 2 }}>
            <Banner />
            <Partner logosArray={logos} />
            <CounterSection />
            <GlobeSection /> 
            <Testimonial />
            <FourB />
         
            </ReactLenis>
        </>
    )
}

import { lazy, useEffect, useRef, useState } from "react"
import Partner from "../Partner/Partner"
const CounterSection = lazy(() => import("../Counter/Counter"))
const GlobeSection = lazy(() => import("../Counter/GlobeSection"))
const Testimonial = lazy(() => import("../Testimonial/Testimonial"))
const Banner = lazy(() => import("./Banner"))
import './BannerLanding.css'

import axisBank from '../../images/partners/partner1.png'
import UnionBank from '../../images/partners/partner2.png'
import MuthoonGroup from '../../images/partners/partner3.png'
import DCBBank from '../../images/partners/partner4.png'
import TATACapital from '../../images/partners/partner5.png'
import SBICpas from '../../images/partners/partner6.png'
import Sidbi from '../../images/partners/partner7.png'
import CTA_icon from '../../images/CTA-icon.svg'
const FourB = lazy(() => import("../FourB/FourB"))
import JungleVideo from '../../images/Jungle-to-sky.mp4'
import MobileTestimonial from "../Testimonial/MobileTestimonial.jsx"
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import FooterFinal from "../FinalFooter/FooterFinal"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import MobileBanner from './MobileBanner.jsx'
import MobileNavbar from "../Navbar/MonileNavbar.jsx"
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import Starfield from "./SpaceBackground.jsx"
import { useDispatch, useSelector } from "react-redux"

import ScrollIndicator from "../../components/ui/ScrollIndicator.jsx"
import { Helmet } from "react-helmet-async"
export default function Landing() {
    let logos = [axisBank, UnionBank, MuthoonGroup, DCBBank, TATACapital, SBICpas, Sidbi]
    let [videohide, setvideohide] = useState(true)

  let dispatch = useDispatch()

                    
  const demoState = useSelector(state => state.DemoState);

      useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
    return (
      <div>
        <MobileNavbar />
        <ReactLenis
          root={demoState.navbar ? false : true}
          options={{
            smoothWheel: true,
            duration: 4,
            easing: (t) => Math.min(1.5, 1.001 - Math.pow(2, -14 * t)),
            touchMultiplier: 8,
            smoothTouch: true,
            smooth: true,
          }}
        >
          <div className="homePage">
            <section className="landing-page">
              <Header />
              {window.innerWidth > 1024 ? <Banner /> : <MobileBanner />}

              <Partner color={"#010614"} logosArray={logos} />
              <CounterSection />
              <GlobeSection />
              {window.innerWidth > 1024 ? (
                <Testimonial />
              ) : (
                <MobileTestimonial />
              )}
              <FourB />
              <FooterFinal BgColor={"#000"} />
            </section>
          </div>
        </ReactLenis>
      </div>
    );
}
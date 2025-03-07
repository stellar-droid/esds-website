import power_first from '../../images/colocation/colocation-img/first.jpg'
import power_second from '../../images/colocation/colocation-img/second.jpg'
import power_third from '../../images/colocation/colocation-img/third.jpg'
import power_fourth from '../../images/colocation/colocation-img/fourth.jpg'
import power_fifth from '../../images/colocation/colocation-img/fifth.jpg'
import Data_center_rack from '../../images/colocation/data-rack.svg'
import { GoCheckCircle } from "react-icons/go";
import DC_map from '../../images/colocation/india-location.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import why_choose_esds from '../../images/colocation/why-Choose-esds.png'
import { useDebugValue, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import CountUp from 'react-countup';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Partner from '../Partner/Partner'
import HeaderTwo from '../Navbar/HeaderTwo'
import banner_video from '../../images/colocation/banner-video.mp4'
import HeadingBottomLine from '../../components/ui/HeadingBottomLine'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading'
import './Colocations.css'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import Header from '../Header/Header'
import InnerPageLoader from '../Loader/InnerPageLoader.jsx'
import Topsection from '../FinalFooter/Topsection'
import FooterFinal from '../FinalFooter/FooterFinal'
import partner1 from '../../images/colocation/logo1.png'
import partner2 from '../../images/colocation/logo2.png'
import partner3 from '../../images/colocation/logo3.png'
import partner4 from '../../images/colocation/logo4.png'
import partner5 from '../../images/colocation/logo5.png'
import partner6 from '../../images/colocation/logo6.png'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
import Loader from '../Loader/Loader'
import MobileNavbar from '../Navbar/MonileNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion";

export default function Colocation() {
    let [startCounter, setStartCounter] = useState(false)
    let [playOnce, setPlayOnce] = useState(false)
    let logos = [partner1, partner2, partner3,partner4,partner5, partner6]
    const demoState = useSelector(state => state.DemoState);

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
  },[])
    let {city} = useParams()
    const pauseTimestamp = 3
    const navigate = useNavigate()
    const videoRef = useRef(null);
  
    const contactNavigation = () => {
        navigate('/contact-us');
      };

      useEffect(() => {
        window.addEventListener("scroll", (e) => {
          if(window.scrollY > 500) {
            if( document.getElementById("scroll-down")) {

              document.getElementById("scroll-down").style.display = "none"
            }
          }else {
            if(document.getElementById("scroll-down")){

              document.getElementById("scroll-down").style.display = "block"
            }
          }
        })
  
    },[])
    useEffect(() => {
      // Set a 3-second delay before playing the video
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 3000);
  
      // Clear the timer if the component unmounts before the delay
      return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        document.querySelectorAll(".DC-rack").forEach((div1) => {
            div1.addEventListener("mouseover", (e) => {
              e.target.parentElement.nextSibling.classList.remove("hide-map-dc")
            })
            div1.addEventListener("mouseleave", (e) => {
              // console.log()
              e.target.parentElement.children[1].classList.add("hide-map-dc")
            })
        })
    },[])
 
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin);
      const mm = gsap.matchMedia();


      if(city) {
        let targetHeight = document.getElementById("DC-map").offsetHeight * 6
             

        gsap.to(window, {
            scrollTo: targetHeight,
            duration: 1,
            ease: "power2.inOut"
          });
    }else {
      gsap.to(window, {
        scrollTo:0,
        duration: 1,
        ease: "power2.inOut"
      });
    }
    
      // Define your media queries and corresponding animations
      mm.add("(min-width: 1199px)", () => {
        let t3 = gsap.timeline({
          scrollTrigger: {
              trigger: ".powerOfcolocation",
              start: "top top",
              end: () => innerHeight * 4,
              pin : true,
              scrub: 1,
              // markers: true,
            onLeave : () => {
              document.getElementById("powerOfcolocation").style.position = "relative"
            }
            }
            
      });
        t3.to(".slide-list-inner", {x : "-70vw", ease: "power1.inOut"})
       
        let t4 = gsap.timeline({
          scrollTrigger : {
            trigger : ".powerOfcolocation",
            start : "top 80%",
            end : "bottom top",
            scrub: true,
            // markers : true
          }
        })
        t4.to(".third-section-head", {y : 0, opacity : 1, duration : 2, skewY : 0,}, "key1")
        t4.to(".third-section-question",{y : 0, opacity : 1, duration : 2, skewY : 0,}, "key1")
        t4.to(".third-section-subtitle", { delay : 0.5,y : 0, opacity : 1, duration : 2, skewY : 0,}, "key2" )
        t4.to(".third-section-head",  {y : 40, opacity : 0, duration : 1, skewY : -2,}, "key2")
        t4.to(".third-section-question",  {y : 40, opacity : 0, duration : 1, skewY : -2,}, "key2")

      let t5 = gsap.timeline({
          scrollTrigger: {
              trigger: ".DC-map",
              start: "top top",
              end: () => innerHeight * 7,
              pin : true,
              scrub: 1,
              // markers: true,
            }           
            
      });
      t5.to(".map-image", {scale: 1.8, duration : 2, ease : "power1.inOut"},"key5")
      t5.fromTo(".Data-Center", { x : 0, opacity: 0}, {x : 0, opacity: 5, duration : 2, ease : "power1.inOut"},"key4")
      t5.to(".Data-Center",  { opacity: 8, duration : 4 },"key6")

      gsap.fromTo(".MSS-banner-center-char", { y : -30, opacity : 0, skewY : -12,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})
    
      let t9 =gsap.timeline({
          scrollTrigger: {
              trigger : ".world-class-data-center",
              start : "top bottom",
              end : "bottom top",
              scrub : 1,
              // markers: true,
              onUpdate : () => {
                  setStartCounter(true)
              }
          }
      })
      document.querySelectorAll(".colo-heading").forEach(element => {
        gsap.fromTo(element,{skewY : -2, y : -20, opacity: 0}, {
            y : 0,
            opacity : 1,
            duration : 1,
            skewY : 0,
            scrollTrigger : {
                trigger : element,
                start: "top 50%",
                end : "bottom top",
               
            }
        })
       });
      




        return () => {
          // if(t1) t1.kill()
          if(t3) t3.kill()
          if(t4) t4.kill()
          if(t5) t5.kill()
          // if(t8) t8.kill()
          if(t9) t9.kill()
         
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      })

      mm.add("(max-width : 1024px)", () => {
        gsap.fromTo(".MSS-banner-center-char", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})
        document.querySelectorAll(".colo-heading").forEach(element => {
          gsap.fromTo(element,{skewY : -2, y : -20, opacity: 0}, {
              y : 0,
              opacity : 1,
              duration : 1,
              skewY : 0,
              scrollTrigger : {
                  trigger : element,
                  start: "top 60%",
                  end : "bottom top",
                 
              }
          })
        })
        let t9 =gsap.timeline({
          scrollTrigger: {
              trigger : ".world-class-data-center",
              start : "top bottom",
              end : "bottom top",
              scrub : 1,
              // markers: true,
              onUpdate : () => {
                  setStartCounter(true)
              }
          }
      })

      return() => {
        if(t9) t9.kill()
      }
        
        })

      return () => {
        mm.revert();
      };
    },[])
    return(
        <div className='Colocation'>
          <MobileNavbar />
         <ReactLenis   root = {demoState.navbar ? false : true} options={{smoothWheel: true, duration: 3, easing : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier : 2 }}>
       <Header />
   {/* <InnerPageLoader /> */}
       <ScrollIndicator /> 
 
        <section id='Colocation-banner' className='Colocation-banner'>
           
            <div className='banner-video'>
            <video autoPlay  muted >
                            <source src={banner_video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
            </div>
            <div className='banner-content'>
            {/* <SparklesPreview2 className={"Manage-secu-banner-text"} word={[
              {
                text: "We",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                
                 
                text: "Manage",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "Your",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "Data,",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "While",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "You",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "Gain",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              
              {
                text: "Freedom",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "To",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },
              {
                text: "Grow",
                class: "MSS-banner-center-word",
                className: "inline-block MSS-banner-center-char"
              },

            ]} />  */}
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='Manage-secu-banner-text'
              >
               We Manage Your Data, While You Gain Freedom To Grow
              </motion.h1>
                <div className='Colo-CTA-btn'>
                <button onClick={() => {navigate('/contact-us')}} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                                </button>
                </div>
                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div style={{ width: "11vw", right: "0", marginLeft : "auto", marginTop : "1.5vh" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px banner-cta-line " />   
                </div>
            </div>
        </section>
        <section className='colo-boom'>
          <div className='colo-boom-container'>
            <div className="heading">
              <h2 className='colo-heading'>What's Fueling The Indian Data Center Colocation Boom?</h2>
              <HeadingBottomLine />
            </div>
            <div className='description'>
                <p>The Indian data center market is experiencing a red-hot surge, particularly in the Colocation services segment. With a staggering <span> CAGR of 20%. Indian Data Center & Colocation services </span> market is currently at a annual revenue of $3 Billion and projected to reach a colossal <span> $10 Billion by 2030.</span> This growth translates to a massive data center capacity of <span>5GW</span> by the same year. With AI workloads taking over the Data Center & Colocation services business, our CMD forecasts that the Data Center capacity may cross even 10GW by 2030.</p>
              </div>
          </div>
        </section>
            <section id='powerOfcolocation' className='powerOfcolocation'>
                <div className="PowerOfColocation-innerdiv">
                    <div className="colocation-header">
                      <h3 className='third-section-head'>The Colocation Need For Your AI Servers Is Real, </h3>
                      <p className='third-section-question'>How can your business get the best Data Center partner?</p>
                        <h3 className="third-section-subtitle">Get Access To A Secure, Compliant & Scalable And Trustworthy Indian Data Center Infrastructure  </h3>   
                    </div>
                    <div className='Horizontol-slider'>
                        <div className='slide-list'>
                            <div className="slide-list-inner">
                                <div className='slide-item'>
                                    <div className='image-div'>
                                        <img src={power_first} alt="Secure Storage Facilities" />
                                    </div>
                                    <div className='slide-title'>Secure Storage Facilities</div>
                                </div>
                                <div className='slide-item'>
                                <div className='image-div'>
                                   <img src={power_second} alt="24X7 Surveillance & In House Support" />
                                   </div>
                                   <div className='slide-title'>24X7 Surveillance & In House Support</div>
                                </div>
                                <div className='slide-item'>
                                <div className='image-div'>
                                   <img src={power_third} alt=" Well Structured Cabling" />
                                   </div>
                                   <div className='slide-title'> Well Structured Cabling </div>
                                </div>
                               
                                <div className='slide-item'>
                                <div className='image-div'>
                                   <img src={power_fourth} alt="Secured Caging Colocation Services" />
                                   </div>
                                   <div className='slide-title'>Secured Caging Colocation Services </div>
                                </div>
                                <div className='slide-item'>
                                <div className='image-div'>
                                   <img src={power_fifth} alt="Scalability & BMS Access Facality" />
                                   </div>
                                   <div className='slide-title'>Scalability & BMS Access Facality </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="world-class-data-center">
                <div className='world-class-data-center-innerdiv'>
                    <div className="header">
                        <h3 className='colo-heading'>Advancing India’s Digital Revolution With State-Of-The-Art Data Centers</h3>
                       <HeadingBottomLine />
                    </div>
                    <div className='Data-center-service-counter'>
                        <div className='counter-grid'>
                            <div className="counter-box">
                                <div className='number'>{startCounter ?<CountUp duration={5} end={5} /> : <span>00</span> }</div>
                                <div className='number-title'>Data centers across India</div>
                            </div>
                            <div className="counter-box">
                                <div className='number'>{startCounter ?<CountUp duration={5} end={20} /> : <span>00</span>}
                                <span>+</span></div>
                                <div className='number-title'>Years of world-class service</div>
                            </div>
                            <div className="counter-box">
                                <div className='number'>{startCounter ?<CountUp duration={5} end={1300} /> : <span>00</span>} <span>+</span></div>
                                <div className='number-title'>Clients across the globe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='DC-map' className='DC-map'>
                <div className='radial-overlay'></div>
                <div className="map-image">
                    <img src={DC_map} alt="DC map" />
                </div>
                <div className='nashik-Data-center Data-Center'>
                <div className=' DC-rack'>
                    <img src={Data_center_rack} alt="Data center rack" />
                </div>
                <div className='DC-image-nashik DC-image hide-map-dc'></div>
                </div>
               <div className="mohali-Data-center Data-Center">
               <div className=' DC-rack'>
                    <img src={Data_center_rack} alt="Data center rack" />
                </div>
                <div className='DC-image-mohali DC-image hide-map-dc'></div>
               </div>
                <div className="mumbai-Data-center Data-Center">
                <div className=' DC-rack'>
                    <img src={Data_center_rack} alt="Data center rack" />
                </div>
                <div className='DC-image-mumbai DC-image hide-map-dc'></div>
                </div>
               <div className='banglore-Data-center Data-Center'>
               <div className='DC-rack'>
                    <img src={Data_center_rack} alt="Data center rack" />
                </div>
                <div className="DC-image-banglore DC-image hide-map-dc">
                  
                </div>
               </div>
               <div className='airoli-Data-center Data-Center'>
               <div className=' DC-rack'>
                    <img src={Data_center_rack} alt="Data center rack" />
                </div>
                <div className="DC-image-airoli DC-image hide-map-dc">

                </div>
               </div>
               
            </section>
            <section id='expert-colocation' className="expert-colocation">
        <div className="expert-innerdiv">
            <div className='Description'>
                <h3 className='colo-heading'>Powerhouse Data Center Capabilities For Peak Performance </h3>
               <ul>
                <li>99.995% Guaranteed Uptime.</li>
                <li>2N+1 Redundant UPS systems For Uninterruptible Power Supply.</li>
                <li>Automated Multiple Diesel Generators In 2N+1 Redundancy Mode.</li>
                <li>Scalable Power Colocation services plans For Racks Ranging From 4KW To 40KW.</li>
                <li>Dual Power Distribution Units & Metered (PDU) For Rack-Level Power Monitoring And Billing.</li>
                <li>Precision Air Conditioning In N+N Redundancy Mode With Power Back-Up.</li>
                <li>Get the Remote Control of your co-located machine, through KVM-IP or terminal access.</li>
                <li>Zero-cost Setups and Reboots & Proactive Monitoring and Support.</li>
                <li>Direct expansion (DX) based Precision Air Conditioners (PAC) with PAC unit pumps.</li>
                <li>Advanced Laser-Based Very Early Smoke Detection System (VESDA) & Novac gas based fire suppression extinguishment system .</li>
                <li>Review and Recommendation for Server Performance in our colocation services model.</li>
               </ul>
            </div>
            <div className='expert-colocation-img'>
                <div className='radial-gradient'></div>
                <div>
                    <img src={why_choose_esds} alt='why choose esds'/>
                </div>
            </div>
        </div>
    </section>
            {/* <section className='Services-design'>
                <div className='service-design-innerdiv'>
                    <div className="header">
                        <h3>Empowering Your Business: <span>Services</span> Designed for Your Needs</h3>
                        <p>We offer a comprehensive suite of colocation services designed to meet your unique business needs.</p>
                        <div  className=" particle-line absolute">
                <div className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  head-bottom-gradient" />
                <div style={{ width: "100%", left: "0", height: "2px" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              </div>
                    </div>
                    <div className='detail-services-design'>
                        <div className='titles'>
                        <SparklesPreview2 className={"single-server-colocation"} word={[

{
text: "There's",
class : "side-header-colocation",
className : "inline-block side-header1-char"
},
{
text: "always",
class : "side-header-colocation",
className : "inline-block side-header1-char"
},
{
    text: "a",
    class : "side-header-colocation",
    className : "inline-block side-header1-char"
    },
{
text: "Server",
class : "side-header-colocation",
className : "inline-block side-header1-char"
},
{
    text: "for",
    class : "side-header-colocation",
    className : "inline-block side-header1-char"
    },
    {
        text: "You",
        class : "side-header-colocation",
        className : "inline-block side-header1-char"
        },
]} /> 
<div className='second-header'>
<SparklesPreview2 className={"single-server-colocation"} word={[

{
text: "Multi-Tetant",
class : "side-header-colocation",
className : "inline-block side-header2-char"
},
{
text: "Colocation",
class : "side-header-colocation",
className : "inline-block side-header2-char"
},

]} /> 
</div>
<div className="third-header">
<SparklesPreview2 className={"single-server-colocation"} word={[

{
text: "Special",
class : "side-header-colocation",
className : "inline-block side-header3-char"
},
{
text: "Rack",
class : "side-header-colocation",
className : "inline-block side-header3-char"
},
{
    text: "Colocation",
    class : "side-header-colocation",
    className : "inline-block side-header3-char"
    },
    
]} /> 
</div>

                        </div>
                        <div className='rack-destructure-design'>
                            <div className='server'>
                                <img src={server} alt="" />
                            </div>
                            <div className='middle'>
                                <img src={Middle} alt="" />
                            </div>
                            <div className='top'>
                                <img src={top_bar} alt="" />
                            </div>
                            <div className='bottom'>
                                <img src={bottom} alt="" />
                            </div>
                            <div className='left'>
                                <img src={left} alt="" />
                            </div>
                            <div className='right'>
                                <img src={right} alt="" />
                            </div>
                        </div>
                        <div className='description'>
                            <div className='single-server description-box'>
                            <SparklesPreview2 
  className={"single-server-description-head"} 
  word={[
    {
      text: "Managed",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "Colocation",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "Secure,",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "Scalable",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "Solutions",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "for",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "Your",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    },
    {
      text: "Cloud",
      class: "side-description-header",
      className: "inline-block side-description-header1-char"
    }
  ]} 
/>
<SparklesPreview2 
  className={"single-server-description-subhead"} 
  word={[
    {
      text: "Experience",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "the",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "ultimate",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "peace",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "of",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "mind.",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "Our",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "managed",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "colocation",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "solutions",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "combine",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "secure",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "infrastructure",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "with",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "expert",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "support,",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "ensuring",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "your",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "cloud",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "runs",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "seamlessly",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "and",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "securely",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "to",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "Transform",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "Your",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    },
    {
      text: "Business.",
      class: "side-description-suhead",
      className: "inline-block side-description-sub1-char"
    }
  ]} 
/>

                                <button className='colo-design-first-btn'><div style={{display: 'flex', alignItems: "center", justifyContent: "center", gap : "0.5vw"}}><IoIosArrowRoundForward />Get Started</div>
                                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div style={{ width: "100%", left: 0, marginTop : "1.5vh" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />   
                </div></button>
                                
                            </div>
                            <div className="multi-server description-box">
                            <SparklesPreview2 
  className={"single-server-description-head"} 
  word={[
    {
      text: "Unlock",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "Scalability",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "&",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "Security:",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "The",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "Power",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "of",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "a",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "Multi-Tenant",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "Cloud",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    },
    {
      text: "Solution",
      class: "side-description-header",
      className: "inline-block side-description-header2-char"
    }
  ]} 
/>

<SparklesPreview2 
  className={"single-server-description-subhead"} 
  word={[
    {
      text: "Experience",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "the",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "power",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "of",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "the",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "cloud",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "without",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "the",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "complexity.",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "Our",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "multi-tenant",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "solution",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "delivers",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "robust",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "security,",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "seamless",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "scalability,",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "and",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "cost-effectiveness",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "–",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "all",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "within",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "a",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "shared",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "platform.",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "Focus",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "on",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "what",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "matters",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "most",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "–",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "growing",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "your",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "business",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "–",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "and",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "leave",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "the",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "infrastructure",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "management",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "to",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    },
    {
      text: "us.",
      class: "side-description-subhead",
      className: "inline-block side-description-sub2-char"
    }
  ]} 
/>

<button className='colo-design-second-btn'><div style={{display: 'flex', alignItems: "center", justifyContent: "center", gap : "0.5vw"}}><IoIosArrowRoundForward />Get Started</div>
                                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div style={{ width: "100%", left: 0, marginTop : "1.5vh" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />   
                </div></button>
                            </div>
                            <div className="full-rack description-box">
                            <SparklesPreview2 
  className={"single-server-description-head"} 
  word={[
    {
      text: "Beyond",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "Standard",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "Colocation:",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "Discover",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "the",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "Special",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "Rack",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    },
    {
      text: "Advantage",
      class: "side-description-header",
      className: "inline-block side-description-header3-char"
    }
  ]} 
/>

                                <SparklesPreview2 
  className={"single-server-description-subhead"} 
  word={[
    {
      text: "Don't",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "settle",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "for",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "a",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "one-size-fits-all",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "solution.",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "Our",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "Special",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "Rack",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "Colocation",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "provides",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "the",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "flexibility",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "and",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "power",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "to",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "tailor",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "your",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "infrastructure",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "to",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "your",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "exact",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "needs.",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "Scale",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "resources",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "effortlessly,",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "optimize",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "performance,",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "and",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "enjoy",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "dedicated",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "support",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "to",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "ensure",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "your",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "business",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "thrives",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "in",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "the",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    },
    {
      text: "cloud.",
      class: "side-description-subhead",
      className: "inline-block side-description-sub3-char"
    }
  ]} 
/>

<button className='colo-design-third-btn'><div style={{display: 'flex', alignItems: "center", justifyContent: "center", gap : "0.5vw"}}><IoIosArrowRoundForward />Get Started</div>
                                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div style={{ width: "100%", left: 0, marginTop : "1.5vh" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />   
                </div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="explore-plan">
                <div className='header'>
                  <h3 className='colo-heading'>Choose Your Colocation Services Plans Tailored To Your Business Needs</h3>
               <HeadingBottomLine />
                </div>
     
        <div className="plans">
            <div className="plan-outline">
            <div className="plan">
                <h2>Pay-As-You-Grow</h2>
                <ul>
                    <li>What you will Get</li>
                    <li> <GoCheckCircle />Flexible Capacity Scaling</li>
                    <li><GoCheckCircle />Cost-Efficient Pricing</li>
                    <li><GoCheckCircle />Scalable Infrastructure</li>
                    {/* <li><GoCheckCircle />eNlight 360 Portal Access</li>
                    <li><GoCheckCircle />On-Demand KVM IP</li> */}
                </ul>
                <div className="get-quote">
                <button onClick={() => {navigate('/contact-us')}} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Quote&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Quote&nbsp;</span>
                                </button>
                </div>
               
                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div  className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px CTA-bottom-line" />   
                </div>
            </div>
            </div>
        
           <div className="plan-outline">
           <div className="plan popular">
            <span>Most Popular</span>
                <h2> Full Rack <span>Colocation Services</span></h2>
                <ul>
                <li>What you will Get</li>
                    <li><GoCheckCircle />42U Rack Space</li>
                    <li><GoCheckCircle />6KWh Rated Power</li>
                    <li><GoCheckCircle />Static IPv4 Address</li>
                    <li><GoCheckCircle />eNlight 360 Portal Access</li>
                    <li><GoCheckCircle />On-Demand KVM IP</li>
                </ul>
                <div className="get-quote">
                <button onClick={() => {contactNavigation()}} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Quote&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Quote&nbsp;</span>
                                </button>
                </div>
                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px CTA-bottom-line" />   
                </div>
                </div>            
           </div>
          <div className="plan-outline">
          <div className="plan">
                <h2>Full Rack <span>Colocation Services</span></h2>
                <ul>
                <li>What you will Get</li>
                    <li><GoCheckCircle />42U Rack Space</li>
                    <li><GoCheckCircle />40KWh Rated Power</li>
                    <li><GoCheckCircle />Static IPv4 Address</li>
                    <li><GoCheckCircle />eNlight 360 Portal Access</li>
                    <li><GoCheckCircle />On-Demand KVM IP</li>
                </ul>
                <div className="get-quote">
                <button onClick={() => {contactNavigation()}} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Quote&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Quote&nbsp;</span>
                                </button>
                </div>
                <div style={{ width: "100%" }} className=" button-bottom relative">
                     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px CTA-bottom-line" />   
                </div>
            </div>
          </div>
        </div>
    </section>
  
   <Partner  title={"They Trust Us, Because We Deliver"} color={"#00050E"} logosArray={logos}/>
       <Topsection question={"The Right Partner, With The Right Expertise, Can Get Your Business To New Heights"} answers={"Don’t miss your peak. Let’s connect and begin our partnership!!!"} color={"#00050E"}/>
       <FooterFinal BgColor={"#00050E"}/>
       </ReactLenis>
        </div>
    )
}
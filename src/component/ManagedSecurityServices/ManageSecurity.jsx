import MSS_banner from '../../images/manage security/MSS-banner.png'
import resource_img from '../../images/manage security/managed-security.png'
import CountUp from 'react-countup';
import './ManageSecurity.css'
import banner_video from '../../images/manage security/managed-security-banner-video.mp4'
import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import HeadingBottomLine from '../../components/ui/HeadingBottomLine';
import box_1 from '../../images/manage security/Box-1.png'
import box_2 from '../../images/manage security/Box-2.png'
import box_3 from '../../images/manage security/Box-3.png'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading';
import expertise from '../../images/manage security/expertise-img.png'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Partner from '../Partner/Partner';
import Header from '../Header/Header';
import FooterFinal from '../FinalFooter/FooterFinal';
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import Topsection from '../FinalFooter/Topsection';
import partner1 from '../../images/manage security/logo1.png'
import partner2 from '../../images/manage security/logo2.png'
import partner3 from '../../images/manage security/logo3.png'
import partner4 from '../../images/manage security/logo4.png'
import partner5 from '../../images/manage security/logo5.png'
import { useParams } from 'react-router-dom';
import ScrollIndicator from '../../components/ui/ScrollIndicator';
import MobileNavbar from '../Navbar/MonileNavbar';
import { useDispatch, useSelector } from 'react-redux';
import InnerPageLoader from '../Loader/InnerPageLoader.jsx';




export default function ManageSecurity() {
    
    let [Counter , seteCounter] = useState(false)
    let dispatch = useDispatch()
    const demoState = useSelector(state => state.DemoState);
    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
    let {managed} = useParams()
    const [renderTime, setRenderTime] = useState(null);

    useEffect(() => {
      const start = performance.now();
  
      // Simulate the component's work or rendering logic
      setTimeout(() => {
        const end = performance.now();
        setRenderTime(end - start);
      }, 0);
    }, []);
    let logos = [partner1, partner2, partner3, partner4, partner5,]

    useEffect(() => {
            document.querySelectorAll(".box").forEach((evet, i) => {
                let div1 = evet.querySelectorAll(`.box-char-${i+1}`)
                let div2 = evet.querySelector(`.box-descr${i+1}`)
                evet.addEventListener("mouseover", () => {
                    gsap.to(div1, { y : -20, opacity : 0, skewY : 8,stagger : 0.02, duration: 0.2, ease : "power1.inOut"})
                    gsap.to(div2,{ y : 0, opacity :1, duration : 1})
                })
                evet.addEventListener("mouseleave", () => {
                    gsap.to(div1,  {   opacity: 1.5, y : 0, skewY : 0, stagger : 0.02, duration: 0.2, ease : "power1.inOut"})
                    gsap.to(div2, { y : "2vw", opacity :0, duration : 1})
                    // document.querySelector(div2).style.transform = "translateY(2vw)";
                    // document.querySelector(div2).style.opacity = 0;
                })
            })
    },[])

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(document.getElementById("scroll-down")) {

                if(window.scrollY > 500) {
                    document.getElementById("scroll-down").style.display = "none"
                }else {
                    document.getElementById("scroll-down").style.display = "block"
                }
            }
        })
  
    },[])
  
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)
        const mm = gsap.matchMedia();

        if(managed) {
                
            gsap.to(window, {
                scrollTo: "#secure-navigation",
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
            let t1 = gsap.timeline({
                scrollTrigger : {
                    trigger : ".buisness-breach",
                    start : "top top",
                    end : () => innerHeight * 5,
                    pin : true,
                    scrub : true,
                    // markers : true
                }
            })
            t1.to(".breach-head", {y : "8vw",opacity : 0, duration : 2, ease : "expoScale(1,2,none)"}, "key")
            t1.to(".first-count", {x : " -50vw", duration: 3 ,ease : "expoScale(1,2,none)"}, "key")
            t1.to(".second-count", {x : " 50vw", duration: 3 ,ease : "expoScale(1,2,none)"}, "key")
            t1.fromTo(".center-img div", {scale : 0.6}, { scale : 2.2,y: "5vw", borderRadius : 0, duration: 2, ease : "power1"}, "key")
            t1.to(".buisness-situation", {opacity : 5, duration: 4, ease : "power1"},"key1")
            t1.to(".center-img div", {opacity : 0.4, duration: 2, ease : "power1"}, "key1")
            t1.to(".choose-ESDS", {opacity : 1, duration: 4, ease : "expoScale(0.5,7,none)"}, "key2")
            t1.to(".center-img div", {y : "5vw", scale : 0, duration: 2, ease : "power1"}, "key2")
            t1.to(".buisness-situation", {y: "1vw",scale : 0, duration: 2, ease : "power1"},"key2")


            gsap.fromTo(".box-char-1", { y : -20, opacity : 0, skewY : 8,}, { scrollTrigger : {
                trigger : ".secure-navigation",
                start: "top 50%",
                end : "top top"

            },
                opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})

                gsap.fromTo(".box-char-2", { y : -20, opacity : 0, skewY : 8,}, { scrollTrigger : {
                    trigger : ".secure-navigation",
                    start: "top 50%",
                    end : "top top"
                },
                    opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})

                    gsap.fromTo(".box-char-3", { y : -20, opacity : 0, skewY : 8,}, { scrollTrigger : {
                        trigger : ".secure-navigation",
                        start: "top 50%",
                        end : "top top"
                    },
                        opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})


                let t2 = gsap.timeline({
                    scrollTrigger : {
                        trigger : ".M-secu-ser-counter",
                        top : "top 40%",
                        end: "bottom 40%",
                        onUpdate: () => {
                            seteCounter(true)
                        }
                    }
                })

                document.querySelectorAll(".MSS-heading").forEach(element => {
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
                   });

            return () => {
                if(t1) t1.kill()
                    if(t2) t2.kill()
            }

        })

        mm.add("(max-width : 1199px)", () => {
            // let t1 = gsap.timeline({
            //     scrollTrigger : {
            //         trigger : ".buisness-breach",
            //         start : "top top",
            //         end : () => innerHeight * 3,
            //         pin : true,
            //         scrub : true,
            //         // markers : true
            //     }
            // })
            // t1.to(".breach-head", {y : "8vw",opacity : 0, duration : 2, ease : "power1"}, "key")
            // t1.to(".first-count", {x : " -200vw", duration: 2 ,ease : "power1"}, "key")
            // t1.to(".second-count", {x : " 200vw", duration: 2 ,ease : "power1"}, "key")
            // t1.fromTo(".center-img div", {scale : 0.6}, { scale : 1,y: "5vw", borderRadius : 0, duration: 2, ease : "power1"}, "key")
            // t1.to(".buisness-situation", {opacity : 1, duration: 2, ease : "power1"},"key1")
            // t1.to(".center-img div", {opacity : 0.1, duration: 2, ease : "power1"}, "key1")
            // t1.to(".choose-ESDS", {opacity : 1, duration: 2, ease : "power1"}, "key2")
            // t1.to(".center-img div", {y : "5vw", scale : 0, duration: 2, ease : "power1"}, "key2")
            // t1.to(".buisness-situation", {y: "10vw",scale : 0, duration: 2, ease : "power1"},"key2")

            let t2 = gsap.timeline({
                scrollTrigger : {
                    trigger : ".M-secu-ser-counter",
                    top : "top 40%",
                    end: "bottom 40%",
                    onUpdate: () => {
                        seteCounter(true)
                    }
                }
            })

            document.querySelectorAll(".MSS-heading").forEach(element => {
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
               });
               return () => {
                // if(t1) t1.kill()
                    if(t2) t2.kill()
                }
                
        })
        return () => {
            mm.revert();
          };

           
    },[])


        return(
            <div className='managed-security'>
              {/* <InnerPageLoader /> */}
                <MobileNavbar />
            <ReactLenis root = {demoState.navbar ? false : true} options={{smoothWheel: true, duration: 3, easing : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier : 2 }}>
                <Header />
                <ScrollIndicator /> 
               <h3 className='manag-secu-heading'>ESDS Managed Security Services</h3>
               <div style={{width : "28vw" , height : "8vh", position : "absolute", borderRadius : "50%", top: 0, left : "38%", background : "linear-gradient(94deg, rgba(0, 230, 255, 1) 13%, rgba(0, 102, 255, 1) 100%)", filter : "blur(60px)"}} className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
            <section className='MSS-banner-video'>
             
                <div className='banner-shape'>
                    <img style={{width : "88%", height : "100%"}} src={MSS_banner} alt="Managed security service" />
                </div>
                <div className='video-container'>
                <video autoPlay loop muted >
                            <source src={banner_video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
            </section>
                <section className='buisness-breach'>
                    <h3 className='breach-head MSS-heading'>Can Your Business Survive A Security Breach? </h3>
                    <div className='second-section'>
                        <div className='numbers-tell-you'>
                            <div className='first-count'>
                                <p> <span className='counter'><CountUp duration={5} end={51} />%</span> <span>of customers would abandon a company after a data breach.
                                This loss of customer trust can devastate a business.</span> </p>
                            </div>
                            <div className='center-img'>
                                <div>
                                    <img src={resource_img} alt="Resource img" />
                                </div>
                            </div>
                            <div className="second-count">
                                <p> <span className='counter'><CountUp duration={5} end={60} />%</span>of organizations have experienced some form of cyberattack in 2023.</p>
                            </div>
                        </div>
                        <div className="buisness-situation">
                            <h3>How does your business respond to such situations? </h3>
                        </div>
                        <div className="choose-ESDS">
                            <h3>Choose <span>ESDS</span>  to be your cyber security co-pilot, taking you to safer routes with confidence.</h3>
                        </div>
                    </div>
                </section>
                <section id='secure-navigation' className='secure-navigation'>
                    <div className="heading">
                        <h3 className='MSS-heading'>A Security Suite For Your Secure Navigation  </h3>
                        <HeadingBottomLine />
                    </div>
                    <div className='secure-boxes'>
                        <div className='Sahred-soc box'>
                        <SparklesPreview2 mainDivClass={"box-1-soc"} className={"box-1-div"} word={[
                                {
                                    text: "Managed",
                                    class: "box-text",
                                    className: "inline-block box-char-1"
                                },
                                {
                                    text: "SOC ",
                                    class: "box-text",
                                    className: "inline-block box-char-1"
                                },
                                {
                                    text: "Services",
                                    class: "box-text",
                                    className: "inline-block box-char-1"
                                },
                               
                            ]} />
                            <p className='box-descr1'>Amplify your cyber security defenses with our state-of-the-art Managed SOC  Services,  offering, round-the-clock monitoring and elite incident response.</p>
                            <img src={box_1} alt="Shared-SOC" />
                        </div>
                        <div className='SOAR box'>
                        <SparklesPreview2 mainDivClass={"box-2-soc"} className={"box-1-div"} word={[
                                {
                                    text: "SOAR",
                                    class: "box-text",
                                    className: "inline-block box-char-2"
                                },
                                
                                {
                                    text: "Services",
                                    class: "box-text",
                                    className: "inline-block box-char-2"
                                },
                               
                            ]} />
                            <p className='box-descr2'>Strengthen your Managed Security Operations Center (SOC) with our cutting-edge Security Orchestration, Automation, and Response (SOAR) services, delivering swift threat detection and powerful remediation.</p>
                        <img src={box_2} alt="SOAR" />
                        </div>
                        <div className='private-soc box'>
                        <SparklesPreview2 mainDivClass={"box-3-soc"} className={"box-1-div"} word={[
                                {
                                    text: "Private",
                                    class: "box-text",
                                    className: "inline-block box-char-3"
                                },
                                {
                                    text: "SOC ",
                                    class: "box-text",
                                    className: "inline-block box-char-3"
                                },
                                {
                                    text: "Build",
                                    class: "box-text",
                                    className: "inline-block box-char-3"
                                },
                                {
                                    text: "&",
                                    class: "box-text",
                                    className: "inline-block box-char-3"
                                },
                                {
                                    text: "Management",
                                    class: "box-text",
                                    className: "inline-block box-char-3"
                                },
                               
                            ]} />
                            <p className='box-descr3'>Craft a bespoke, high-performance SOC services tailored to your organization's Managed Security Service requirements, ensuring unparalleled protection and operational excellence.</p>
                        <img src={box_3} alt="private-soc" />
                        </div>
                    </div>
                    <div className='secure-boxes2'>
                            <div className='secure-boxes2-dn'>
                            <div className="box-secure-boxes">
                                <h2>Managed SOC Services</h2>
                                <p>Amplify your cyber security defenses with our state-of-the-art Managed SOC  Services,  offering, round-the-clock monitoring and elite incident response.</p>
                            </div>
                            <div className="box-secure-boxes">
                                <h2>SOAR Services</h2>
                                <p>Strengthen your Managed Security Operations Center (SOC) with our cutting-edge Security Orchestration, Automation, and Response (SOAR) services, delivering swift threat detection and powerful remediation.</p>
                            </div>
                            <div className="box-secure-boxes">
                                <h2>Private SOC Build & Management</h2>
                                <p>Craft a bespoke, high-performance SOC services tailored to your organization's Managed Security Service requirements, ensuring unparalleled protection and operational excellence.</p>
                            </div>
                            </div>
                    </div>


                </section>
                <section className='M-secu-ser-counter'>
                    <div className='heading'>
                        <h3 className='MSS-heading'>We Manage The Chaos, So Your Digital World Stays Calm</h3>
                        <HeadingBottomLine />
                    </div>
                    <div className='counter-container'>
                        <div className='count'>
                            <span>{Counter ? <CountUp duration={5} end={1000} /> : <span>0</span> } +</span>
                            <p>Managed firewalls</p>
                        </div>
                        <div className='count'>
                            <span>{Counter ? <CountUp duration={5} end={26500} /> : <span>0</span>} +</span>
                            <p>Devices on boarded for managed ssecurity service</p>
                        </div>
                        <div className="count">
                            <span>{ Counter ? <CountUp duration={5} end={122000} /> : <span>0</span>} +</span>
                            <p>Monthly alerts triggered </p>
                        </div>
                        <div className='count'>
                            <span>{Counter ? <CountUp duration={5} end={1000000} /> : <span>0</span>}+</span>
                            <p>Websites scanned </p>
                        </div>
                        <div className='count'>
                            <span>{Counter ? <CountUp duration={5} end={500} />: <span>0</span>} +</span>
                            <p>Managed security service clients  </p>
                            </div>
                            <div className='count'>
                                <span> { Counter ? <CountUp duration={5} end={227273} /> : <span>0</span> }+</span>
                                <p>Security scans performed </p>
                            </div>
                    </div>
                </section>
              
                <section className='expertise-guide'>
                    <div className="expertise-container">
                        <div className='expertise-text'>
                            <h3 className='MSS-heading'>Our Expert Managed Security Service Pilots Will Land You To Safer Zones</h3>
                            <ul>
                                <li>Cyber security threat intelligence</li>
                                <li>Robust Managed SOC services operating on an OPEX model</li>
                                <li>Comprehensive Managed Security Service essentials</li>
                                <li>Proactive threat hunting for breach detection</li>
                                <li>Data loss protection tools</li>
                                <li>Compliant Managed Security Services</li>
                            </ul>
                        </div>
                        <div className='expertise-img'>
                            <img src={expertise} alt="Expertise image" />
                        </div>  
                    </div>
                </section>
                <Partner title = "They Have Put An Elite Cyber Defense Team On Their Side-So Can You" logosArray={logos} />
                <Topsection question={"Which Path Will You Choose?"} MSS={true} answer1={"Disaster prone"} answer2={"Secure your zone today"} color={"#000819"} />
                <FooterFinal BgColor={"#000819"} />
                </ReactLenis>
            </div>
        )
}
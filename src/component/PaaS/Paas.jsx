import CountUp from 'react-countup';
import './Paas.css'
import AIImg from '../../images/Paas/AI-Img.png'
import card1 from '../../images/Paas/card1.png'
import card2 from '../../images/Paas/card2.png'
import card3 from '../../images/Paas/card3.png'
import buisness from '../../images/Paas/buisness.png'
import card4 from '../../images/Paas/card4.png'
import passOffering from '../../images/Paas/pass-offering.png'
import Partner from '../Partner/Partner';
import FooterFinal from '../FinalFooter/FooterFinal';
import Topsection from '../FinalFooter/Topsection';
import SparklesPreview2 from "../../components/ui/subheading text effect/bannerSubheading";
import Header from '../Header/Header';
import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import partner1 from '../../images/partners/partner1.png'
import partner2 from '../../images/partners/partner2.png'
import partner3 from '../../images/partners/partner3.png'
import partner4 from '../../images/partners/partner4.png'
import partner5 from '../../images/partners/partner5.png'
import partner6 from '../../images/partners/partner6.png'
import partner7 from '../../images/partners/partner7.png'
import { useNavigate, useParams } from 'react-router-dom';
import InnerPageLoader from '../Loader/InnerPageLoader.jsx';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import ScrollIndicator from '../../components/ui/ScrollIndicator';
import MobileNavbar from '../Navbar/MonileNavbar';
import { useDispatch, useSelector } from 'react-redux';
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import { motion } from "framer-motion";


export default function Paas() {
    let [counterup, setcounterup] = useState(false)
    let logos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7]
    let {services} = useParams()

    const demoState = useSelector(state => state.DemoState);
    let navigate = useNavigate()
    let dispatch= useDispatch()
    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
          if(window.scrollY > 500) {
            if(document.getElementById("scroll-down")) {

                document.getElementById("scroll-down").style.display = "none"
            }
          }else {
            if(document.getElementById("scroll-down")) {

                document.getElementById("scroll-down").style.display = "block"
            }
          }
        })
  
    },[])
    
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin);
        if(services) {
                
            gsap.to(window, {
                scrollTo: "#buisness-opportunity",
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
        gsap.fromTo(".Paas-banner-char", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})
        document.querySelectorAll(".paas-header").forEach(element => {
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

            let t1 = gsap.timeline({
                scrollTrigger : {
                    trigger : ".paas-take-off",
                    start : "bottom 50%",
                    end : "bottom top",
                    // markers : true,
                    onEnter : () => {
                        setcounterup(true)
                    }
                }
                
            })
    
        
        return() => {
            if(t1) t1.kill()
        }
      },[])
    return (
        <div className='Paas-section'>
            <MobileNavbar />
          <ReactLenis root = {demoState.navbar ? false : true} options={{smoothWheel: true, duration: 3, easing : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier : 2 }}>
            <Header />
            {/* <InnerPageLoader /> */}
                <ScrollIndicator /> 
            <section className='Paas-banner'>
                <div className='paas-container'>
                {/* <SparklesPreview2 mainDivClass={"Paas-banner-head"} className={"Paas-div"} word={[
                                {
                                    text: "Powering",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "The",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "Fastest",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "Growing",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "Indian",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "Companies",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "With",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "Our",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "Proprietary",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                                {
                                    text: "PaaS",
                                    class: "Paas-text",
                                    className: "inline-block Paas-banner-char"
                                },
                               
                            ]} /> */}
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='Paas-banner-head'
                        >
                          Powering The Fastest Growing Indian Companies With Our Proprietary PaaS
                        </motion.h1>
                         
                    <div className="paas-cta">
                        <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Unlock your Potential NOW&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;your&nbsp;Potential&nbsp;NOW</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="aiandmi">
                <div className="ai-container">

                    <div className='AI-img'>
                        <img src={AIImg} alt="AI image" />
                    </div>
                    <div className='AI-content'>
                        <h2 className='paas-header'>Is <span>AI & ML</span>  Enabled PaaS Taking The World By Storm ?</h2>
                        <p>AI & ML are supercharging PaaS! Pre-built models and user-friendly AI & ML tools are making it easier than ever for developers like you to <span>build intelligent applications</span>. Imagine apps that can diagnose diseases with x-ray analysis, predict customer behavior, or generate personalized content – that's the future of PaaS fueled by AI & ML. This unlocks a new era of innovation with smarter apps that <span>analyze data, predict trends, and personalize experiences</span>. </p>
                    </div>

                </div>
            </section>
            <section id='buisness-opportunity' className='buisness-opportunity'>
                <div className="buisness-container">
                    <div className="heading">
                        <h3 className='paas-header'>Don’t Miss Out! It’s Time For Your Business To Use This Opportunity</h3>
                        <p>Our PaaS offerings are here to solve your challenges </p>
                    </div>
                    <div className='gradient-card'>
                        <div className="card">
                            <img src={card1} alt="Disaster recovery/ BCP management" />
                            <h5>Disaster recovery/ BCP management</h5>
                            <p>Don't let disruptions disrupt your business. Get a robust & reliable disaster recovery & continuity plan.</p>
                            <div className='business-card-cta'>
                                <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                    <span style={{color : "#fff", WebkitTextStroke : "1px #fff", borderRight : "6px solid #fff"}} aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started</span>
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={card2} alt="Backup as a Service" />
                            <h5>Backup as a Service</h5>
                            <p>No more lost data with our Continuous, fast & Reliable Backups for all your data storage needs. </p>
                            <div className='business-card-cta'>
                            <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                    <span style={{color : "#fff", WebkitTextStroke : "1px #fff", borderRight : "6px solid #fff"}} aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started</span>
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={card3} alt="Database as a Service" />
                            <h5>Database as a Service</h5>
                            <p>Transform your database Strategy with a cost-effective, agile & performance optimizing solution that allows you to focus on core business objectives.</p>
                            <div className='business-card-cta'>
                            <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                    <span style={{color : "#fff", WebkitTextStroke : "1px #fff", borderRight : "6px solid #fff"}} aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started</span>
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={card4} alt="WebVPN" />
                            <h5>WebVPN</h5>
                            <p>Get your hands on a revolutionary solution that redefines how you connect and interact with your applications securely, seamlessly, and efficiently.</p>
                            <div className='business-card-cta'> 
                            <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                    <span style={{color : "#fff", WebkitTextStroke : "1px #fff", borderRight : "6px solid #fff"}} aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='paas-take-off'>
                <div className="take-off-container">
                    <div className='take-off-div'>
                        <div className='left-side'>
                             <h3 className='paas-header'>What Burdens Will Our PaaS Take Off Your Business?</h3>
                             <ul>
                                <li>IT infrastructure Headaches</li>
                                <li>Server Management Struggles</li>
                                <li>Licensing Cost Nightmares</li>
                                <li>Complex Deployments & Maintenance</li>
                                <li>Security Worries</li>
                             </ul>
                        </div>
                        <div className="take-off-img">
                            <img src={passOffering} alt="PASS" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="efficiency-speed">
                <div className="efficiency-contianer">
                    <div className="heading">
                        <h3 className='paas-header'>Introduce Your Business To Efficiency And Speed - All At Once</h3>
                    </div>
                    <div className="effieciency-counter">
                        <div className="counter-card">
                            <div className="card-head">
                                <div> { counterup ? <><CountUp duration={5} end={30} /><span>%</span></> : <span>0</span> }</div>
                                <span className='side-head'>Faster Development</span>
                            </div>
                            <p>Our pre-built features & automation get you there.</p>
                        </div>
                        <div className="counter-card" style={{ width: "40%" }}>
                            <div className="card-head">
                                <div>{counterup ?  <><CountUp duration={5} end={20} /><span>%</span></> : <span>0</span>}</div>
                                <span className='side-head'>Reduced IT Costs</span>
                            </div>
                            <p>Say goodbye to upfront hardware/ software ! PaaS delivers savings.</p>
                        </div>
                        <div className="counter-card">
                            <div className="card-head">
                                <div>{counterup ?  <><CountUp duration={5} end={2} /><span>.</span><CountUp duration={5} end={5} /><span>X</span></>: <span>0</span>}</div>
                                <span className='side-head'>Scale Up or Down on Demand </span>
                            </div>
                            <p> PaaS = Agility at your fingertips.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="opportunity">
                <div className="opportunity-container">
                    <h3 className="paas-header">Unlock More Doors Of Opportunity For Your Business</h3>
                    <div className="opportunity-subdiv">
                        <div className="side-img">
                            <img src={buisness} alt="business" />
                        </div>
                        <div className="opportunity-descr">
                            <ul>
                                <li><span >Focus on core competencies</span> instead of managing infrastructure.</li>
                                <li><span>Optimize IT spending</span> through pay-as-you-go models.</li>
                                <li><span>Adapt to changing business needs</span> with ease thanks to scalability.</li>
                                <li><span>Reduced development cycles</span> get applications to market faster.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Partner title={"They Are Growing With This, So Can You"} color={"#000"} logosArray={logos} />
           <Topsection question={"Ready To Take Your Next Big Step And See Results?"} answers={"Sign up today and start experiencing your benefits!"} CTA={"Sign Up Now"} />
            <FooterFinal BgColor={"#000"} />
            </ReactLenis>
        </div>
    )
}
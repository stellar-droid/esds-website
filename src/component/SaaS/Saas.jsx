import SparklesPreview2 from "../../components/ui/subheading text effect/bannerSubheading";
import './Saas.css'
import Slider from "react-slick";
import banner from '../../images/Saas/Banner.jpg'
import transformation from '../../images/Saas/transformation-img.png'
import famrut from '../../images/Saas/famrut-img.png'
import LCM from '../../images/Saas/LCM-img.png'
import infra_img from '../../images/Saas/infra-img.png'
import IPAS from '../../images/Saas/IPAS-img.png'
import underline from '../../images/Saas/underline.svg'
import grad_line from '../../images/Saas/line.svg'
import CountUp from 'react-countup';
import Partner from "../Partner/Partner";
import FooterFinal from "../FinalFooter/FooterFinal";
// import InnerPageLoader from "../Loader/InnerPageLoader.jsx";
import Topsection from "../FinalFooter/Topsection";
import Header from "../Header/Header";
import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import partner1 from '../../images/partners/partner1.png'
import partner2 from '../../images/partners/partner2.png'
import partner3 from '../../images/partners/partner3.png'
import partner4 from '../../images/partners/partner4.png'
import partner5 from '../../images/partners/partner5.png'
import partner6 from '../../images/partners/partner6.png'
import partner7 from '../../images/partners/partner7.png'
import { useNavigate, useParams } from "react-router-dom";
import ScrollIndicator from "../../components/ui/ScrollIndicator";
import Loader from "../Loader/Loader";
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import MobileNavbar from "../Navbar/MonileNavbar";
import { useDispatch, useSelector } from "react-redux";

export default function Saas() {
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false
      };
      let [counter, setcounter] = useState(false)
      let {Saas_name} = useParams()
      let navigate = useNavigate()
      const demoState = useSelector(state => state.DemoState);
      let dispatch = useDispatch()
      useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
     
      let logos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7]
      

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin);
        if(Saas_name == "Business") {
            gsap.to(window, {
                scrollTo: "#product-slider",
                duration: 1,
                ease: "power2.inOut"
              });
        }
        else if(Saas_name == "Infra") {
            gsap.to(window, {
                scrollTo: "#Infra-product",
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
     

        document.querySelectorAll(".saas-header").forEach(element => {
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
                    trigger : ".revolution-impact",
                    start : "top 50%",
                    end : "top top"
                }
            })
            let t2 = gsap.timeline({
                scrollTrigger : {
                    trigger : ".revolution-impact",
                    start : "top 50%",
                    end: "top top",
                    onEnter: () => {
                        setcounter(true)
                    }
                } 
            })
    
        gsap.fromTo(".saas-banner-char", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})

        return() => {
            if(t1) t1.kill()
        }
      },[])
    
    return (
        <div className="saas-page">
            <MobileNavbar />
         <ReactLenis root = {demoState.navbar ? false : true} options={{smoothWheel: true, duration: 3, easing : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier : 2 }}>
        <Header />
       {/* <InnerPageLoader /> */}
        <ScrollIndicator /> 
            <section className="Saas-banner">
                <img className="banner-img" src={banner} alt="saas-banner" />
                <div className="saas-container">
                    <div className="heading saasPageCss">
                    <img src={underline} alt="underline" />
                {/* <SparklesPreview2 mainDivClass={"Saas-banner-head"} className={"saas-div"} word={[
                                {
                                    text: "ESDS’s",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "AI-",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "Driven",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "SaaS",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "Is",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "Here",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "To",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "Empower",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "Your",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                                {
                                    text: "Business",
                                    class: "Saas-text",
                                    className: "inline-block saas-banner-char"
                                },
                        
                            ]} /> */}
                             <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="saas-banner-head"
    >
   ESDS’s AI- Driven SaaS Is Here To Empower Your Business
    </motion.h1>
                            
                    </div>
                                             <div className="saas-cta">
                          <button onClick={() => {navigate('/contact-us')}} className="CTA-button" data-text="Awesome">
    <span className="actual-text">&nbsp;Unlock your Potential NOW&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;your&nbsp;Potential&nbsp;NOW</span>
</button>
                            </div>  
                </div>
            </section>
            <section className="indian-saas">
                <div className="saas-second-container">
                    <div className="heading-link">
                        <h3 className="saas-header">The Indian SaaS Market Is On The Charge</h3>
                        <p>Are you aware of recent revolution in the SaaS industry?
                        </p>
                        <p> The recent numbers in 2024 reveal that over 70% of Indian businesses are exploring or adopting SaaS solutions to streamline operations.</p>
                    
                        <div className="india-cta">
                            <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                <span className="actual-text">&nbsp;Tap into Growth&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Tap&nbsp;into&nbsp;Growth</span>
                            </button>
                        </div>
                    </div>
                    <div className="booming-market">
                        <div className="outline-box1">
                            <div className="booming-box">
                            The booming market is projected to grow to a staggering <span>$50</span> billion by 2030.
                            </div>
                        </div>
                        <div className="empty-outline">

                        </div>
                        <div className="outline-box2">
                            <div className="buisness-box">
                            Businesses leveraging AI powered SaaS solutions, have shown a <span>70%</span> reduction in repetitive tasks, <span>20%</span> increase in decision-making accuracy, and a <span>40%</span> improvement in customer satisfaction.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="product-slider" className="product-slider">
                <div className="heading">
                    <h3 className="saas-header">What Does This Mean For Your Business? </h3>
                    <img src={underline} alt="underline" />
                    <h4>Bring a whole new level of efficiency, productivity, and customer satisfaction with SaaS solutions </h4>
                </div>
                <div className="product-container">
                <Slider {...settings}>
        <div className="prod-slides">
                            <div className="slide-container">
                                <div className="famrut-img">
                                    <img src={famrut} alt="Famrut" />
                                </div>
                                <div className="famrut-description">
                                    <h3 className="">Empowering You, Revolutionizing Your Farming Experience.</h3>
                                    <h5>Digitalizing Indian Farming inside out</h5>
                                    <p>At Famrut, our focus is completely on digitally overhauling the Indian farming industry. Bringing the farmer at the forefront of digitally transforming Indian Farming. Our purpose is to empower and foster a sustainable future for Indian agriculture.</p>
                                  <div className="CTA-btn">
                                  <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                        <span className="actual-text">&nbsp;Discover Now&nbsp;</span>
                                        <span style={{WebkitBackgroundClip : "text", WebkitTextFillColor: "transparent", backgroundImage : "linear-gradient(93deg, rgba(243,247,29,1) 0%, rgba(82,202,0,1) 100%)", WebkitTextStroke: "1px transparent", fontWeight: "600", borderRight: "6px solid rgba(82,202,0,1)"}} aria-hidden="true" className="hover-text">&nbsp;Discover&nbsp;Now</span>
                                    </button>
                                  </div>
                                </div>
                            </div>
        </div>
        <div className="prod-slides">
        <div className="slide-container">
                               
                                <div className="LCM-description">
                                    <h3 className="">The BEST Enterprise-Grade Low Code Platform.</h3>
                                    <h5>Crafting the Future of Innovation</h5>
                                    <p>Low Code Magic offers a powerful set of features designed to revolutionize the way you approach application development. With our platform, you can create robust, scalable, and user-friendly applications while simplifying the development process.</p>
                                    <div className="CTA-btn">
                                  <button onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
                                        <span className="actual-text">&nbsp;Discover Now&nbsp;</span>
                                        <span style={{WebkitBackgroundClip : "text", WebkitTextFillColor: "transparent", backgroundImage : "linear-gradient(93deg, rgba(128,43,236,1) 0%, rgba(247,102,224,1) 100%)", WebkitTextStroke: "1px transparent", fontWeight: "600", borderRight: "6px solid rgba(128,43,236,1)"}} aria-hidden="true" className="hover-text">&nbsp;Discover&nbsp;Now</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="LCM-img">
                                    <img src={LCM} alt="LCM" />
                                </div>
                            </div>
                           
        </div>
        <div className="prod-slides">
        <div className="slide-container">
                                <div className="IPAS-img">
                                    <img src={IPAS} alt="IPAS" />
                                </div>
                                <div className="IPAS-description">
                                    <h3 className="">Your All in One Project Management Solution </h3>
                                    <h5>Experience Efficiency and Mobility with iPAS</h5>
                                    <p>With iPAS, our mission is to create an innovative and intelligent project management solution that revolutionizes how governments and organizations operate, communicate with people, and deliver services.</p>
                                    <div className="CTA-btn">
                                  <button onClick={() => { navigate('/contact-us')}} className="CTA-button" data-text="Awesome">
                                        <span className="actual-text">&nbsp;Discover Now&nbsp;</span>
                                        <span style={{WebkitBackgroundClip : "text", WebkitTextFillColor: "transparent", backgroundImage : "linear-gradient(93deg, rgba(0,125,216,1) 0%, rgba(0,209,255,1) 100%)", WebkitTextStroke: "1px transparent", fontWeight: "600", borderRight: "6px solid rgba(0,125,216,1)"}} aria-hidden="true" className="hover-text">&nbsp;Discover&nbsp;Now</span>
                                    </button>
                                  </div>
                                </div>
                            </div>
        </div>
      
 
      </Slider>
                </div>
            </section>
            <section id="Infra-product" className="Infra-product">
                <div className="infra-container">
                    <h3 className="saas-header">Infra Products</h3>
                    <div className="center-img">
                        <div>
                            <img src={infra_img} alt="Infra Product" />
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <img src={grad_line} alt="gradient-line" />
                            <h4>eNlight 360</h4>
                            <h5>Private Cloud Orchestration</h5>
                            <p>Hand your business a superpower when it comes to IT operations and Infrastructure Management capabilities.</p>
                        </div>
                        <div className="card">
                        <h4>eNlight WAF</h4>
                            <h5>Web Application Firewall</h5>
                            <p>Specially engineered intelligent Cloud Hosted Web Application Firewall to filter web traffic, block threats and attacks of the OWASP Top 10.</p>
                        </div>
                        <div className="card">
                        <img src={grad_line} alt="gradient-line" />
                        <h4>VTM Scan</h4>
                            <h5>Web Vulnerability Scanner</h5>
                            <p>Supercharge your website's security with the best vulnerability scanner offering malware and security threat detection in advance.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="saas-transformation">
                    <div className="transformation-container">
                        <div className="heading">
                        <h2 className="saas-header">What Transformation Can SaaS Bring To Your Business?</h2>
                        <img src={underline} alt="underline" />
                        </div>
                      
                        <div className="transformations-split">
                            <div className="img-div">
                                <img src={transformation} alt="saas-transformation" />
                            </div>
                            <div className="transf-text">
                                <div className="">
                                    <h4>Reduce Costs</h4>
                                    <p>Replacing your legacy applications with SaaS solutions can lead to substantial cost savings by removing the need for upfront purchase or installation fees, as well as ongoing maintenance.</p>
                                </div>
                                <div className="">
                                    <h4>Seamless Availability & Scalability</h4>
                                    <p>SaaS provides secure, scalable, and reliable access to your applications, ensuring they are always available. This enhances productivity across your organization.</p>
                                </div>
                                <div className="">
                                    <h4>Faster Time to Benefit & Higher User Adoption</h4>
                                    <p>Once activated, end users can immediately access the SaaS application and start reaping its benefits. The ease of use promotes quicker adoption and increased user engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="revolution-impact">
                <div className="revolution-conatiner">
                    <div className="heading">
                        <h3 className="saas-header">We're leading a Revolution In Impact. Be a Part Of It</h3>
                        <img src={underline} alt="underline" />
                    </div>
                    <div className="text-counter">
                    <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={154000} /> : <span>0</span> } +</span>
                            <p>Indian citizens impacted through iPAS - project management solution</p>
                        </div>
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={9000} /> : <span>0</span>} +</span>
                            <p>Projects monitored through iPAS - project management solution</p>
                        </div>
                        <div className="revolution-counter">
                            <span>{ counter ? <CountUp duration={5} end={1000} /> : <span>0</span>} +</span>
                            <p>Works verified monthly through iPAS - project management solution </p>
                        </div>
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={25000} /> : <span>0</span>}+</span>
                            <p>VM’s managed on eNlight 360 IT infra management tool </p>
                        </div>
                        <div className="revolution-counter">
                            <span>{ counter ? <CountUp duration={5} end={85000} /> : <span>0</span>} +</span>
                            <p>Devices monitored on eNlight 360 with our IT infra management tool </p>
                        </div>
                        <div className='revolution-counter'>
                            <span>{counter ? <CountUp duration={5} end={227273} />: <span>0</span>} +</span>
                            <p>Scans performed on VTM scan website scanner </p>
                            </div>
                            <div className='revolution-counter'>
                                <span> { counter ? <CountUp duration={5} end={766744} /> : <span>0</span> }+</span>
                                <p>Vulnerabilities detected on VTM Scan website scanner</p>
                            </div>
                            <div className='revolution-counter'>
                                <span> { counter ? <CountUp duration={5} end={1000000} /> : <span>0</span> }+</span>
                                <p>Websites Scanned on VTM Scan website scanner </p>
                            </div>
                    </div>
                </div>
            </section>
           <Partner title={"Building Success Stories "} color={"#000"} logosArray={logos}/>
           <Topsection question={"Want To Experience A Similar Transformation In Your Business?"} answers={"Join the revolution and unlock yours."} />
           <FooterFinal BgColor={"#000"} />
           </ReactLenis>
        </div>
    )
}
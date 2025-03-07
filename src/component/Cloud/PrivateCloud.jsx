import './PrivateCloud.css'
import HeadingBottomLine from '../../components/ui/HeadingBottomLine'
import HeadingAnimation from './HeadingAnimation'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
import card1 from '../../images/cloud/priavte-cloud/card-one.png'
import blue_line from '../../images/cloud/priavte-cloud/line-architecture.svg'
import card2 from '../../images/cloud/priavte-cloud/card-two.png'
import trojan from '../../images/cloud/priavte-cloud/trojan-horse.png'
import card3 from '../../images/cloud/priavte-cloud/card-three.png'
import FooterFinal from '../FinalFooter/FooterFinal'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading'
import SubheadingAnimation from './SubheadingAnimation'
import Header from '../Header/Header'
import MobileNavbar from '../Navbar/MonileNavbar.jsx'
import Topsection from '../FinalFooter/Topsection'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SuccessStories from '../Case studt pop-up/SuccessStories'
import { GoArrowUpRight } from "react-icons/go";
import why_cloud from '../../images/cloud/priavte-cloud/why-cloud.mp4'
import React, { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { CustomEase, ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion";


export default function PrivateCloud() {
  

         let dispatch = useDispatch()          
        const demoState = useSelector(state => state.DemoState);

        useLayoutEffect(() => {
            const mm = gsap.matchMedia();
            gsap.registerPlugin(ScrollTrigger)
            gsap.registerPlugin(ScrollToPlugin)
            gsap.registerPlugin(CustomEase)

            CustomEase.create(
                "hop32",
                "0.785, 0.135, 0.15, 0.86"
              );
              CustomEase.create(
                "card-ani",
                "0.6, -0.28, 0.735, 0.045"
              );

              gsap.to(window, {
                scrollTo: 0,
                duration: 1,
                ease: "power2.inOut"
            });

              mm.add("(min-width: 1199px)", () => {
            let bannerAnimation = gsap.timeline({
                scrollTrigger: { 
                    trigger : ".banner-private-cloud",
                    start : "top top",
                    end: () => innerHeight*2,
                    pin: true,
                    scrub: true,
                }
            })
            bannerAnimation.to(".banner-content", {opacity : 0, y: "-10vw", duration : 1, ease : "power3.inOut"})
            bannerAnimation.fromTo(".banner-content1", {opacity : 0, y: "10vw"}, {opacity: 1, zIndex: 2, y: 0, duration : 1, ease: "power3.inOut" })

            let trojanSection = gsap.timeline({
                scrollTrigger: {
                    trigger : ".trojan-section",
                    start : "top top",
                    end : () => "bottom top",
                    pin: true,
                    scrub : true,
                }
            })
            trojanSection.to(".trojan-first-section",  { x: "0", duration : 1.5, ease : "hop32"}, "key1")
            trojanSection.to(".trojan-first-section",  {  x: "-50vw", duration : 2.5, ease : "hop32"}, "key")
            trojanSection.fromTo(".trojan-second-section",{x : "48vw"}, { x: "0", duration : 2.5, ease : "hop32"}, "key")
            trojanSection.to(".trojan-second-section", { x: "0", duration : 1.5, ease : "hop32"}, "key2")

            let cloudsolution = gsap.timeline({
                scrollTrigger: {
                    trigger : ".cloud-solution-section",
                    start : "top top",
                    end : () => innerWidth*3,
                    pin: true,
                    scrub : true,
                    onLeave : () => {
                       
                    },
                    onEnterBack: () =>{
                        gsap.to(".cloud-solution-question", { opacity : 1, zIndex : 1, duration : 0.5, ease : "hop32"})
                        gsap.to(".card-one", {x: 0, opacity : 0, zIndex : -1, duration : 0.2, ease : "hop32"})
                        gsap.to(".card-two", {scale : 0.6, opacity : 0, zIndex : -1, duration : 0.2, ease : "hop32"})
                        gsap.to(".card-three", {x: 0, opacity : 0, zIndex : -1, duration : 0.2, ease : "hop32"})
                    }
                }
            })
            cloudsolution.to(".CQ-character", {opacity : 1, stagger : 0.2, duration : 0.5, ease: "hop32"},"key5")
            cloudsolution.to(".cloud-solution-question", { opacity : 0, zIndex : 1, duration : 0.5, ease : "card-ani", onStart : () => {
                gsap.fromTo(".card-one",{x : "5vw"}, {x: 0, opacity : 1, zIndex : 1, duration : 0.8, ease : "power3.inOut"})
                gsap.fromTo(".card-two",{scale : 0.6}, {scale : 1, opacity : 1, zIndex : 1, duration : 0.8, ease : "power3.inOut"})
                gsap.fromTo(".card-three",{x : "-5vw"}, {x: 0, opacity : 1, zIndex : 1, duration : 0.8, ease : "power3.inOut"})
            //    gsap.to(".card-one", {opacity: 1})
            }},"key6")
      

            return() => {
                if(bannerAnimation) bannerAnimation.kill()
                    if(trojanSection) trojanSection.kill()
                if(cloudsolution) cloudsolution.kill()
            }
        })
        mm.add("(max-width : 1199px)", () => {
            let bannerAnimation = gsap.timeline({
                scrollTrigger: { 
                    trigger : ".banner-private-cloud",
                    start : "top top",
                    end: () => innerHeight*2,
                    pin: true,
                    scrub: true,
                }
            })
            bannerAnimation.to(".banner-content", {opacity : 0, y: "-10vw", duration : 1, ease : "power3.inOut"})
            bannerAnimation.fromTo(".banner-content1", {opacity : 0, y: "10vw"}, {opacity: 1, zIndex: 2, y: "20vw", duration : 1, ease: "power3.inOut" })
        })
            return () => {
                mm.revert();
            };
        },[])

        const [caseStudyId, setCaseStudyId] = React.useState('');
        const [open, setOpen] = React.useState(false);
        const handleClose = () => {
            setOpen(false);
        };
        
        const handleOpen  = (id) => {
            console.log('link', id)
            setCaseStudyId(id)
            setOpen(true);
        };

        
        useEffect(() => {
            dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
          },[])

    return (
        <div className='priavte-cloud-page'>   
              <MobileNavbar />
              <ReactLenis
                root
                options={{
                    duration: 1.8,
                    smoothWheel: true,
                    easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),

                }}

            >

       
        <Header />
             {window.innerWidth >= 1024 ? <ScrollIndicator /> : ""}
             <section className="banner-private-cloud">
                <section className='firt-banner-cloud'>
                    <div className="banner-content">
                        {/* <HeadingAnimation CharArray={[{ text: "Need", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "access", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "to", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "a", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "dedicated", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "Cloud", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "infrastructure,", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "that’s", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "committed", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "to", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "your", class: "top-heading-word", className: "inline-block top-heading-char3" }, { text: "business", class: "top-heading-word", className: "inline-block top-heading-char3" }, { text: "goals?", class: "top-heading-word", className: "inline-block top-heading-char3" },]} />
                        <SubheadingAnimation classNa={"subheading-banner"} CharArray={[{ text: "We’re", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1" }, { text: "Handing", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1" }, { text: "You", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1" },{ text: "the", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1" },{ text: "Keys", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1" },{ text: "to", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1" },{ text: "your", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1"},{ text: "Growth ", class: "top-heading-word1 highlight-word", className: "inline-block top-heading-char1"},{ text: "with ", class: "top-heading-word1", className: "inline-block top-heading-char1" },{ text: "a ", class: "top-heading-word1", className: "inline-block top-heading-char1" },{ text: "Dedicated ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "Private ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "Cloud ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "Infrastructure ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "Built ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "Around", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "Your ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "growing ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "business ", class: "top-heading-word1", className: "inline-block top-heading-char1" }, { text: "requirements ", class: "top-heading-word1", className: "inline-block top-heading-char1" }]} /> */}
                        {/* <p className='banner-sub-head'>We’re Handing You the Keys to your Grow with a Dedicated Private Cloud Infrastructure, Built Around Your growing requirements</p> */}
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                              Need access to a dedicated Cloud infrastructure, that’s committed to your business goals?
                            </motion.h1>
                            <motion.h3
                            className=""
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                             We’re Handing You the Keys to your Growth with a Dedicated Private Cloud Infrastructure Built Around Your growing business requirements
                            </motion.h3>
                       <Link to={"/contact-us"}> <button className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Get in Touch&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;in&nbsp;Touch&nbsp;</span>
                        </button></Link>
                    </div>
                    <div className="banner-content1">
                        <h3 className='heading-banner'>Ever wondered which cloud infrastructure powers critical IT workloads?</h3>
                        <p className='top-heading-word1'>We have the answer for you. Almost <span>80% of businesses</span> rely on private cloud services for <span>critical workloads</span> due to its <span>superior security, control, and compliance capabilities.</span></p>
                       
                        <Link to={"/contact-us"}> <button className="CTA-button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Get in Touch&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;in&nbsp;Touch&nbsp;</span>
                        </button></Link>
                    </div>
                </section>
              
             </section>
             <section className="trojan-section"> 
                <div className="trojan-innerdiv">
                    <div className="trojan-content">
                     <div className='trojan-two-section'>
                     <div className='trojan-first-section'>
                        <p className="top-question">Have you ever heard the story of how the Greeks won the <span>Trojan War ?</span></p>
                        <p className='trojan-story'> The city of Troy thought it was secure, but the Greeks used a clever trick — they hid soldiers inside a large wooden horse. Troy welcomed the horse inside, not realizing the hidden danger that would lead to their downfall.</p>
                        <p className='trojan-story2'>Now, think about your on-premise IT setup. Do you feel 100% confident in its security? If there’s even a small doubt, it might be time to rethink your approach.</p>
                      </div>
                      <div className='trojan-second-section'>
                        <p className="infra-question">At <span>ESDS</span>, we go beyond just being a name— We are an <span>Indian</span> expert, backed by <span>20+ years</span> of trust. </p>
                        <p className='infra-answer'>This is where ESDS private cloud services come in. Whether your private cloud runs on-premise or in one of our highly secure data centers, we make sure you never have to compromise. By moving to ESDS private cloud, your business can maintain complete control over your IT infrastructure while still benefiting from the flexibility, scalability, and performance that the cloud offers. </p>
                      </div>
                     </div>
                      <Link to={"/contact-us"}><button  className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Get a Free Consultation Today&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;a&nbsp;free&nbsp;Consultation&nbsp;Today</span>
                    </button></Link>
                    </div>
                   
                    <div className="trojan-image">
                        <img src={trojan} alt="trojan-horse" />
                    </div>
                </div>
             </section>
             <section id='cloud-solution-section' className='cloud-solution-section'>
                <div className="heading">
                    <h3>What is better, a Private Cloud, a Public Cloud, or a Hybrid Cloud?</h3>
                    <HeadingBottomLine />
                </div>
                <h4 className='answer-of-question'>
                Well. The answer may vary depending upon your business needs.
                </h4>
                <div className='main-section-cloud-solution'>
                <SparklesPreview2 className={"cloud-solution-question, textred"} word={[ { text: "Imagine ", className : "inline-block CQ-character" }, { text: "you're", className : "inline-block CQ-character" }, { text: "planning", className : "inline-block CQ-character" }, { text: "a", className : "inline-block CQ-character" }, { text: "trip.", className : "inline-block CQ-character" }, { text: "You", class: "banner-subheading-word " , className : "inline-block CQ-character" }, { text: "can", className : "inline-block CQ-character" }, { text: "choose", className : "inline-block CQ-character" }, { text: "between", className : "inline-block CQ-character" }, { text: "a", className : "inline-block CQ-character" }, { text: "private", className : "inline-block CQ-character" }, { text: "luxury", className : "inline-block CQ-character" },{ text: "car,", className : "inline-block CQ-character" },{ text: "a", className : "inline-block CQ-character" }, { text: "public", className : "inline-block CQ-character" },{ text: "bus,", className : "inline-block CQ-character" },{ text: "or", className : "inline-block CQ-character" },{ text: "a", className : "inline-block CQ-character" },{ text: "ride-share", className : "inline-block CQ-character" },{ text: "service", className : "inline-block CQ-character" },{ text: "that", className : "inline-block CQ-character" },{ text: "combines", className : "inline-block CQ-character" }, { text: "elements", className : "inline-block CQ-character" },{ text: "of", className : "inline-block CQ-character" },{ text: "both.", className : "inline-block CQ-character" }, { text: "But", className : "inline-block CQ-character" },{ text: "which", className : "inline-block CQ-character" },{ text: "one", className : "inline-block CQ-character" },{ text: "truly", className : "inline-block CQ-character" },{ text: "offers", className : "inline-block CQ-character" }, { text: "the", className : "inline-block CQ-character" }, { text: "best", className : "inline-block CQ-character" }, { text: "experience?", className : "inline-block CQ-character" }]} /> 
                <div className='cloud-solution-innerdiv'>
                    <div className='card card-one'>
                        <span className='card-top-img'>
                            <img src={card1} alt="card" />
                        </span>
                        <div className='first-card'>
                            <h4>Hybrid Cloud</h4>
                            <p>A Hybrid Cloud is like using a ride-share service—combining elements of both private and public options. It offers the flexibility to scale, keeping data and workloads in a secure environment.</p>
                        </div>
                    </div>
                    <div className='card card-two'>
                        <span className='card-top-img'>
                            <img src={card2} alt="card" />
                        </span>
                       <div className="second-card">
                       <h4>Private Cloud</h4>
                       <p>The Private Cloud is like the private luxury car. It provides high level of comfort, control, and security tailored to your specific business needs. Think of our Private Cloud setup with eNlight 360°—it’s behind one of the largest smart city projects in India, showcasing its ability to handle complex and critical workloads with precision.</p>
                       <Link to={"/private-cloud-services"} className='private-cloud-cta'> <button className="CTA-button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Talk to our experts&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Talk&nbsp;to&nbsp;our&nbsp;experts&nbsp;</span>
                        </button></Link>
                      
                       </div>
                    </div>
                    <div className='card card-three'>
                        <span className='card-top-img'>
                            <img src={card3} alt="card" />
                        </span>
                       <div className="third-card">
                       <h4>Public Cloud</h4>
                       <p>In this analogy, The Public Cloud, is like taking the public bus. It’s flexible and cost-effective for general needs, making it a good choice for businesses that require scalability without significant upfront investments.</p>
                       </div>
                    </div>
                </div>
                </div>
               
             </section>
             <section className='advantage-private'>
                <div className='heading'>
                <h2>Ready to upgrade with a private cloud, exclusively tailored to your business?</h2>
                <HeadingBottomLine />
                </div>
                {/* <p className="subheading">The Distinct Advantages of a Private Cloud</p> */}
               <div className='advantage-cloud'>
                    <div className='cloud-four-topic'>
                        <div className='complain-cost'>
                            <div className='compliance'>
                                <h5>Trusted Partner  :</h5>
                                <p>Serving 300+ private cloud clients with customized solutions.</p>
                                <div className='tracing-beam'>
                                     <div className="beam-line-static"><span></span></div>
                                     <div className="beam-line-static second-beam"><span></span></div>
                                     <div className="beam-line-static third-beam"><span></span></div>
                                </div>
                            </div>
                            <div className='compliance'>
                                <h5>Cost-Effective :</h5>
                                <p>Enjoy reduced OPEX and lower TCO with no unexpected commercial surprises.</p>
                                <div className='tracing-beam'>
                                     <div className="beam-line-static3"><span></span></div>
                                </div>
                            </div>
                            <div className='compliance'>
                                <h5>On-Demand Scalability :</h5>
                                <p>Our triple patented auto vertically scaling tech allows you to scale resources effortlessly.</p>
                                <div className='tracing-beam'>
                                     <div className="beam-line-static"><span></span></div>
                                     <div className="beam-line-static fourth-beam"><span></span></div>
                                     <div className="beam-line-static fifth-beam"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cloud-shape-div">
                            <div className="cloud-shape">
                            <div className="video-mask">
                                <video autoPlay loop muted >
                                    <source src={why_cloud} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                </div>

                                
                            </div>
                        </div>
                        <div className="security-performance">
                            <div className='security'>
                                <p><span>Effortless Data Control :</span><br></br>Full control of your data and Private Cloud infrastructure at your fingertips.</p>
                                <div className='tracing-beam'>
                                     <div className="beam-line-static1"><span></span></div>
                                     <div className="beam-line-static1 sixth-beam"><span></span></div>
                                     <div className="beam-line-static1 seventh-beam"><span></span></div>
                                </div>
                            </div>
                            <div className='security'>
                                <p><span>24/7 Dedicated Support :</span><br></br>Our RIMS team is available round-the-clock for any assistance you need.</p>
                                <div className='tracing-beam'>
                                     <div className="beam-line-static2"><span></span></div>
                                </div>
                            </div>
                            <div className='security'>
                                <p><span>Transparent Billing   :</span><br></br>Complete transparency in billing, with no hidden costs.</p>
                                <div className='tracing-beam'>
                                     <div className="beam-line-static1"><span></span></div>
                                     <div className="beam-line-static1 eight-beam"><span></span></div>
                                     <div className="beam-line-static1 nine-beam"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
             </section>
             <section className='PC-architecture'>
                <img className='blue-line' src={blue_line} alt="blue line" />
                <div className='cloud-architecture'>
                    <div className='subheadings'>
                        <div className="heead-button">
                        <h4>How does your business achieve faster application deployments?</h4>
                        <p>Organizations have reported <span>up to 80% faster deployments</span> for applications in a private cloud environment.</p>
                        </div>
                        <div className='architecture-btn'> 
                           <Link to={"/contact-us"}>
                           <button  className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Cloud Up Now&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Cloud&nbsp;Up&nbsp;Now&nbsp;</span>
                        </button>
                           </Link>
                        </div>
                    </div>
                    <div className="pc-architecture-head">
                        <h2>Our Private Cloud is your business’ luxury suite– thoughtfully designed for you  </h2>
                    </div>
                    <div className="luxury-suite-twelve">
                       <div className='luxury-suite-twelve-grid'>
                        <div>Integrate your own ISP link with private cloud infra.</div>
                        <div>Configure virtual machines/containers as per your business requirement.</div>
                        <div>The solution is proposed on our triple patented *Make in India* Cloud platform.</div>
                        <div>Get Access to a robust with enterprise-grade SLAs with an assured uptime of 99.99%.</div>
                        <div>Hosting is proposed in ESDS uptime-certified Tier III Data Centers. </div>
                        <div>All the links are established in Active-Passive mode to ensure that safe failover.</div>
                        <div>Virtual machines are created along with OS and databases specified.</div>
                        <div>A comprehensive suite of managed services tailored to your business needs.</div>
                        <div>Each layer can be customized based on tailored business requirements.</div>
                        <div>Enterprise Monitoring Software (EMS) Server / Network / Services to manage the complete hardware of your private cloud from one single console.</div>
                        <div>Networking infrastructure setup on redundant connectivity architecture with the connectivity of the 10/25/40/100 Gig within the networking components.</div>
                        <div>Avail the best support services with 24 x 7 Phone, E-Mail, and Ticket Support.</div>
                       </div>
                    </div>
                </div>
             </section>
             <section className='cloud-Success-stories'>
                    <div className='stories-container'>
                        <div className="heading">
                            <h3 className=''>Building success stories over a dedicated Private Cloud environment </h3>
                        </div>
                        <div className='casee-study-list'>
                            <div className='list-container'>
                                <ul>
                                    {/* <a href={Mudra_pdf} download={"sample.pdf"}> */}
                                    <a>
                                        <li id="1" className='case-study-item' onClick={() => handleOpen(1)}>
                                            <p><span>Kolhapur District Central Cooperative Bank Ltd (KDCC)</span> provides services through 191 branches in the district and serves 150,000+ customers through <span>ESDS secure private cloud.</span></p>
                                            <div className='arrow-icon'>
                                                <GoArrowUpRight />
                                            </div>
                                        </li>
                                    </a>
                                    {/* <a href={Mudra_pdf} download={"sample.pdf"}> */}
                                    <a>
                                        <li id="2" className='case-study-item' onClick={() => handleOpen(2)}>
                                            <p><span>The Indian Government Ministry’s</span> IT infrastructure, including over 100 sockets and 200+ VMs, is being efficiently monitored and managed by ESDS.</p>
                                            <div className='arrow-icon'>
                                                <GoArrowUpRight />
                                            </div>
                                        </li>
                                    </a>
                                    {/* <a href={Mudra_pdf} download={"sample.pdf"}> */}
                                    <a>

                                        <li id="3" className='case-study-item' onClick={() => handleOpen(3)}>
                                            <p><span>Lauren Information Technology</span> achieved high reliability and supreme performance with ESDS cloud services resulting in zero customer complaints.</p>
                                            <div className='arrow-icon'>
                                                <GoArrowUpRight />
                                            </div>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                            <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="private_cloud" ></SuccessStories>
                </section>
                <Topsection question={"We are offering you a dedicated infrastructure that’s tailored to your business growth."} answers={"Ready to capitalize on our expertise to propel your business forward?"} />
             <FooterFinal BgColor={"#000"} />

        </ReactLenis>
        </div>
    )
}
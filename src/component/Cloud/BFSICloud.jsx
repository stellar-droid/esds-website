import Banner_video from '../../images/cloud/BFSI/BFSI-banner-video.mp4'

import './BFSICloud.css'
import secondSectionimg from '../../images/cloud/BFSI/second-section-img.svg'
import whyESDS from '../../images/cloud/BFSI/whyonlyESDS.jpg'
import experDiffImg from '../../images/cloud/BFSI/experience-diff-img.svg'
import { GoArrowUpRight } from "react-icons/go";
import bank_1 from '../../images/cloud/BFSI/bank-1.svg'
import bank_2 from '../../images/cloud/BFSI/bank-2.svg'
import rupees_symbol from '../../images/cloud/BFSI/rupees-symbol.svg'
import bank_3 from '../../images/cloud/BFSI/bank-3.svg'
import Header from '../Header/Header'
import Partner from '../Partner/Partner'
import SuccessStories from '../Case studt pop-up/SuccessStories'
import FooterFinal from '../FinalFooter/FooterFinal'
import MobileNavbar from '../Navbar/MonileNavbar'
import axisBank from '../../images/partners/partner1.png'
import UnionBank from '../../images/partners/partner2.png'
import MuthoonGroup from '../../images/partners/partner3.png'
import DCBBank from '../../images/partners/partner4.png'
import TATACapital from '../../images/partners/partner5.png'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SBICpas from '../../images/partners/partner6.png'
import Sidbi from '../../images/partners/partner7.png'
import HeadingAnimation from './HeadingAnimation'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
import HomePageLoader from '../Loader/HomePageloader'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from "framer-motion";

export default function BFSICloud() {

    let logos = [axisBank, UnionBank, MuthoonGroup, DCBBank, TATACapital, SBICpas, Sidbi]

    let dispatch = useDispatch()
      useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin)
    
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power2.inOut"
        });
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1199px)", () => {
            let BFSIexpertise = gsap.timeline({
                scrollTrigger : {
                    trigger : ".BFSI-Why-only-ESDS",
                    start : "top top",
                    end : () => innerWidth * 3,
                    pin : true,
                    scrub : true
                }
            })
            BFSIexpertise.to(".why-only-question", {opacity : 0, duration: 0.8, ease : "power2.inOut"},"key5")
            BFSIexpertise.to(".why-only-card-title", {opacity : 1, duration : 0.8, ease : "power3.in"}, "key5")
            BFSIexpertise.fromTo(".BFSI-why-content", {x: "-20vw"}, {x: "150vw", duration: 2.5, ease : "power3.inOut",}, "key5")

           let BFSI_services = gsap.timeline({
            scrollTrigger : {
                trigger : ".DC-DR-services",
                start : "top top",
                end : () => innerWidth * 4.5,
                pin: true,
                scrub : true,
            }
           })
           BFSI_services.to(".DC-DR-question", {filter: "blur(5px)", scale : 0.8, duration : 2, ease : "power2.inOut"}, "key")
           BFSI_services.to(".DC-DR-answer", {filter: "blur(5px)",scale : 0.8, duration : 2, ease : "power2.inOut"}, "key")
           BFSI_services.to(".servcies-top-section", {y : 0, duration : 2, ease : "power2.inOut"}, "key")
           BFSI_services.to(".servcies-bottom-section", {y : 0, duration : 2, ease : "power2.inOut"}, "key")

            return () => {
                    if(BFSIexpertise) BFSIexpertise.kill()
                    if(BFSI_services) BFSI_services.kill()
                       
            }

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
        <div className='BFSI-container'>
        <ReactLenis root options={{ smoothWheel: true, duration: 4, easing: (t) => Math.min(1.5, 1.001 - Math.pow(2, -14 * t)), touchMultiplier: 2,smoothTouch : true, smooth : true  }}>
              <MobileNavbar />
                <Header />
              {/* <HomePageLoader /> */}
             {window.innerWidth >= 1024 ? <ScrollIndicator /> : ""}
            <section className="BFSI-banner">
                <div className="BFSI-innerdiv">
                <video autoPlay loop muted preload='none'>
                            <source src={Banner_video} type="video/mp4" />
                            Your browser does not support the video tag.
                </video>
                    <div className='BFSIcontent-text'>
                    <div className="BFSI-banner-content">
                    {/* <HeadingAnimation CharArray={[{ text: "Safeguarding ", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "India’s ", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "Critical", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "Banking ", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "&", class: "top-heading-word", className: "inline-block top-heading-char" }, { text: "Financial", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "Institutions", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "with", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "the", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "most", class: "top-heading-word", className: "inline-block top-heading-char2" }, { text: "Trusted ", class: "top-heading-word", className: "inline-block top-heading-char3" }, { text: "BFSI", class: "top-heading-word", className: "inline-block top-heading-char3" }, { text: "CC", class: "top-heading-word", className: "inline-block top-heading-char3" },]} /> */}
                                <motion.h1
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    Safeguarding India’s Critical Banking & Financial Institutions with the most Trusted BFSI CC
                                </motion.h1>
                    <Link to={"/contact-us"}>
                       <button className="CTA-button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Get in Touch&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;in&nbsp;Touch&nbsp;</span>
                    </button></Link> 
                    </div>
                    </div>
                </div>
            </section>
            <section className="BFSI-Digital-infrastructure">
               <div className="DI-left-content">
               <p className="BFSI-DI-question">Have You Heard About the Massive Cyberattack That Hit 300+ Banks in India? </p>
                <h4>A significant cybersecurity breach hit India's banking and financial sector, in which a major technology service provider for banks was struck by a ransomware attack. This cyber-attack resulted in the shutdown of payment systems for nearly 300 + banking and financial institutions, which left the banks and its massive customer base anxious and uncertain. </h4>
                <p className="second-ques">But do you feel fortunate that your business wasn’t a part of this attack?</p>
                <p className="second-answ">Today’s real scenario tells you that, a staggering 85% of businesses remain exposed to such cyber risks even with their existing security systems in place. This incident is a reminder that even your business could be vulnerable to such major disruptions.</p>
                <div className="DI-CTA">
                <Link to={"/contact-us"}>
                        <button className="CTA-button" data-text="Awesome">
                             <span className="actual-text">&nbsp;Talk to our experts&nbsp;</span>
                              <span aria-hidden="true" className="hover-text">&nbsp;Talk&nbsp;to&nbsp;our&nbsp;experts&nbsp;</span>
                        </button>
                     </Link>
                </div>
               </div>
               <div className="DI-img">
                    <img loading='lazy' src={secondSectionimg} alt="Digital infrastructure image" />
               </div>
            </section>
            <section className='BFSI-Why-only-ESDS'>
                <div className='bg-img'>
                    <img loading='lazy' src={whyESDS} alt="why ESDS image" />
                </div>
                <p className='why-only-question'>So, do you have the right tools, resources, and expertise to counter such an attack? And how does your business be proactive to such a scenario?</p>
                <h2 className='why-only-card-title'>Choose India’s #1 Trusted BFSI CC, Catering to End-to-End business Needs</h2>
                <div className="BFSI-why-content">
                    <p className='catering-card'>ESDS proudly hosts <strong>450 + banks </strong>on ESDS cloud</p>
                    <p className='catering-card2'>Experience in <span>managing Web Security for the World's No.1 website.</span></p>
                    <p className='catering-card'><span>Top 5 banks</span> in Bahrain trust ESDS for managing their on-premise private cloud infrastructure.</p>
                    <p className='catering-card'>ESDS hosts key government initiatives like <span>MUDRA Yojana, Standup India, Udyami Mitra, PM Swanidhi</span> and others</p>
                    <p className='catering-card'>Manages key digital initiatives for <span>SIDBI, Union Bank, DCB Bank, Kolhapur DCC, Ratnagiri DCC and some of the top banks in India</span>.</p>
                    <p className='catering-card'>Contributed to <span>₹19.22 trillion</span> in loans sanctioned to <span>353 million people</span> under the <span>MUDRA Yojana – which is hosted on ESDS Cloud.</span></p>
                    <p className="catering-card"><span>India's top 5 Fintech companies</span> trust ESDS for their digital ambitions. </p>
                    <p className='catering-card'>ESDS has the experience of working with the major System Integrators and CBS Software in India. </p>
                </div>
            </section>
            <section className="experience-diff">
                <div className='exper-diif-points'>
                    <div className="heading">
                        <h3>Ask yourself the real question - Are you utilizing your resources, to drive your business growth or are they being wasted on low-impact areas?</h3>
                        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className=" particle-line relative">
                            <div style={{ width: "25vw", height: "5vh", position: "absolute", borderRadius: "50%", left: "20%", background: "linear-gradient(94deg, rgba(0, 230, 255, 1) 13%, rgba(0, 102, 255, 1) 100%)", filter: "blur(50px)" }} className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
                            <div style={{ width: "100%", left: "0", height: "1px" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                        </div>
                    </div>
                    <div className='point-list'>
                        <div className="point">Just as money acts like your hardware, the way you use it directly impacts your business’s growth.</div>
                        <div className="point">Over 450 banks have grown with ESDS, because they’ve used their raw materials(Capital) efficiently and channeled them into optimizing their operations.</div>
                        <div className="point">The more raw material they have, the more they can reinvest in their business and customer experience</div>
                        <div className="point">As a result, they’ve the bandwidth to provide enhanced services, improved customer experiences, and achieve significant growth in profitability</div>                       
                    </div>
                </div>
                <div className='exper-diff-img'>
                    <img loading='lazy' src={experDiffImg} alt="experience differenece image" />
                </div>
            </section>
            <section className='DC-DR-services'>
                <div className="BFSI-wrapper-container">
                    <p className='DC-DR-question'>Is your organization ready to take that next step towards growth?</p>
                    <p className='DC-DR-answer'>Discover how ESDS's End to end BFSI services and solutions can help you achieve this growth. </p>
                </div>
                <div className='servcies-list'>
                    <div className='servcies-top-section'>
                        <p>Comprehensive Data Center (DC) and Disaster Recovery (DR)/BCP solutions.</p>
                        <p>Secure DC and DR colocation, with advanced connectivity options (MPLS, ILN, VPN, IP Sec).</p>
                        <p>Flexible hosting options across Private, Public, and Hybrid cloud environments</p>
                        <p>Data Center Management and Monitoring Software.</p>
                        <p>Document Management System (DMS)</p>
                        <p>CTS Application and Infrastructure Hosting.</p>
                    </div>
                    <div className='servcies-bottom-section'>
                        <p>Hosting for IMPS, UPI, BBPS, and Financial Inclusion services</p>
                        <p>AI-Powered Chatbot Solutions</p>
                        <p>Comprehensive website development, maintenance, and email hosting solutions</p>
                        <p>Dark Web Monitoring Service.</p>
                        <p>Reliable and secure email hosting solutions tailored for banking needs. </p>
                        <p>HO & Branch Connectivity solutions</p>
                    </div>
                </div>
            </section>
            <section className=''>

            </section>
            <section className='banking-reimagined'>
                <div className="heading">
                    <h3>India’s top banking & financial institutions are safeguarded and growing on ESDS Cloud</h3>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className=" particle-line relative">
                            <div style={{ width: "28vw", height: "5vh", position: "absolute", borderRadius: "50%", left: "35%", background: "linear-gradient(94deg, rgba(0, 230, 255, 1) 13%, rgba(0, 102, 255, 1) 100%)", filter: "blur(50px)" }} className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
                            <div style={{ width: "100%", left: "0", height: "1px" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                        </div>
                </div>
                <div className='bank-reimagined-list'>
                        <div className='BR-list' id="1" onClick={() => handleOpen(1)}>
                            <div className='bank1-img'>
                                <img src={bank_1} alt="bank image" />
                            </div>
                            <div className='list-content'>
                                <div>
                                <p><span>Ratnagiri District Central Co-operative Bank</span></p>
                                <p>ESDS offered RDCCB BFSI Community Cloud which supports...</p>
                                </div>                             
                                <span className='arrow'> <GoArrowUpRight /></span>
                            </div>
                            
                        </div>
                        <div className='BR-list' id="2" onClick={() => handleOpen(2)}>
                            <div className='bank2-img'>
                                <img loading='lazy' src={bank_2} alt="bank image" />
                            </div>
                            <div className='list-content'>
                              <div>
                              <p><span> Sindhudurg District Central Co-operative Bank Ltd. (DCCB)</span></p>
                              <p>ESDS developed the bank’s website as per their requirements and made the...</p>
                              </div>
                                <span className='arrow'> <GoArrowUpRight /></span>
                            </div>
                        </div>
                        <div className='BR-list' id="3" onClick={() => handleOpen(3)}>
                            <div className='bank3-img'>
                                <img loading='lazy' src={bank_3} alt="bank image" />
                            </div>
                            <div className='list-content'>
                               <div>
                               <p><span>Kolhapur District Central Co-op Bank</span> </p>
                               <p>ESDS provided KDCCB with Managed Colocation services, wherein procurement of...</p>
                               </div>
                                <span className='arrow'> <GoArrowUpRight /></span>
                            </div>
                        </div>
                </div>
            </section>
            <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="bfsi_cloud" ></SuccessStories>
            <section className='rupees-section'>
                <div className='rupees-img'>
                    <img loading='lazy' src={rupees_symbol} alt="rupees-symbol" />
                </div>
                <div className="bfsi-banking-DC-DR">
                    <h4>We are building India's BFSI community for a resilient and safe future</h4>
                    <p>Ready to join us in shaping the next era of excellence?</p>
                    <div className="bfsi-bank-cta">
                    <Link to={'/contact-us'}> <button  className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Talk to our experts&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Talk&nbsp;to&nbsp;our&nbsp;experts&nbsp;</span>
                        </button></Link>
                    </div>
                </div>
            </section>
            <Partner color={"#00000b"} logosArray={logos}/>
            <FooterFinal BgColor={"#00000b"} />
            </ReactLenis>
        </div>
    )
}
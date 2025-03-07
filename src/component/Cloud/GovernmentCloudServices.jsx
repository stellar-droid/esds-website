import React, { useEffect, useLayoutEffect } from 'react'
import './GovernmentCloudServices.css'
import Header from '../Header/Header'
import MobileNavbar from "../Navbar/MonileNavbar";
import FooterFinal from '../FinalFooter/FooterFinal'
import GovCloudServices from '../../images/cloud/GovernmentCloudServices/govbg.png'
import govcloudLogo from '../../images/cloud/GovernmentCloudServices/govcloud-logo.svg'
import mudraLoanImg from '../../images/cloud/GovernmentCloudServices/mudraLoan-img.png'
import GovDataSecured from '../../images/cloud/GovernmentCloudServices/GovDataSecured.png'
import didYouKnow from '../../images/cloud/GovernmentCloudServices/didYouKnow.svg'
import SuccessStories from '../Case studt pop-up/SuccessStories';
import { GoArrowUpRight } from "react-icons/go";
import DigitallyEmpoweredgov from '../../images/cloud/GovernmentCloudServices/DigitallyEmpoweredgov.png'
import GCCLogo1 from '../../images/cloud/GovernmentCloudServices/GCC-logo.svg'
import GCCLogo2 from '../../images/cloud/GovernmentCloudServices/GCC-logo2.svg'
import GCCLogo3 from '../../images/cloud/GovernmentCloudServices/GCC-logo3.svg'
import lastCta from '../../images/cloud/GovernmentCloudServices/last-cta-bg.png'
import { Link } from 'react-router-dom';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import ScrollIndicator from '../../components/ui/ScrollIndicator';
import { useDispatch } from 'react-redux';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { ScrollToPlugin } from 'gsap/all';
import gsap from 'gsap';

export default function GovernmentCloudServices() {
    let dispatch = useDispatch()

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

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power2.inOut"
        });
    },[])
    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
    return (
        <div className='bgBlack'>
         <ReactLenis root options={{ smoothWheel: true, duration: 4, easing: (t) => Math.min(1.5, 1.001 - Math.pow(2, -14 * t)), touchMultiplier: 2,smoothTouch : true, smooth : true  }}>
            <MobileNavbar />
            <Header />
            {window.innerWidth >= 1024 ? <ScrollIndicator /> : ""}
            <section className="GovCloudSerbanner-hight">
                <div className='bannerGov'>
                    <div className='govCloud-heading'>
                        <img src={govcloudLogo} className='govLogo' alt="Government Cloud logo" />
                        <h1>Empowering E-Governance with <br />India’s Most Trusted Government Community Cloud</h1>
                    </div>
                    <img src={GovCloudServices} className='bannerImg' alt="Government Cloud Services" />

                </div>
                <div className='GovCloudServices-container'>  
                        <div className='government-cta'><Link to={"/contact-us"}>
                            <button className="CTA-button" data-text="Awesome">
                                <span className="actual-text">&nbsp;Talk to our experts&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Talk&nbsp;to&nbsp;our&nbsp;experts&nbsp;</span>
                            </button>
                        </Link>  </div>
                        <div className='didYouKnow_section'>
                                <div className='twoSection'>
                                    <div className='leftSection_text'>
                                        <h3><span>ESDS</span> is <span>India’s first and most trusted</span> Cloud Technology Company to get <span>empaneled by the Ministry of Electronics and Information Technology (MeitY).</span></h3>
                                    </div>
                                    <div className='didYouKnowMobile'>
                                    <img src={didYouKnow} className='mudraLoan_Img' alt="Did You Know" />
                                    </div>
                                    <div className='rightSection_text'>
                                        <h3><span>India’s single largest database</span> running on Cloud sizing <span>500 TB</span> for Smart Meters’ is hosted on the <span>ESDS cloud</span></h3>
                                    </div>
                                </div>
                            </div>

                    <div className='govInitiatives'>
                        <div className="heading">
                            <h3>How is <span>ESDS</span> enabling the <span>digital transformation</span> of India’s key <span>government initiatives?</span></h3>
                            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className=" particle-line relative">
                                <div style={{ width: "70%", height: "1vh", position: "absolute", borderRadius: "50%", background: "linear-gradient(94deg, #FF6B00 0%, #FFFFFF 50%, #008515 100%)", filter : "blur(30px)" }} className="absolute   bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
                                <div style={{ width: "80%",  height: "1px" }} className="absolute top-0 bg-gradient-to-l from-transparent via-gov-500 to-transparent h-px " />
                            </div>
                        </div>                      
                        <div className='govInitiatives_dflex'>
                            <div className='govInitiatives_img'>
                                <img src={mudraLoanImg} className='mudraLoan_Img' alt="mudra loan" />
                            </div>
                            <div className='govInitiatives_info'>
                                <strong>The government-led <span>Mudra Yojana</span> scheme, securely hosted on <span>ESDS’s GCC</span>, has sanctioned over <span>Rs. 3,217 billion</span> in loans, benefiting <span>60+ million Indians.</span></strong>
                                <strong>ESDS GCC hosts <span>95% of the India’s Smart Meters</span> and Disaster Recovery (DR) sites for over <span>30 Smart Cities.</span></strong>
                                <strong>ESDS GCC securely hosts data for <span>major Indian ports and PDS</span> data for over <span>10 states</span>.</strong>
                                <strong>ESDS GCC enables the <span>Digital India Mission</span> & hosts key govt schemes, launched by PM, which aims to digitally empower 139 crore citizens.</strong>
                                <strong>ESDS GCC provides <span>dynamic IT governance</span> for federal and state governments, while ensuring that government data remains within Indian territory.</strong>
                                <strong><span>Transforms traditional</span>, paper-heavy government offices into efficient, digitized workplaces through ESDS GCC.</strong>
                                <strong>The iPAS Project on ESDS GCC has transforms state planning departments <span>benefiting over 15.4 million citizens by tracking 9,392 projects, supporting an average of 1,000 public projects monthly</span>.</strong>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='govAgencySolution'>
                    <div className='heading'>
                        <h2>Why are Government Agencies moving towards Government Community Cloud?</h2>
                        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className=" particle-line relative">
                            <div style={{ width: "70%", height: "1vh", position: "absolute", borderRadius: "50%", background: "linear-gradient(94deg, #FF6B00 0%, #FFFFFF 50%, #008515 100%)", filter: "blur(30px)" }} className="absolute   bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
                            <div style={{ width: "80%", height: "1px" }} className="absolute top-0 bg-gradient-to-l from-transparent via-gov-500 to-transparent h-px " />
                        </div>
                    </div>
                    <div className='GovCloudServices-container'>
                    <div className='govAgencySolution_info'>
                            <div className='govAgencySolution_info1'>
                                <strong>Compliance</strong>
                                <p>The Government Community Cloud (GCC) adheres to strict government protocols, ensuring full compliance with national standards and data sovereignty.</p>
                            </div>
                            <div className='govAgencySolution_info2'>
                                <strong>Expert Support</strong>
                                <p>Dedicated IT assistance from Subject Matter Experts (SMEs) tailored to their specific needs.</p>
                            </div>
                            <div className='govAgencySolution_info3'>
                                <strong>Unmatched Security</strong>
                                <p>With security measures on par with India’s largest banks, ESDS ranks among the top five in Managed Security Services.</p>
                            </div>
                            <div className='govAgencySolution_info4'>
                                <strong>Cost-effectiveness</strong>
                                <p>The pay-per-use model minimizes costs, allowing agencies to avoid large upfront investments.</p>
                            </div>

                            <div className='govAgencySolution_info5'>
                                <strong>Smart Governance</strong>
                                <p>GCC supports the digital transformation of governance, promoting efficient, transparent, and innovative practices.</p>
                            </div>
                    </div>

                    
                    </div>
                </div>

                
                <div className='governmentAgency'>
                    <div className="heading">
                        <h3>What if your <span>government agency</span> could go fully digital, with all <span>data secured and stored locally?</span></h3>
                        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className=" particle-line relative">
                            <div style={{ width: "70%", height: "1vh", position: "absolute", borderRadius: "50%", background: "linear-gradient(94deg, #FF6B00 0%, #FFFFFF 50%, #008515 100%)", filter: "blur(30px)" }} className="absolute   bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
                            <div style={{ width: "80%", height: "1px" }} className="absolute top-0 bg-gradient-to-l from-transparent via-gov-500 to-transparent h-px " />
                        </div>
                    </div>
                        <div className='GovCloudServices-container'>

                        <div className='governmentAgency_dflex'>
                            <div className='governmentAgency_img'>
                                <img src={GovDataSecured} className='governmentAgency_Img' alt="government agency" />
                            </div>
                            <div className='governmentAgency_info'>
                                <strong>ESDS has created the ideal platform for this transformation.
                                India’s Digital Transformation is in full swing, fueled by the Digital India Mission, which aims to empower 139 crore citizens with a seamless digital identity.</strong>
                                <p>Central to this transformation is the <span>ESDS Government Community Cloud (GCC)</span>, which provides dynamic IT governance that enables both federal and state governments to digitize services while <span>securely storing sensitive data within Indian borders.  ESDS’ triple-patented vertical auto-scaling technology</span> makes ESDS the preferred choice for most PSU and government clients hosting their applications on a customized government community cloud. Notably, ESDS is one of the <span>first companies to receive empanelment from the Ministry of Electronics and Information Technology (MeitY)</span>. We have also been recognized as the <span>Best Smart City Community Cloud Provider</span>, underscoring our commitment to creating and hosting smart city solutions.</p>
                               
                            </div>
                        </div>
        </div>

                    </div>

                    <div className='DigitallyEmpoweredgovernment'>
                        <h3>Enabling <span>Digitally Empowered</span> government organizations with unique <span>GCC strengths</span> –</h3>
                        <div className='GovCloudServices-container'>

                        <div className='DigitallyEmpoweredgovernment_dflex'>
                        <div className='DigitallyEmpoweredgovernment_info'>
                                <strong><span>Pay-per-consumption billing model</span>, charging only for resources used.</strong>
                                <strong>Seamless <span>lift-and-shift migration</span> for smooth data transfer.</strong>
                               <strong>Security standards are on par with those used by <span>India's largest banks, ranking ESDS in the top 5 for managed security services.</span></strong>
                               <strong>Trusted by over <span>40 central government departments, PSUs, and major projects like Smart Cities and PMO portals.</span></strong>
                               <strong><span>First in India to host government applications on the cloud</span>, starting in 2010</strong>
                               <strong>Securely manages <span>two exclusive government data centers in collaboration with STPI</span></strong>
                               <strong>Make in <span>India eNlight Cloud solution</span>, holding <span>UK, US, and India patents for vertical and horizontal auto-scaling technology</span></strong>
                               <strong><span>Subject Matter Experts (SMEs)</span> available to provide personalized IT support for government projects.</strong>
                               <strong>Expertise in upgrading legacy applications to <span>modern cloud-based solutions</span></strong>
                               <strong>A highly ethical  and trusted team with <span>24*7 support</span></strong>
                               <strong><span>Fully compliant</span> with national <span>government standards</span>, adhering to strict protocol.</strong>

                            </div>
                            <div className='DigitallyEmpoweredgovernment_img'>
                                <img src={DigitallyEmpoweredgov} className='DigitallyEmpoweredgovernment_Img' alt="government agency" />
                                <div className='government-cta2'><Link to={"/contact-us"}>
                            <button className="CTA-button" data-text="Awesome">
                                <span className="actual-text">&nbsp;Talk to our experts&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Talk&nbsp;to&nbsp;our&nbsp;experts&nbsp;</span>
                            </button>
                        </Link>  </div>
                            </div>
                           
                        </div>
        </div>

                    </div>

                <div className='realWorlImpact'>
                    <div className='heading'>
                        <h3>The Real-World Impact of <span>ESDS Government Community Cloud</span></h3>
                        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className=" particle-line relative">
                            <div style={{ width: "70%", height: "1vh", position: "absolute", borderRadius: "50%", background: "linear-gradient(94deg, #FF6B00 0%, #FFFFFF 50%, #008515 100%)", filter: "blur(30px)" }} className="absolute   bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
                            <div style={{ width: "80%", height: "1px" }} className="absolute top-0 bg-gradient-to-l from-transparent via-gov-500 to-transparent h-px " />
                        </div>
                    </div>
                    <div className='bank-reimagined-list'>
                        <div className='BR-list' id="1" onClick={() => handleOpen(1)}>
                            <div className='bank1-img'>
                                <img src={GCCLogo2} alt="bank image" />
                            </div>
                            <div className='list-content'>
                                <div>
                                <p>Mudra Limited</p>
                                <p>Micro Units Development and Refinance Agency Bank.</p>
                                </div>                             
                                <span className='arrow'> <GoArrowUpRight /></span>
                            </div>
                            
                        </div>
                        <div className='BR-list' id="2" onClick={() => handleOpen(2)}>
                            <div className='bank2-img'>
                                <img src={GCCLogo1} alt="bank image" />
                            </div>
                            <div className='list-content'>
                              <div>
                              <p>Government Of Maharashtra</p>
                              <p>It is Maharashtra Government's Revenue Department.</p>
                              </div>
                                <span className='arrow'> <GoArrowUpRight /></span>
                            </div>
                        </div>
                        <div className='BR-list' id="3" onClick={() => handleOpen(3)}>
                            <div className='bank3-img'>
                                <img src={GCCLogo3} alt="bank image" />
                            </div>
                            <div className='list-content'>
                               <div>
                               <p>Indian Bureau Of Mines </p>
                               <p>The Indian Bureau of Mines (IBM) established in 1948.</p>
                               </div>
                                <span className='arrow'> <GoArrowUpRight /></span>
                            </div>
                        </div>
                </div>
                </div>

                
            <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="governemnt_cloud" ></SuccessStories>
                <div className="Last-cta-section">
                    <div className='background-img'>
                        <img src={lastCta} alt="India's government" />
                    </div>
                    <div className="last-section-cta">
                    <p className='para'>We are on a mission revolutionizing India's government landscape.</p>
                    {window.innerWidth < 900 ?  <button className='LastCTA-section-btn'><Link to={'/contact-us'}>Are you ready to transform your government organization with us?</Link></button> :  <div className='government-cta2'><Link to={"/contact-us"}>
                            <button className="CTA-button" data-text="Awesome">
                                <span className="actual-text">&nbsp;Are you ready to transform your government organization with us ?&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;Are&nbsp;you&nbsp;ready&nbsp;to&nbsp;transform&nbsp;your&nbsp;government&nbsp;organization&nbsp;with&nbsp;us&nbsp;?&nbsp;</span>
                            </button>
                            
                        </Link>  </div> }
                    </div>
                </div>

            </section>
            
        <FooterFinal BgColor={"#000"} />
        </ReactLenis>
        </div>
    )
}

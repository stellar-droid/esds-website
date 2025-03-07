import './ManagedServices.css'
import Bg_video from '../../images/Managed services/MS-bg-video.mp4'
import slide1 from '../../images/Managed services/Datacenter-migration.jpg'
import slide2 from '../../images/Managed services/Migration.jpg'
import slide3 from '../../images/Managed services/Cloud-Manage.jpg'
import slide4 from '../../images/Managed services/Database.jpg'
import { useEffect, useLayoutEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import CountUp from 'react-countup';
import gsap from 'gsap';
import Topsection from '../FinalFooter/Topsection'
import FooterFinal from '../FinalFooter/FooterFinal'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading';
import HeadingBottomLine from '../../components/ui/HeadingBottomLine';
import Header from '../Header/Header';
import divider from '../../images/Managed services/myth-divider.png'
import resource_img from '../../images/Managed services/resource-img-min.png'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useNavigate, useParams } from 'react-router-dom'
import Partner from '../Partner/Partner';
import logo1 from '../../images/Managed services/logo1.png'
import logo2 from '../../images/Managed services/logo2.png'
import logo3 from '../../images/Managed services/logo3.png'
import logo4 from '../../images/Managed services/logo4.png'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import logo5 from '../../images/Managed services/logo5.png'
import logo6 from '../../images/Managed services/logo6.png'
import InnerPageLoader from '../Loader/InnerPageLoader.jsx'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
import SuccessStories from '../Case studt pop-up/SuccessStories'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MobileNavbar from '../Navbar/MonileNavbar.jsx'
import { motion } from "framer-motion";

export default function ManageSecuServices() {
    let dispatch = useDispatch()
    const demoState = useSelector(state => state.DemoState);
      useEffect(() => {
          dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
        },[])

    let [countNumber, setcountNumber] = useState(false)
  
    let logos = [logo1, logo2, logo3, logo4, logo5, logo6]
    const navigate = useNavigate()
    const contactNavigation = () => {
        navigate('/contact-us');
    };

    const [caseStudyId, setCaseStudyId] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen  = (id) => {
        setCaseStudyId(id)
        setOpen(true);
    };


    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 500) {
                document.getElementById("scroll-down").style.display = "none"
            } else {
                document.getElementById("scroll-down").style.display = "block"
            }
        })

    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        const mm = gsap.matchMedia();


        mm.add("(min-width: 1199px)", () => {
            const manageservicesSlide = gsap.timeline({
                scrollTrigger: {
                    trigger: ".MSS-offers-slider",
                    start: "top top",
                    end: () => innerHeight * 5,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
    
                }
    
            })
    
            manageservicesSlide.to("#second-slide", { y: "-60vh"  }, "key")
            manageservicesSlide.to("#first-description", { x: "-10vw", opacity: -2, }, "key")
            manageservicesSlide.to("#second-description", { x: "0", opacity: 1 }, "key")
            manageservicesSlide.to("#third-slide", { y: "-120vh" }, "key1")
            manageservicesSlide.to("#second-description", { x: "-10vw", opacity: -2 }, "key1")
            manageservicesSlide.to("#third-description", { x: "0", opacity: 1 }, "key1")
            manageservicesSlide.to("#fourth-slide", { y: "-180vh" }, "key2")
            manageservicesSlide.to("#third-description", { x: "-10vw", opacity: -2 }, "key2")
            manageservicesSlide.to("#fourth-description", { x: "0", opacity: 1 }, "key2")
    
    

            document.querySelectorAll(".MS-heading").forEach(element => {
                if (element) {
                    gsap.fromTo(element, { skewY: -2, y: -20, opacity: 0 }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        skewY: 0,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 50%",
                            end: "bottom top",
                        }
                    });
                }
            });
        
            const counter = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Managed-operation-counter",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    onEnter: () => setcountNumber(true),
                }
            });


            if (document.querySelector(".img-div")) {
                gsap.to(".img-div", {
                    scale: 1.2,
                    duration: 2,
                    scrollTrigger: {
                        trigger: ".resource-section",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            }
        
            return () => {
                manageservicesSlide.kill();
                counter.kill();
            };
        })
    

        mm.add("(max-width : 1199px)", () => {
          
        
        
            const counter = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Managed-operation-counter",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    onEnter: () => setcountNumber(true),
                }
            });


            if (document.querySelector(".img-div")) {
                gsap.to(".img-div", {
                    scale: 1.2,
                    duration: 2,
                    scrollTrigger: {
                        trigger: ".resource-section",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            }
        
            return () => {
                        
                counter.kill();
            };
                
        })

        return () => {
            mm.revert();
          };
    }, []);
    
  

    return (
        <div className='managed-services'>
            <MobileNavbar />
            <ReactLenis root = {demoState.navbar ? false : true} options={{ smoothWheel: true, duration: 3, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier: 2 }}>
                <Header />
                <ScrollIndicator />
                <section className="MSS-container">
                    <div className="MSS-innerdiv">
                        <div className="radial-overlay">

                        </div>
                        <div className='MSS-banner-video'>
                            <video autoPlay loop muted >
                                <source src={Bg_video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='MSS-Banner-center-text mobilemangedSer'>
                           
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='MSS-banner-center'
                            >
                                We MANAGE The Wheel, So That Your Business Can Focus On The Road
                            </motion.h1>
                            <motion.h3
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='MSS-banner-center-subtitle'
                            >
                               Leave the complexities of managing your IT infrastructure to Our experts, while you take control of your Business 
                            </motion.h3>
                        </div>
                    </div>
                </section>
                <section className="myth-section">
                    <div className='myth-container'>
                        <div className="myth-heading">
                            <h2 className='MS-heading'>Breaking The Myth - Does Managed IT Services Really Bring You Value?</h2>
                            <HeadingBottomLine />
                        </div>
                        <div className='myth-description'>
                            <div className="myth-sec common-myth">
                                <div className='innerdiv'>
                                    <h5>Common Myth</h5>
                                    <p>Managed services are expensive for businesses, suggesting it’s convenient to manage internally. They are often perceived as an additional expense or unnecessary overhead.</p>
                                </div>
                            </div>
                            <div className='myth-sec divider-img'>
                                <div className='tilted-line'></div>
                                <div className='center-img'>
                                    <img src={divider} alt="divider" />
                                </div>
                            </div>
                            <div className='myth-sec reality'>
                                <div className="innerdiv">
                                    <h5>The reality</h5>
                                    <p>Research indicates that businesses utilizing Managed services have been shown to reduce annual IT costs by over 25% for 46% and experience an average 50% reduction in downtime, enhancing productivity and cost savings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='MS-offers-slider' className='MSS-offers-slider'>
                    <h3 className='MS-heading'>With Our Range, We’ve Got You Comprehensively Covered  </h3>
                    <div className='MSS-slider-container'>
                        {/* <div className='slide-count'>{slideCount}</div> */}
                        <div className='slider'>
                            <div className='image-card'>
                                <div id='first-slide' className='slide-img'><img src={slide1} alt="DC Migration" /></div>
                                <div id='second-slide' className='slide-img'><img src={slide2} alt="Cloud Migration" /></div>
                                <div id='third-slide' className='slide-img'><img src={slide3} alt="Cloud Managed Service" /></div>
                                <div id='fourth-slide' className='slide-img'><img src={slide4} alt="Database Administration" /></div>
                            </div>
                            <div className='description-container'>
                                <div className="slide-inner-container">
                                    <div id='first-description' className='slide-description'>
                                        <div className='slide-text'>
                                            <div className='arrow-text'>
                                                <h4>DC Migration </h4>
                                            </div>
                                            <div className='subtitle'>
                                                <p>Efficiently migrate your data center with our expert guidance and seamless execution, ensuring minimal disruption and maximum reliability for your IT infrastructure.
                                                    <br />
                                                    <br />
                                                    <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                                        <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                                        <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                                    </button>
                                                </p>


                                            </div>
                                        </div>
                                    </div>
                                    <div id='second-description' className='slide-description'>
                                        <div className='slide-text'>
                                            <div className='arrow-text'>
                                                <h4>Cloud Migration</h4>
                                            </div>
                                            <div className='subtitle'>
                                                <p>Effortlessly transition to the cloud with our streamlined migration services, ensuring secure data transfer and optimized performance to support your business growth.
                                                    <br />
                                                    <br />
                                                    <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                                        <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                                        <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='third-description' className='slide-description'>
                                        <div className='slide-text'>
                                            <div className='arrow-text'>
                                                <h4>Cloud Managed Service </h4>
                                            </div>
                                            <div className='subtitle'>
                                                <p>Simplify and optimize your cloud operations with our comprehensive managed services, ensuring seamless performance, security, and scalability for your business-critical applications.
                                                    <br />
                                                    <br />
                                                    <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                                        <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                                        <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                                    </button></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='fourth-description' className='slide-description'>
                                        <div className='slide-text'>
                                            <div className='arrow-text'>
                                                <h4>Database Administration</h4>
                                            </div>
                                            <div className='subtitle'>
                                                <p>Ensure the reliability, performance, and security of your databases with our expert Database Administration (DBA) services, tailored to meet your business's specific needs.  <br />
                                                    <br />
                                                    <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                                        <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                                        <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                                    </button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <section className='MSmobileShow_view'>
                    <div className='managedservices'>
                        <h3 className='MS-heading'>With Our Range, We’ve Got You Comprehensively Covered  </h3>
                        <div className='cloudOffer'>
                            <div className='cloudOffer_1'>
                                <img src={slide1} alt="DC Migration" />
                                <h2>DC Migration</h2>
                                <div className='subtitle'>
                                    <p>Efficiently migrate your data center with our expert guidance and seamless execution, ensuring minimal disruption and maximum reliability for your IT infrastructure.
                                        <br />
                                        <br />
                                        <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                        </button>
                                    </p>


                                </div>
                            </div>
                            <div className='cloudOffer_1'>
                                <img src={slide2} alt="Cloud Migration" />
                                <h2>Cloud Migration</h2>
                                <div className='subtitle'>
                                    <p>Effortlessly transition to the cloud with our streamlined migration services, ensuring secure data transfer and optimized performance to support your business growth.
                                        <br />
                                        <br />
                                        <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div className='cloudOffer_1'>
                                <img src={slide3} alt="Cloud Managed Service" />
                                <h2>Cloud Managed Service</h2>
                                <div className='subtitle'>
                                    <p>Simplify and optimize your cloud operations with our comprehensive managed services, ensuring seamless performance, security, and scalability for your business-critical applications.
                                        <br />
                                        <br />
                                        <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                        </button></p>
                                </div>
                            </div>
                            <div className='cloudOffer_1'>
                                <img src={slide4} alt="Database Administration" />
                                <h2>Database Administration</h2>
                                <div className='subtitle'>
                                    <p>Ensure the reliability, performance, and security of your databases with our expert Database Administration (DBA) services, tailored to meet your business's specific needs.  <br />
                                        <br />
                                        <button style={{ marginTop: "4w" }} onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Unlock the Potential NOW&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Unlock&nbsp;the&nbsp;Potential&nbsp;NOW</span>
                                        </button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Managed-operation-counter'>
                    <div className='MS-counter-heading'>
                        <h3 className='MS-heading'>The Impact We Create, The Results You Can Bank On</h3>
                        <HeadingBottomLine />
                    </div>
                    <div className='MSS-counter-section'>
                        <div className='counter-list'>
                            <div className='counter-div'>
                                <div className='numbers'>{countNumber ? <CountUp duration={5} end={2817100} /> : <span>0</span>} <span>+</span></div>
                                <div className='count-title'>Million events managed per day</div>
                            </div>
                            <div className='counter-div'>
                                <div className='numbers'>{countNumber ? <CountUp duration={5} end={1000} /> : <span>0</span>} <span>+</span></div>
                                <div className='count-title'>Managed Service customer base</div>
                            </div>
                            <div className='counter-div'>
                                <div className='numbers'>{countNumber ? <CountUp duration={5} end={1000} /> : <span>0</span>} <span>+</span></div>
                                <div className='count-title'>Managed firewalls</div>
                            </div>
                            <div className='counter-div'>
                                <div className='numbers'>{countNumber ? <CountUp duration={5} end={100} /> : <span>0</span>} <span>+</span></div>
                                <div className='count-title'>Managed services AD</div>
                            </div>
                            <div className='counter-div'>
                                <div className='numbers'><CountUp duration={5} end={100} />  <span>+</span></div>
                                <div className='count-title'></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="resource-section">
                    <div className='resource-container'>
                        <div className="heading">
                            <h3 className='MS-heading'>Want To Free Up Your Resources? We're Handing You That Advantage</h3>

                        </div>
                        <div className="list-of-resource">
                            <div className='parent-center-img'>
                                <div className='img-div'>
                                    <img src={resource_img} alt="Resource img" />
                                </div>
                                <div className='card-div'>In house Managed service domain expertise </div>
                                <div className='card-div'>Dedicated and on demand support</div>
                                <div className='card-div'>Measurable, simple, transparent deliverables</div>
                                <div className='card-div'>Best of breed Indigenous solutions</div>
                                <div className='card-div'>Tailored made Managed service offerings </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Success-stories'>
                    <div className='stories-container'>
                        <div className="heading">
                            <h3 className='MS-heading'>Building Success Stories, Beyond Solutions</h3>

                        </div>
                        <div className='casee-study-list'>
                            <div className='list-container'>
                                <ul>

                                    <li id="1"
                                        onClick={() => handleOpen(1)} className='case-study-item'>
                                        <SparklesPreview2 mainDivClass={"case-item-head"} className={"list-item-heading"} word={[
                                            {
                                                text: "Maharashtra",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Industrial",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Development",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Corporation",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "(MIDC)",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                        ]} />
                                        <p className='case-subtitle'>ESDS revolutionizes application management for Maharashtra Industrial Development Corporation (MIDC) with the ePass Portal. </p>
                                        <div className='arrow-icon'>
                                            <GoArrowUpRight />
                                        </div>

                                    </li>
                                    <li id="2"
                                        onClick={() => handleOpen(2)} className='case-study-item'>
                                        <SparklesPreview2 mainDivClass={"case-item-head"} className={"list-item-heading"} word={[
                                            {
                                                text: "Maharashtra",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "State",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Election",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Commission",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },

                                        ]} />
                                        <p className='case-subtitle'>The State election commission trusts ESDS’ eNlight Cloud platform to ensure minimal downtime during peak traffic hours.</p>
                                        <div className='arrow-icon'>
                                            <GoArrowUpRight />
                                        </div>
                                    </li>
                                    <li id="3"
                                        onClick={() => handleOpen(3)} className='case-study-item'>
                                        <SparklesPreview2 mainDivClass={"case-item-head"} className={"list-item-heading"} word={[
                                            {
                                                text: "Janapriya",
                                                class: "heading-word",
                                                className: "inline-block case-study-char"
                                            },
                                            {
                                                text: "Engineers",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Syndicate",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Private",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                            {
                                                text: "Limited",
                                                class: "heading-word",
                                                className: "inline-block oneB-indian-touching-char"
                                            },
                                        ]} />
                                        <p className='case-subtitle'>Janapriya achieves higher ROI by migrating their legacy applications on ESDS’s SAP HANA community cloud.</p>
                                        <div className='arrow-icon'>
                                            <GoArrowUpRight />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="manageService"></SuccessStories>
                    </div>
                </section>
                <Partner title="Building Trust Across The Board " logosArray={logos} />
                <Topsection question={"Ready To Experience A Similar Transformation In Your Business?"} answers={"Start building your Success story here."} CTA={"Sign Up Now"} color={"#000819"} />
                <FooterFinal BgColor={"#000819"} />
            </ReactLenis>
        </div>
    )
}
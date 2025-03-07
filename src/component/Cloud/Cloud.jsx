import gsap from 'gsap'
import parallex_bg from '../../images/cloud/bg_parallex.png'
import './Cloud.css'
import React, { useState } from 'react';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import { useEffect, useLayoutEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Private from '../../images/cloud/Private.svg'
import Enterprise from '../../images/cloud/Enterprize Cloud.jpg'
import BFSI from '../../images/cloud/BFSI Community Cloud.jpg'
import Government from '../../images/cloud/Gov. Community Cloud.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from '../Header/Header'
import { AccordianSection } from './AccordianSection.jsx';
import India_text from '../../images/cloud/india text.svg'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
import cloudsection_two from '../../images/cloud/cloudsection-two.png'
import cloud_thrid from '../../images/cloud/cloud-third.jpg'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading'
import { GoArrowUpRight } from "react-icons/go";
import Partner from '../Partner/Partner'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InnerPageLoader from '../Loader/InnerPageLoader.jsx';
import FooterFinal from '../FinalFooter/FooterFinal'
import Topsection from '../FinalFooter/Topsection'
import logo1 from '../../images/cloud/logo1.png'
import logo2 from '../../images/cloud/logo2.png'
import logo3 from '../../images/cloud/logo3.png'
import logo4 from '../../images/cloud/logo4.png'
import logo5 from '../../images/cloud/logo5.png'
import Loader from '../Loader/Loader'
import SuccessStories from '../Case studt pop-up/SuccessStories'
import MobileNavbar from '../Navbar/MonileNavbar';
import { useDispatch, useSelector } from 'react-redux'
// import AccordianSection from './AccordianSection.jsx';

// import logo1 from '../../images/cloud/logo1.png'
export default function Cloud() {

    let logos = [logo1, logo2, logo3, logo4, logo5]
    let { cloud_name } = useParams()
    let dispatch = useDispatch()
    const demoState = useSelector(state => state.DemoState);
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 500) {
                if(document.getElementById("scroll-down")) {
                    document.getElementById("scroll-down").style.display = "none"
                }
            } else {
                if(document.getElementById("scroll-down")) {
                document.getElementById("scroll-down").style.display = "block"
                }
            }
        })

    }, [])
  
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
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin);
        const mm = gsap.matchMedia();

        if (cloud_name == "privatecloud") {

            gsap.to(window, {
                scrollTo: "#privatecloud",
                duration: 1,
                ease: "power2.inOut"
            });
        }

        else if (cloud_name == "Enterprisecloud") {
            let targetposition = document.getElementById("privatecloud").offsetHeight * 2
            gsap.to(window, {
                scrollTo: targetposition,
                duration: 1,
                ease: "power2.inOut"
            });
        }
        else if (cloud_name == "BFSICloud") {
            let targetposition = document.getElementById("second-slide").offsetHeight * 12
            gsap.to(window, {
                scrollTo: targetposition,
                duration: 1,
                ease: "power2.inOut"
            });
        }
        else if (cloud_name == "GovernmentCloud") {
            let targetposition = document.getElementById("second-slide").offsetHeight * 13
            gsap.to(window, {
                scrollTo: targetposition,
                duration: 1,
                ease: "power2.inOut"
            });
        } else {
            gsap.to(window, {
                scrollTo: 0,
                duration: 1,
                ease: "power2.inOut"
            });
        }
        // Define your media queries and corresponding animations
        mm.add("(min-width: 1199px)", () => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".Cloud-banner",
                    start: "top top",
                    end: () => innerHeight * 2,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    // markers: true,

                    onLeave: () => {
                        document.querySelector(".Cloud-banner").style.position = "relative"
                        document.querySelector(".starting-parallex").style.opacity = 0;
                        document.querySelector(".starting-parallex").style.zIndex = -2;
                    },
                    onEnterBack: () => {
                        document.querySelector(".starting-parallex").style.opacity = 1;
                        document.querySelector(".starting-parallex").style.zIndex = 2;
                    }

                },

            });

            t1.to(".overlay-text", { background: "#00000000", ease: "power1.inOut", duration: 3 }, "key")
                .to(".overlay-text .Cloud-banner-center-text", { scale: 0.6, ease: "power1.inOut", duration: 4 }, "key")
                .to('.parallex-img', { scale: 1.1, x: "-1.5vw", z: "5vw", ease: "power1.inOut", duration: 3, }, "key")
                .to(".overlay-text .Cloud-banner-center-text", { scale: 0.1, opacity: -1, ease: "power1.inOut", duration: 2 }, "key1")
                .to('.parallex-img', { scale: 2.2, z: "22vw", background: "#00000000", ease: "power1.inOut", duration: 3, }, "key1");

            document.querySelectorAll(".cloud-heading").forEach(element => {
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
                })
            });



            document.querySelectorAll(".slide").forEach((ele) => {
                let t2 = gsap.timeline(

                    {


                        scrollTrigger: {
                            trigger: ele,
                            start: "top center",
                            end: "top+=200 center",
                            // markers : true,
                            onEnter: () => {
                                ele.querySelector(".slide-innerdiv").style.setProperty('--before-opacity', 1);
                                ele.querySelector(".slide-innerdiv").style.setProperty('--after-opacity', 1);
                                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                let interval = null;


                                const target_element = ele.querySelector("h3");
                                let iteration = 0;
                                const interval1 = setInterval(() => {
                                    target_element.innerText = target_element.innerText
                                        .split("")
                                        .map((letter, index) => {
                                            if (index < iteration) {
                                                return target_element.dataset.value[index];
                                            }

                                            return letters[Math.floor(Math.random() * 26)];
                                        })
                                        .join("");

                                    if (iteration >= target_element.dataset.value.length) {
                                        clearInterval(interval1);
                                    }
                                    iteration += 1 / 4;
                                }, 10);

                            },
                            onLeaveBack: () => {
                                ele.querySelector(".slide-innerdiv").style.setProperty('--before-opacity', 0);
                                ele.querySelector(".slide-innerdiv").style.setProperty('--after-opacity', 0);
                            }
                        },

                    })

                return () => {
                    if (t2) t2.kill()

                }
            })

            gsap.fromTo(".C-banner-center-char", { y: -20, opacity: 0, skewY: 8, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.05, duration: 0.8, ease: "power1.inOut" })
            gsap.fromTo(".banner-center-subtitle-char", { y: -20, opacity: 0, skewY: 8, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.03, duration: 0.5, ease: "power1.inOut" })


            return () => {
                if (t1) t1.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };


        });


        mm.add("(max-width : 1199px)", () => {
            document.querySelectorAll(".cloud-heading").forEach(element => {
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
                })
            });

            document.querySelectorAll(".slide").forEach((ele) => {
                let t2 = gsap.timeline(

                    {


                        scrollTrigger: {
                            trigger: ele,
                            start: "top center",
                            end: "top+=200 center",
                            // markers : true,
                            onEnter: () => {
                                ele.querySelector(".slide-innerdiv").style.setProperty('--before-opacity', 1);
                                ele.querySelector(".slide-innerdiv").style.setProperty('--after-opacity', 1);
                                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                let interval = null;


                                const target_element = ele.querySelector("h3");
                                let iteration = 0;
                                const interval1 = setInterval(() => {
                                    target_element.innerText = target_element.innerText
                                        .split("")
                                        .map((letter, index) => {
                                            if (index < iteration) {
                                                return target_element.dataset.value[index];
                                            }

                                            return letters[Math.floor(Math.random() * 26)];
                                        })
                                        .join("");

                                    if (iteration >= target_element.dataset.value.length) {
                                        clearInterval(interval1);
                                    }
                                    iteration += 1 / 4;
                                }, 10);

                            },
                            onLeaveBack: () => {
                                ele.querySelector(".slide-innerdiv").style.setProperty('--before-opacity', 0);
                                ele.querySelector(".slide-innerdiv").style.setProperty('--after-opacity', 0);
                            }
                        },

                    })

                return () => {
                    if (t2) t2.kill()

                }
            })


            gsap.fromTo(".C-banner-center-char", { y: -20, opacity: 0, skewY: 8, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.05, duration: 0.8, ease: "power1.inOut" })
            gsap.fromTo(".banner-center-subtitle-char", { y: -20, opacity: 0, skewY: 8, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.03, duration: 0.5, ease: "power1.inOut" })

        })

        // Clean up matchMedia when component unmounts
        return () => {
            mm.revert();
        };
    }, []);

    const navigate = useNavigate()
    const contactNavigation = () => {
        navigate('/contact-us');
    };
    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
    return (
        <div className='Cloud'>
            <MobileNavbar />
            {/* <InnerPageLoader /> */}
            <ReactLenis
                root = {demoState.navbar ? false : true}
                options={{
                    duration: 1.8,
                    smoothWheel: true,
                    easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 4)),

                }}

            >
        
                <Header />
               
                 <ScrollIndicator /> 
                <div className="starting-parallex">
                    <div className="parallex-img">
                        <img src={parallex_bg} alt="parallex-img" />

                    </div>
                    <div className="overlay-text">
                        <div className='Cloud-banner-center-text cloudPage'>
                            <div className='cloudText'>
                                <SparklesPreview2 className={"C-banner-center"} word={[
                                    {
                                        text: "Bold",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },
                                    {
                                        text: "By",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },
                                    {
                                        text: "Vision,",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },
                                    {
                                        text: "Limited",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },
                                    {
                                        text: "By",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },
                                    {
                                        text: "Compute",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },
                                    {
                                        text: "Resources?",
                                        class: "C-banner-center-word",
                                        className: "inline-block C-banner-center-char"
                                    },

                                ]} />
                                <SparklesPreview2 mainDivClass={"parent-of-subtitle"} className={"C-banner-center-subtitle"} word={[
                                    {
                                        text: "Our",
                                        class: "banner-center-word-subtitle",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "patented",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "cloud",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "scales",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "with",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "your",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "ambition",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "and",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "adapts",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "to",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "your",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "business",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                    {
                                        text: "needs",
                                        class: "banner-center-word",
                                        className: "inline-block banner-center-subtitle-char"
                                    },
                                ]} />
                            </div>

                        </div>
                    </div>
                </div>

                <section id='Cloud-banner' className="Cloud-banner">
                    <div className="cloud-inner-div">
                        <div className="cloud-banner-text">
                            <h1 className='head-text' >Handing The Power Of Indian Cloud In Your Hands</h1>

                            <div className='india-text'><img src={India_text} alt="Indian text" /></div>
                            <div className='cloud-banner-cta'>

                                <button onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="cloud-colocation">
                    <div className="cloud-innerdiv">
                        <div className='Description'>
                            <h3 className='cloud-heading'>Why India Need Its Own Cloud?</h3>
                            <ul>
                                <li><span>National data security compromised</span> by foreign cloud hosting service providers.</li>
                                <li><span>Vulnerability to cyber threats</span> and espionage from foreign cloud hosting service providers.</li>
                                <li><span>Regulatory challenges</span> and compliance issues with international data laws.</li>
                                <li><span>Economic growth hindered</span> due to reliance on offshore cloud hosting service providers.</li>
                                <li><span>Increased costs and financial burdens</span> from offshore data management.</li>
                                <li><span>Invasion of privacy rights by misuse of data</span> by foreign cloud hosting service providers.</li>
                                {/* <li>Advanced Laser-Based Very Early Smoke Detection System (Vesda) Continuously Monitors The Data Center Air.</li> */}
                            </ul>
                        </div>
                        <div className='cloud-colocation-img'>
                            <div className='radial-gradient'></div>
                            <div>
                                <img src={cloudsection_two} alt='Indian cloud' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cloud2-colocation">
                    <div className="cloud2-innerdiv">
                        <div className='cloud2-colocation-img'>
                            <div className='radial-gradient'></div>
                            <div>
                                <img src={cloud_thrid} alt='eNlight cloud' />
                            </div>
                        </div>
                        <div className='Description'>
                            <h3 className='cloud-heading'>eNlight Cloud - India's Very Own Cloud </h3>


                            <p>
                                The Cloud revolution in India was ignited by ESDS in 2010. Today we are accelerating India's digital growth with our very own <span>eNlight Cloud</span>

                                . Setting a benchmark with our
                                <span> triple-patented auto vertical scaling technology </span>
                                , we are recognized in India, UK, and US.

                                Forget the limitations of horizontal scaling, eNlight Cloud's patented technology
                                <span> dynamically adjusts resources </span>
                                in real-time,
                                <span> optimizing your cloud efficiency by over 50%. </span>
                                Stop wasting resources and start
                                <span> paying only for what you use. </span>


                                <span>Modernize your IT infrastructure </span> with seamless migration and integrate eNlight Cloud with your existing systems. Enjoy peace of mind of industry-leading security features, including Bring Your Own Encryption for
                                <span> ultimate data control. </span> Go beyond the ordinary with eNlight Cloud, offering dedicated industry specific needs, like the
                                <span> BFSI, Enterprise, Government Community Cloud. </span>
                            </p>
                        </div>
                    </div>
                </section>
                <section id='privatecloud' className='Cloud-types'>
                    <div className="heading">
                        <h3 className='cloud-heading'>
                            Your Business Needs Evolve, Our Cloud Adapts
                        </h3>

                    </div>
                    <div className='slider-list'>
                        <div id='first-slide' className="slide">
                            <div className="slide-innerdiv">
                                <div className="description">
                                    <h3 data-value="Private Cloud" className='letter-change'>Private Cloud</h3>
                                    <p>
                                        Explore your dedicated IT sanctuary with Private Cloud hosting services, where secure and scalable infrastructure meets on-demand control, unparalleled performance & supreme efficiency                                </p>
                                    <div className='cloud-type-btn'>
                                       <Link to={'/private-cloud-services'}><button className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                                        </button></Link> 
                                    </div>

                                    <div className=" button-sparkle-line relative">
                                        <div style={{ left: "0", width: "100%" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
                                        <div style={{ width: "100%", left: 0 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                    </div>
                                </div>
                                <div className="slide-img">
                                    <img src={Private} alt="private cloud" />
                                </div>
                            </div>
                        </div>
                        <div id='second-slide' className="slide">
                            <div className="slide-innerdiv">
                                <div className="slide-img">
                                    <img src={Enterprise} alt="Enterprise cloud" />
                                </div>
                                <div className="description">
                                    <h3 data-value="Enterprise Community Cloud">Enterprise Community Cloud</h3>
                                    <p>
                                        Experience a powerful enterprise community cloud platform trusted by 600 + enterprises for seamless orchestration of agility, robust security measures, and precise cost control.
                                    </p>
                                    <div className='cloud-type-btn'>
                                       <Link to={'/enterprise-cloud-services'}><button className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                                        </button></Link> 
                                    </div>

                                    <div className=" button-sparkle-line relative">
                                        <div style={{ left: "0", width: "100%" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
                                        <div style={{ width: "100%", left: 0 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id='third-slidee' className="slide">
                            <div className="slide-innerdiv">
                                <div className="description">
                                    <h3 data-value="BFSI Community Cloud">BFSI Community cloud</h3>
                                    <p>
                                        Leverage India's most advanced & trusted BFSI CC, hosting India’s 450 + banks offering comprehensive core banking, managed disaster recovery (DR), and industry-leading security solutions.
                                    </p>


                                    <div className='cloud-type-btn'>
                                       <Link to={'/bfsi-cloud-services'}><button className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                                        </button></Link> 
                                    </div>

                                    <div className=" button-sparkle-line relative">
                                        <div style={{ left: "0", width: "100%" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
                                        <div style={{ width: "100%", left: 0 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                    </div>

                                </div>
                                <div className="slide-img">
                                    <img src={BFSI} alt="BFSI cloud" />
                                </div>
                            </div>
                        </div>
                        <div id='fourth-slide' className="slide">
                            <div className="slide-innerdiv">
                                <div className="slide-img">
                                    <img src={Government} alt="Government cloud" />
                                </div>
                                <div className="description">
                                    <h3 data-value="Government Community Cloud">Government <br /> Community Cloud</h3>
                                    <p>
                                        Empowering millions of Indian citizens nationwide with a MeitY empaneled and STQC-compliant Cloud hosting service platform that addresses large scale government’s needs.
                                    </p>
                                    <div className='cloud-type-btn'>
                                       <Link to={'/government-cloud-services'}> <button onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                                            <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                                        </button></Link>
                                    </div>

                                    <div className=" button-sparkle-line relative">
                                        <div style={{ left: "0", width: "100%" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
                                        <div style={{ width: "100%", left: 0 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='nation-connect'>
                    <div className="heading">
                        <h3 className='cloud-heading'>A Nationwide Connect That Grows On Our Cloud </h3>
                    </div>
                    <div className='point-details'>
                        <ul>
                            <li><span>India’s single largest database </span>
                                sizing more than 500 TB is hosted on the ESDS cloud hosting service platform.</li>
                            <li> ESDS’ GCC powers <span>10 million+ smart meters</span>  which account to <span>95% of India's smart meters live.</span></li>
                            <li> India's top government program, disbursing <span>₹3217 billion </span> in loans to <span>600 million Indians</span> , runs on the secure ESDS cloud platform.</li>
                            <li>The revolutionary iPAS project, transforms the lives of over <span>20 million+ Indians,</span> & manages <span>9,392 projects annually.</span></li>
                            <li>ESDS empowers <span>2000 + organizations</span>  on eNlight Cloud, fostering the Make in India innovation.</li>
                            <li> <span>More than 450 banks in India</span>  call ESDS Cloud home, making us a force in India’s robust financial ecosystem.</li>
                            <li>Hosting <span>14+ smart cities</span> on our cloud hosting service platform, we accelerate India's digital transformation initiatives.</li>
                        </ul>
                    </div>
                </section>
                <section className='cloud-Success-stories'>
                    <div className='stories-container'>
                        <div className="heading">
                            <h3 className='cloud-heading'>Building Success Stories, All Over A Powerful Cloud </h3>

                        </div>
                        <div className='casee-study-list'>
                            <div className='list-container'>
                                <ul>
                                    <a>
                                        <li id="1" className='case-study-item' onClick={() => handleOpen(1)}>
                                            <p>MUDRA Chooses ESDS for Exclusive Security Solution & Fast Track Software Development</p>
                                            <div className='arrow-icon'>
                                                <GoArrowUpRight />
                                            </div>
                                        </li>
                                    </a>
                                    <a>
                                        <li id="2" className='case-study-item' onClick={() => handleOpen(2)}>
                                            <p>Govt. of Maharashtra Trusts ESDS to Digitalize the Registration and Land Record Processes</p>
                                            <div className='arrow-icon'>
                                                <GoArrowUpRight />
                                            </div>
                                        </li>
                                    </a>
                                    <a>

                                        <li id="3" className='case-study-item' onClick={() => handleOpen(3)}>
                                            <p>ESDS helps Vadilal churn out India's favorite ice-cream more efficiently on ESDS Cloud hosting services</p>
                                            <div className='arrow-icon'>
                                                <GoArrowUpRight />
                                            </div>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                            <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="cloud" ></SuccessStories>
                </section>
                <section className='accordina-section'>
                    <div className='complaince-heading'>
                        <h4>Complaince</h4>
                    </div>
                      <AccordianSection />
                </section>
                <Partner color={"#000"} title="Building Trust Across The Board " logosArray={logos} />
                <Topsection question={"Your Business's Transformation Is Still Waiting To Be Explored"} answers={"Let's take on this journey of growth together!"} />
                <FooterFinal BgColor={"#000"} />

            </ReactLenis>
        </div>
    )
}
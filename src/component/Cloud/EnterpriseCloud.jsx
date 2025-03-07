import HeadingBottomLine from '../../components/ui/HeadingBottomLine'
import technology from '../../images/cloud/Enterprise/technology.png'
import { GoArrowUpRight } from "react-icons/go";
import './EnterpriseCloud.css'
// import industrial_first_img from '../../images/cloud/Enterprise/first-img.png'
// import industrial_second_img from '../../images/cloud/Enterprise/second-img.png'
import cloudservicesimg from '../../images/cloud/Enterprise/cloudservicesimg.png'
import middle_img from '../../images/colocation/colocation-img/second.jpg'
import banner_video from '../../images/cloud/Enterprise/enterprise-banner.mp4'
import Header from '../Header/Header';
import partner1 from '../../images/partners/partner1.png'
import partner2 from '../../images/partners/partner2.png'
import digital_img from '../../images/cloud/Enterprise/digital-img.png'
import partner3 from '../../images/partners/partner3.png'
import partner4 from '../../images/partners/partner4.png'
import SuccessStories from '../Case studt pop-up/SuccessStories';
import partner5 from '../../images/partners/partner5.png'
import HeadingAnimation from './HeadingAnimation';
import Fragmnetal_img from '../../images/cloud/Enterprise/fragmental-img.svg'
import partner6 from '../../images/partners/partner6.png'
import MTR from '../../images/cloud/Enterprise/MTR-logo.png'
import vadila from '../../images/cloud/Enterprise/vadila_logo.png'
import alicon from '../../images/cloud/Enterprise/alicon_logo.png'
import partner7 from '../../images/partners/partner7.png'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Link, useNavigate, useParams } from 'react-router-dom';
import FooterFinal from '../FinalFooter/FooterFinal';
import ScrollIndicator from '../../components/ui/ScrollIndicator';
import Partner from '../Partner/Partner';
import MobileNavbar from '../Navbar/MonileNavbar';
import React, { useEffect, useLayoutEffect } from 'react';
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import { useDispatch } from 'react-redux';
import { ScrollToPlugin } from 'gsap/all';
import gsap from 'gsap';
import { motion } from "framer-motion";

export default function EnterpriesCloud() {
    let logos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7]
    let dispatch = useDispatch()
    
    const [caseStudyId, setCaseStudyId] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power2.inOut"
        });
    },[])
    const handleOpen  = (id) => {
        console.log('link', id)
        setCaseStudyId(id)
        setOpen(true);
    };
    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
    return(
        <div>
            <ReactLenis root options={{ smoothWheel: true, duration: 4, easing: (t) => Math.min(1.5, 1.001 - Math.pow(2, -14 * t)), touchMultiplier: 2,smoothTouch : true, smooth : true  }}>

           
              <MobileNavbar />
              <Header />
             {window.innerWidth >= 1024 ? <ScrollIndicator /> : ""}
             <section className='enterprise-banner'>
                <div className="enterprise-banner-video">
                <video autoPlay loop muted >
                            <source src={banner_video} type="video/mp4" />
                            Your browser does not support the video tag.
                </video>
                </div>
                <div className='innerdiv'>
                {/* <HeadingAnimation CharArray={[{ text: "Unlock", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "your", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "enterprise's", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "untapped", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "potential", class: "top-heading-word", className: "inline-block ECC_head_char " }, { text: "with", class: "top-heading-word", className: "inline-block ECC_head_char " }, { text: "seamless", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "resource", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "optimization", class: "top-heading-word", className: "inline-block ECC_head_char " }, { text: "on", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "India’s", class: "top-heading-word", className: "inline-block ECC_head_char " }, { text: "#1", class: "top-heading-word", className: "inline-block ECC_head_char" }, { text: "Enterprise", class: "top-heading-word", className: "inline-block ECC_head_char" },{ text: "Community", class: "top-heading-word", className: "inline-block ECC_head_char" },{ text: "Cloud", class: "top-heading-word", className: "inline-block ECC_head_char" }]} /> */}
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                           Unlock your enterprise's untapped potential with seamless resource optimization on India’s #1 Enterprise Community Cloud
                        </motion.h1>

                  <Link to={"/contact-us"} className='enterprise-banner-cta'>
                  <button className="CTA-button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                    </button>
                  </Link>  
                </div>
            </section>

            <section className='why-enterprise'>
                <div className='innerdiv-why-enterprise'>
                    <div className="heading">
                        <h2>Is your enterprise struggling with fragmented technical solutions that don’t meet your business needs?</h2>
                        <HeadingBottomLine />
                    </div>
                   <div className="fragmental-technical-section">
                    <div className='description-text'>
                        <p>Imagine this: your enterprise is set to build a car, but instead of a fully assembled vehicle, you’re handed only the wheels, a steering wheel, and perhaps an engine. Each part is essential, yet isolated, requiring time and expertise to fit together. This is the reality with many cloud providers today, who offer only fragmented components—whether databases, servers, or licenses—leaving enterprises to bridge the gaps on their own.
                        At <span>ESDS</span>, we don’t just hand over individual parts and expect you to build the journey from scratch. We deliver a complete vehicle - a <span>fully integrated solution</span> that addresses your business's unique needs, ready to drive you toward digital transformation without the usual roadblocks. Our <span>Enterprise Community Cloud (ECC)</span> is designed to be that vehicle, the one that brings all pieces together into a cohesive, powerful engine for growth, freeing you from assembling and letting you focus on the journey ahead.</p>
                    </div>
                    <div className='fragmental-technical-img'>
                        <img src={Fragmnetal_img} alt="Fragmented technical solutions" />
                    </div>
                   </div>
                  
                </div>
            </section>

            <section className='enterprise-unrealized'>
                <div className="left-img">
                    <img src={technology} alt="technology enterprise" />
                </div>
                <div className='headline-para'>
                        <div className="heading">
                            <h3>Is your enterprise ready to discover its unrealized potential within current operations?</h3>
                            <HeadingBottomLine />
                        </div>
                    <p>More than <span>600 enterprises</span> are growing on <span>ESDS cloud</span>  and have achieved a <span>cost optimization</span> ranging from <span>20% to 25%</span>.</p>
                    <Link to={"/contact-us"}>
                  <button className="CTA-button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Get in Touch&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;in&nbsp;Touch&nbsp;</span>
                    </button>
                  </Link>  
                </div>
            </section>

            <section className='digital-enterprise'>
                <div className="heading"> 
                    <h3>Will your enterprise be next?</h3>
                    <h4>We are making a transformative impact on India’s digital enterprise landscape-are you ready to transform your enterprise?</h4>
                </div>
                <div className='digital-enterprise-section'>
                    <div className="left-img">
                        <img src={digital_img} alt="Digital Enterprise" />
                    </div>
                    <div className='list-of-digital'>
                        <ul>
                            <li>One of India’s largest aluminium die manufacturer <span>Alicon Castalloy reduced their OPEX by 30-40</span> after migrating to <span>ESDS Cloud</span>.</li>
                            <li><span>MTR</span>, a leading brand in Indian cuisine, achieves <span>savings of 20-30% in computing costs</span> and time by utilizing <span>ESDS's pay-per-use model</span>.</li>
                            <li>ESDS assists India's favourite ice cream manufacturer <span>Vadilal to achieve 0 network connection</span> issues on ESDS Cloud.</li>
                            <li><span>Surfa Coats</span>, India's leading coatings manufacturer, achieved a <span>remarkable 0 downtime with ESDS</span></li>
                            <li><span>Shriram Properties</span>, one of the leading real estate developers, enhanced their <span>CRM and internal processes on ESDS cloud</span>, resulting in a <span>30% reduction in IT spending</span></li>
                            <li><span>Symphony</span>, one of the leading providers of kitchen solutions, achieved a <span>remarkable 100-fold increase in reporting speed</span>, significantly enhancing their sales competitiveness.</li>
                            <li><span>K.B.B Nuts</span>, a leading exporter of California almonds in India, <span>migrated to the ESDS Cloud to extend their global presence.</span></li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className='industrial-benefits'>
                
                <div className='industries-enterprise'>
                    <div className="heading">
                        <h3>Discover how leading enterprises have experienced real business growth with ESDS ECC</h3>
                        <div style={{position: "absolute", bottom : 0, left : 0, width : "100%", display : "flex", justifyContent : "center", alignItems : "center" }}  className=" particle-line relative">
        <div style={{width : "35vw" , height : "8vh", position : "absolute", borderRadius : "50%", left : "18%", background : "linear-gradient(94deg, rgba(0, 230, 255, 1) 13%, rgba(0, 102, 255, 1) 100%)", filter : "blur(60px)"}} className="absolute inset-x-60  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
        <div style={{  width: "100%",  left : "0", height: "1px"}} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
      </div>
                    </div>
                    <ul className='case-study-box'>
                        <div><li id="1" className='case-study-item' onClick={() => handleOpen(1)}><span><img src={MTR} alt="MTR logo" /></span>MTR Foods: The client is an almost 90-year-old Indian heritage brand and a popular.</li><GoArrowUpRight /></div>
                       <div><li id="2" className='case-study-item' onClick={() => handleOpen(2)}><span><img src={vadila} alt="vadila logo" /></span>Vadilal Industries: From selling sodas in 1907, Vadilal has travelled through four.</li><GoArrowUpRight /></div>
                        <div><li id="3" className='case-study-item' onClick={() => handleOpen(3)}><span><img src={alicon} alt="Alicon logo" /></span>Alicon CastAlloy: True to the origins of their name (Aluminium + Icon), Alicon CastAlloy.</li><GoArrowUpRight /></div>
                    </ul>
                </div>
                 <div className='three-img'>
                 
                 <img src={cloudservicesimg} alt="Cloud serivces" />
                </div>   
            </section>
            <SuccessStories isOpen={open} onClose={handleClose} caseStudyId={caseStudyId} type="enterprise_cloud" ></SuccessStories>
            <Partner color={"#000"} title={"Customer Success"} logosArray={logos} />
           <section className='question-answer-section'>
                <p>A thriving community of 600 + enterprises are leveraging ESDS ECC for their transformational journey</p>
                <Link to={"/contact-us"}>{window.innerWidth < 400 ? <button className='mobile-cta'>Are you ready to witness your enterprise transformation?</button> :   <button className="CTA-button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Are you ready to witness your enterprise transformation ?&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Are&nbsp;you&nbsp;ready&nbsp;to&nbsp;witness&nbsp;your&nbsp;enterprise&nbsp;transformation&nbsp;?&nbsp;</span>
                    </button>}</Link>
           </section>
            <FooterFinal BgColor={"#000"} />

            </ReactLenis>

        </div>
    )
}
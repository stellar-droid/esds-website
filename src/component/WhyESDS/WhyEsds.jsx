import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import circle_why from '../../images/why-circle.svg'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading.jsx'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import slide1 from '../../images/Why-ESDS-Page/slide-1.jpg'
import slide2 from '../../images/Why-ESDS-Page/slide-2.jpg'
import slide3 from '../../images/Why-ESDS-Page/slide-3.jpg'
import slide4 from '../../images/Why-ESDS-Page/slide-4.jpg'
import InnerPageLoader from '../Loader/InnerPageLoader.jsx'
import slide5 from '../../images/Why-ESDS-Page/slide-5.jpg'
import WhyESDSServer from './WhyESDSServer.jsx'
import './WhyEsds.css'
import ScrollIndicator from '../../components/ui/ScrollIndicator.jsx'
import Header from '../Header/Header.jsx'
import Topsection from '../FinalFooter/Topsection.jsx'
import FooterFinal from '../FinalFooter/FooterFinal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import MobileNavbar from '../Navbar/MonileNavbar.jsx'
import { motion } from "framer-motion";


export default function Whyesds() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
},[])

const demoState = useSelector(state => state.DemoState);

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1199px)", () => {
    gsap.fromTo(".why-char", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})
    gsap.fromTo(".why-char1", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})

      const getStickyBarCenter = () => {
          const sticky_add = document.querySelector(".sticky-and");
          return sticky_add.offsetTop + sticky_add.offsetHeight / 2;
      };

      // ScrollTrigger for monopoly rows
      document.querySelectorAll(".monopoly-row").forEach(row => {
          ScrollTrigger.create({
              trigger: row,
              start: () => `top+=${getStickyBarCenter() - 350} center`,
              end: () => `top+=${getStickyBarCenter() - 250} center`,
              snap : 1/ row.length - 1,
              scrub: true,
              onUpdate: (self) => {
                  const progress = self.progress;
                  const maxGap = window.innerWidth < 900 ? 10 : 22;
                  const minGap = window.innerWidth < 900 ? 0.5 : 0;
                  const currentGap = minGap + (maxGap - minGap) * progress;
                  row.style.gap = `${currentGap}vw`;
                  
              },
              onEnter: () => {
                  row.style.opacity = "0.5";

              },
              onEnterBack: () => {
                  row.style.opacity = "1";
              }
          });
      });

      // Timeline for innovation section
      const t1 = gsap.timeline({
          scrollTrigger: {
              trigger: "#innovation",
              start: "top top",
              end: () => innerHeight * 3,
              pin: true,
              scrub: true
          }
      });

      t1.to(".innovation-char1", { opacity: 1, stagger: 0.01, transform: "none", duration: 0.5 }, "key2")
        .to(".innovation-char1", { opacity: 0, stagger: 0.01, transform: "none", duration: 0.5 }, "key3")
        .to(".empower-char1", { opacity: 1, stagger: 0.01, transform: "none", duration: 0.5 }, "key3");

      document.querySelectorAll(".why-slide").forEach(slide => {
        let img_div = slide.querySelector(".slide-img")
          const t2 = gsap.timeline({
              scrollTrigger: {
                  trigger: slide,
                  start: "top top",
                  
                  pin: true,
                  pinSpacing: false,
                  scrub: true
              }
          });
          t2.fromTo(slide, { scale: 1, y: 0, rotate : 0 }, { scale: 0.8, y: "-5vw",},"key");
          t2.fromTo(img_div , { scale: 1, rotate : 0 }, { scale: 1.1, rotate: -5,},"key");


          return () => {
            if(t2) t2.kill()
          }
      });

      return () => {
        if(t1) t1.kill()
          // if(t3) t3.kill()
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };

  })
  mm.add("(max-width: 1199px)", () => {
    gsap.fromTo(".why-char", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})
    gsap.fromTo(".why-char1", { y : -20, opacity : 0, skewY : 8,}, {opacity: 1.5, y : 0, skewY : 0, stagger : 0.05, duration: 0.8, ease : "power1.inOut"})

  


  })
  return () => {
    mm.revert();
  };

 
}, []);


  useEffect(() => {
      let mono = document.querySelectorAll(".monopoly-char1")
        mono.forEach((even) => {
           if(even.innerHTML== " ") {
              even.style.width = "1vw"
           }
        })
  },[])

    return (
        <div>
          <MobileNavbar />
        <ReactLenis
        root = {demoState.navbar ? false : true}
        options={{
          duration: 2.5,
          smoothWheel: true,
          easing : (t) => Math.min(1,  1 - Math.pow(1 - t, 4)),
          
        }}
        
      >
       <ScrollIndicator />
       {/* <InnerPageLoader /> */}
        <Header />
<div  id="why-esds" className="Why-esds">
         {window.innerWidth >= 1024 ? <WhyESDSServer /> : ""}
          <div className="sticky-and"><div></div></div>
        </div>
        <div id="why-heading" className="why-heading">
        
          <div className='heading'>
         
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                
              >
               If you're curious, <span>WHY</span> choose <span>ESDS?</span> You are at the <span>RIGHT</span> place
              </motion.h1>
          </div>
       
          <div className="subtitle-why-esds">
            <SparklesPreview2 mainDivClass={"subtitle-div"} className={"why-subtitle"} word={[
              {
                text: "We're ",
                class: "subtitle",
                className: "inline-block why-char1"
              },
              {
                text: "an",
                class: "subtitle",
                className: "inline-block why-char1"
              },
              {
                text: "Indian",
                class: "subtitle",
                className: "inline-block why-char1"
              },
              {
                text: "Innovator",
                class: "subtitle",
                className: "inline-block why-char1"
              },
             
              {
                text: "Challenging",
                class: "subtitle",
                className: "inline-block why-char1"
              },
              {
                text: "the",
                class: "subtitle",
                className: "inline-block why-char1"
              },
              {
                text: "Status",
                class: "subtitle",
                className: "inline-block why-char1"
              },
              {
                text: "quo",
                class: "subtitle",
                className: "inline-block why-char1"
              },
            ]} />
           
         
          </div>
        </div>
        <div id="breaking-monopoly" className="breaking-monopoly">
          <div >
            <SparklesPreview2 mainDivClass={"mono-text1"} rowWrapper={" monopoly-row "} className={"break-monopoly1"} word={[

              {
                text: "Disrupting",
                class: "moving moving-beyond",
                className: "inline-block monopoly-char1"
              },


              {
                text: `Foreign Monopoly`,
                class: "beyond-cloud moving-beyond",
                className: "inline-block monopoly-char1"
              },

            ]} />
            <SparklesPreview2 mainDivClass={"mono-text2"}  rowWrapper={" monopoly-row "} className={"break-monopoly2"} word={[

              {
                text: "Safeguarding data",
                class: " breaking ",
                className: "inline-block monopoly-char1"
              },

              {
                text: "from foreign CSP’s",
                class: "limitation  ",
                className: "inline-block monopoly-char1"
              },

            ]} />
            <SparklesPreview2 mainDivClass={"mono-text3"}  rowWrapper={" monopoly-row "} className={"break-monopoly3"} word={[

              {
                text: "Countering security threats",
                class: "shattering shatt-depend",
                className: "inline-block monopoly-char1"
              },

              {
                text: "from foreign entities",
                class: "dependencies shatt-depend",
                className: "inline-block monopoly-char1"
              },

            ]} />
            <SparklesPreview2 mainDivClass={"mono-text4"}  rowWrapper={" monopoly-row "} className={"break-monopoly4"} word={[

              {
                text: "Breaking free from",
                class: " disrupting disrupting-mono",
                className: "inline-block monopoly-char1"
              },

              {
                text: "offshore management costs",
                class: "foreign-mono disrupting-mono",
                className: "inline-block monopoly-char1"
              },
            ]} />
          </div>
        </div>
        <div id="innovation" className="innovation">
          <SparklesPreview2 mainDivClass={"innovation-heading"} rowWrapper={" inner-div-innovation "} className={"innovation-char"} word={[

            {
              text: "Handing",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },


            {
              text: "the",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },

            {
              text: "Indian",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },
            {
              text: "Innovation",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },
            {
              text: "Advantage",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },
            {
              text: "Into",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },
            {
              text: "Your",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },
            {
              text: "Hands",
              class: "innov-section",
              className: "inline-block innovation-char1"
            },
          ]} />
           <SparklesPreview2 mainDivClass={"empower-heading"} rowWrapper={" inner-div-empower "} className={"empower-char"} word={[

{
  text: "Empowering",
  class: "innov-section",
  className: "inline-block empower-char1"
},


{
  text: "You",
  class: "innov-section",
  className: "inline-block empower-char1"
},

{
  text: "To",
  class: "innov-section",
  className: "inline-block empower-char1"
},
{
  text: "Contribute",
  class: "innov-section",
  className: "inline-block empower-char1"
},
{
  text: "To",
  class: "innov-section",
  className: "inline-block empower-char1"
},
{
  text: "The",
  class: "innov-section",
  className: "inline-block empower-char1"
},
{
  text: "Digital",
  class: "innov-section",
  className: "inline-block empower-char1"
},
{
  text: "Indian",
  class: "innov-section",
  className: "inline-block empower-char1"
},
{
  text: "Revolution",
  class: "innov-section",
  className: "inline-block empower-char1"
},

]} />
        </div>
        <div className="why-vertical-slider">

         
              <div id="why-slide1" className="why-slide">
                
                  <div className="why-slide-img">
                  <div id="why-slide-text" className="why-slide-text">
                    <h2>One stop destination for all your IT needs.</h2>
                  </div> 
                    <img className='slide-img' src={slide1} alt="destination" />
                  </div>
              
              </div>
              <div id="why-slide2" className="why-slide">
            
             
                  <div className="why-slide-img">
                  <div className="why-slide-text">
                    <h2>Offering homegrown ‘Made in India’ solutions </h2>
                  
                  </div>
                    <img className='slide-img' src={slide2} alt="Offering homegrown" />
                  </div>
              </div>
              <div id="why-slide3" className="why-slide">
            
              
                  <div className="why-slide-img">
                  <div className="why-slide-text">
                    <h2>Delivering Customized and Tailored services the way you need them</h2>
                  </div>
                    <img className='slide-img' src={slide3} alt="Delivering Customized" />
                  </div>
              </div>
              <div id="why-slide4" className="why-slide">
            
              
            <div className="why-slide-img">
            <div className="why-slide-text">
              <h2>Innovators of the Triple patented Auto vertical scaling invention </h2>
             
            </div>
              <img className='slide-img' src={slide4} alt="Innovators" />
            </div>
        </div>
        <div id="why-slide5" className="why-slide1">
            
              
            <div className="why-slide-img">
            <div className="why-slide-text">
              <h2>A MeitY empanelled, complaint & trusted service provider </h2>
             
            </div>
              <img className='slide-img' src={slide5} alt="MeitY empanelled" />
            </div>
        </div>
     
              </div>
              <Topsection question={"We're on a Mission Breaking Every Barrier in the way to Indian Digital Revolution"} answers={"Your business stands a chance to gain in this transformation wave-will you join us?"}  />
              <FooterFinal BgColor={"#000"} />
        </ReactLenis>
        
        </div>
    )
}

import { useLayoutEffect } from 'react'
import img1 from '../../images/Four-B/indian.png'
import img2 from '../../images/Four-B/devices.svg'
import img3 from '../../images/Four-B/technology.png'
import img4 from '../../images/Four-B/makeinIndia.svg'
import gsap from 'gsap'
import Mountain from '../../images/Four-B/mountains.png'
import tree from '../../images/Four-B/forest.png'
import { ScrollTrigger } from 'gsap/all'
import blendTesetimonial from '../../images/Four-B/blendtestimonial.png'
import cloud_rectangle from '../../images/Four-B/cloud-rectangle.png'
import first_cloud from '../../images/Four-B/cloud.png'
import first_cloud2 from '../../images/Four-B/Fourb-cloud2.png'
import first_cloud3 from '../../images/Four-B/fourb-cloud3.png'
import Fourth_cloud from '../../images/Four-B/cloud4.png'
import { LazyLoadImage } from "react-lazy-load-image-component"
import './FourB.css'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading'
import { Link } from 'react-router-dom'
export default function FourB(){
useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1199px)", () => {

    gsap.to( ".FB-first-cloud",{y : "25vh", duration:4,  ease: "expoScale(0.5,7,none)", scrollTrigger : { trigger: ".FB-first-cloud", start : "top bottom", end: "bottom top", onEnter: () => {
      gsap.fromTo(".oneB-indian-touching-char", {y: "5vw", opacity : 0}, { y: 0, opacity : 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
    gsap.fromTo(".oneB-indian-char", {y: "5vw", opacity : 0}, { y: 0, opacity : 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
    }, scrub : true,  }})
    gsap.to( ".FB-second-cloud",{y : "35vh", duration:5.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".FB-second-cloud", start : "top bottom", end: "bottom top", scrub : true,  }})
    gsap.to( ".Indiaimage",{y : "-15vh", duration:8.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".Indiaimage", start : "top bottom", end: "bottom top", scrub : true,  }})
    gsap.to( ".FB-fourth-cloud",{y : "35vh", duration:5.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".FB-fourth-cloud", start : "top bottom", end: "bottom+=500 top", scrub : true,  }})
    gsap.to( ".FB-fifth-cloud",{y : "35vh", duration:3.5,   ease: "expoScale(0.5,7,none)", scrollTrigger : { trigger: ".FB-fifth-cloud", start : "top 90%", end: "bottom+=200 top", scrub : true,}})
    gsap.to( ".FB-third-cloud",{y : "-95vh", duration:5.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".FB-third-cloud", start : "top 90%", end: "bottom top", scrub : true, }})
    gsap.to( ".smart-device",{y : "-25vh", duration:9.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".smart-device", start : "top 70%", end: "bottom top", scrub : true,onEnter : () => {
      gsap.to(".oneB-connecting-char", {y : 0, opacity: 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
      gsap.to(".oneB-devices-char", {y: 0, opacity : 1,  stagger : 0.05, duration : 1, ease: "sine.inOut"})
    }  }})
    gsap.to( ".technology",{y : "-45vh", duration:5.5,   ease: "expoScale(0.5,7,none)", scrollTrigger : { trigger: ".technology", start : "top 80%", end: "bottom top", scrub : true,  onEnter : () => {
      gsap.to(".oneB-unicorn-char", {y : 0, opacity: 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
      gsap.to(".oneB-technology-char", {y: 0, opacity : 1,  stagger : 0.05, duration : 1, ease: "sine.inOut"})
    }}})
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#ground", start : "top-=800 bottom", end: "bottom top",  
    }
  })
  t1.fromTo(".mountain-img", {y: "80vh", opacity : 0.5}, { y: 0, opacity : 1, duration : 2, ease: "expoScale(1,2,none)"},"key")
  t1.fromTo(".tree-img", {y: "70vh", opacity : 0.5}, { y: 0, opacity : 1, duration : 1.5, ease: "expoScale(0.5,7,none)"}, "key")
  t1.fromTo(".oneB-tree-char", {y: "25vh", opacity : 0}, {delay : 1, y: 0, opacity : 1, stagger : 0.05, duration : 1, ease: "sine.inOut"}, "key")
  t1.fromTo(".oneB-growing-char", {y: "25vh", opacity : 0}, { delay : 1,y: 0, opacity : 1,stagger : 0.05, duration : 1, ease: "sine.inOut"}, "key")

  return () => {
    if(t1) t1.kill()
  }

  })
  mm.add("(max-width: 1199px)", () => {
    // gsap.to( ".FB-first-cloud",{y : "35vh", duration:4,  ease: "sine.inOut", scrollTrigger : { trigger: "#cloud-section", start : "top bottom", end: "bottom bottom",  scrub : true }})
    // gsap.to( ".FB-second-cloud",{y : "75vh", duration:5.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".FB-second-cloud", start : "top bottom", end: "bottom top", scrub : true,  }})
    // gsap.to( ".Indiaimage",{y : "-25vh", duration:8.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".Indiaimage", start : "top bottom", end: "bottom top", scrub : true,onEnter: () => {
    //   gsap.fromTo(".oneB-indian-touching-char", {y: "5vw", opacity : 0}, { y: 0, opacity : 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
    // gsap.fromTo(".oneB-indian-char", {y: "5vw", opacity : 0}, { y: 0, opacity : 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
    // },  }})
    // gsap.to( ".FB-fourth-cloud",{y : "-55vh", duration:5.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".FB-fourth-cloud", start : "top bottom", end: "bottom+=500 top", scrub : true,  }})
    // gsap.to( ".FB-fifth-cloud",{y : "75vh", duration:3.5,   ease: "expoScale(0.5,7,none)", scrollTrigger : { trigger: ".FB-fifth-cloud", start : "top 80%", end: "bottom+=200 top", scrub : true,}})
    // gsap.to( ".FB-third-cloud",{y : "-85vh", duration:2.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".FB-third-cloud", start : "top 80%", end: "bottom top", scrub : true,  }})
    // gsap.to( ".smart-device",{y : "-25vh", duration:9.5,  ease: "sine.inOut", scrollTrigger : { trigger: ".smart-device", start : "top 70%", end: "bottom top", scrub : true,onEnter : () => {
    //   gsap.to(".oneB-connecting-char", {y : 0, opacity: 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
    //   gsap.to(".oneB-devices-char", {y: 0, opacity : 1,  stagger : 0.05, duration : 1, ease: "sine.inOut"})
    // }  }})
    // gsap.to( ".technology",{y : "-55vh", duration:5.5,   ease: "expoScale(0.5,7,none)", scrollTrigger : { trigger: ".technology", start : "top 80%", end: "bottom top", scrub : true,  onEnter : () => {
    //   gsap.to(".oneB-unicorn-char", {y : 0, opacity: 1, stagger : 0.05, duration : 1, ease: "sine.inOut"})
    //   gsap.to(".oneB-technology-char", {y: 0, opacity : 1,  stagger : 0.05, duration : 1, ease: "sine.inOut"})
    // }}})
  // let t1 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#ground", start : "top-=800 bottom", end: "bottom top",  
  //   }
  // })
  // t1.fromTo(".mountain-img", {y: "80vh", opacity : 0.5}, { y: 0, opacity : 1, duration : 2, ease: "expoScale(1,2,none)"},"key")
  // t1.fromTo(".tree-img", {y: "70vh", opacity : 0.5}, { y: 0, opacity : 1, duration : 1.5, ease: "expoScale(0.5,7,none)"}, "key")
  // t1.fromTo(".oneB-tree-char", {y: "25vh", opacity : 0}, {delay : 1, y: 0, opacity : 1, stagger : 0.05, duration : 1, ease: "sine.inOut"}, "key")
  // t1.fromTo(".oneB-growing-char", {y: "25vh", opacity : 0}, { delay : 1,y: 0, opacity : 1,stagger : 0.05, duration : 1, ease: "sine.inOut"}, "key")
  // return () => {
  //   if(t1) t1.kill()
  // }
  })

  return () => {
    mm.revert();
  };

  },[])
    return(
        <>
        <section className='FourB'>
          <div id='cloud-section' className="cloud-section">
          <div className="blend-testimonial">
           <div className='blend-img-text'>
           <h2>
            Co - creating a Technologically Advanced Greener
              <br />
            Planet : ESDS <span id='fourbm'>4B's</span> Mission</h2>
           </div>
           <img loading='lazy' src={cloud_rectangle} alt="cloud" />
          <img loading='lazy' src={blendTesetimonial} alt="images" />
        </div>
        <div  className='Indiaimage' data-speed=".0025">
        <SparklesPreview2 className={"fourb-indain-touching"} word={[
{
text: "Touching",
class : "Four-B-Touching-text",
className : "inline-block oneB-indian-touching-char"
},
{
  text: "Lives",
  class : "Four-B-Touching-text",
  className : "inline-block oneB-indian-touching-char"
  },
  {
    text: "of",
    class : "Four-B-Touching-text",
    className : "inline-block oneB-indian-touching-char"
    },
]} /> 
          <SparklesPreview2 className={"fourb-1B"} word={[
{
text: "1",
class : "Four-B-indian",
className : "inline-block oneB-indian-char"
},
{
  text: "Billion",
  class : "Four-B-indian",
  className : "inline-block oneB-indian-char"
  },
]} /> 
           <SparklesPreview2 className={"fourb-indian-text"} word={[
{
text: "Indian",
class : "Four-B-indian-text",
className : "inline-block oneB-indian-char"
},

]} /> 
<img src={img1} loading='lazy' alt="Billion-indian" />
        </div>
        <div id='FB-first-cloud' className='FB-first-cloud' data-speed=".12">
          <img src={first_cloud} alt="cloud" />
        </div>
        <div id='FB-second-cloud' className='FB-second-cloud' data-speed=".1">
          <img loading='lazy' src={first_cloud2} alt="cloud" />
        </div>
        <div id='smart-device' className='smart-device' data-speed=".0025">
        <SparklesPreview2 className={"fourb-devices-connecting"} word={[
{
text: "Connecting",
class : "Four-B-connecting-text",
className : "inline-block oneB-connecting-char"
},

]} /> 
          <SparklesPreview2 className={"fourb-1B"} word={[
{
text: "1",
class : "Four-B-devices",
className : "inline-block oneB-devices-char"
},
{
  text: "Billion",
  class : "Four-B-devices",
  className : "inline-block oneB-devices-char"
  },
]} /> 
           <SparklesPreview2 className={"fourb-smart-text"} word={[
{
text: "Smart",
class : "Four-B-smart-text",
className : "inline-block oneB-devices-char"
},
{
  text: "Devices",
  class : "Four-B-smart-text",
  className : "inline-block oneB-devices-char"
  },
  
]} /> 
          <img loading='lazy' src={img2} alt="Smart-device" />
        </div>
        <div className='FB-third-cloud' id='FB-third-cloud' data-speed=".098">
          <img src={first_cloud3} alt="cloud" />
        </div>
        <div className='FB-fourth-cloud' id='FB-fourth-cloud' data-speed=".1">
        <img src={Fourth_cloud} alt="cloud" />
        </div>
        <div id='FB-fifth-cloud' className='FB-fifth-cloud' data-speed=".12">
          <img src={first_cloud2} alt="cloud" />
        </div>
        <div id='technology' className='technology' data-speed=".0025">
        <SparklesPreview2 className={"fourb-technology"} word={[
{
text: "Unicorn",
class : "Four-B-unicorn-text",
className : "inline-block oneB-unicorn-char"
},
{
  text: "in",
  class : "Four-B-unicorn-text",
  className : "inline-block oneB-unicorn-char"
  },
  {
    text: "Make",
    class : "Four-B-unicorn-text",
    className : "inline-block oneB-unicorn-char"
    },
    {
      text: "in",
      class : "Four-B-unicorn-text",
      className : "inline-block oneB-unicorn-char"
      },
      {
        text: "India",
        class : "Four-B-unicorn-text",
        className : "inline-block oneB-unicorn-char"
        },
        {
          text: "Advanced",
          class : "Four-B-unicorn-text",
          className : "inline-block oneB-unicorn-char"
          },
          {
            text: "technology",
            class : "Four-B-unicorn-text",
            className : "inline-block oneB-unicorn-char"
            },

]} /> 
          <SparklesPreview2 className={"fourb-1B"} word={[
{
text: "1",
class : "Four-B-technology",
className : "inline-block oneB-technology-char"
},
{
  text: "Billion",
  class : "Four-B-technology",
  className : "inline-block oneB-technology-char"
  },
]} /> 
       <img loading='lazy' src={img3} alt="technology" />
      <img className='lion-img' src={img4} alt="unicorn" />
        </div>
        {/* <div id='third-cloud' className='third-cloud' data-speed=".2">
          <img src={first_cloud3} alt="" />
        </div> */}
      <div id="ground">
        <div className='inner-div'>
        <img loading='lazy' className='mountain-img' src={Mountain} alt="mountain" />
        <img loading='lazy' className='tree-img' src={tree} alt="forest" />

        <SparklesPreview2 className={"fourb-1B"} word={[
{
text: "1",
class : "Four-B-tree",
className : "inline-block oneB-tree-char"
},
{
  text: "Billion",
  class : "Four-B-tree",
  className : "inline-block oneB-tree-char"
  },
]} /> 
<SparklesPreview2 className={"fourb-growing"} word={[
{
text: "Growing",
class : "Four-B-growing-text",
className : "inline-block oneB-growing-char"
},
]} /> 
<SparklesPreview2 className={"fourb-tree"} word={[
{
text: "Trees",
class : "Four-B-tree-text",
className : "inline-block oneB-growing-char"
},
]} />
        </div>
      </div>
      
    </div>
   
    </section>
        </>
    )
}
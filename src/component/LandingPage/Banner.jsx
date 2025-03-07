import './BannerLanding.css'
import ServerModel from '../Banner/ServerModel'
import { lazy, useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import RevealText from '../../components/ui/splash Text effect/RevealText'
import SparklesPreview from '../../components/ui/Heading text effect/BannerHeading'
import SparklesPreview2 from '../../components/ui/subheading text effect/bannerSubheading'
const OrbitMotion = lazy(() => import('./OrbitMotion'));
import fourthservergif from '../../images/fourth-server-gif.png';
import serveranimation from '../../images/serveranimation.gif'
import '../Navbar/Navbar.css'
import Fourth_banner_cloud from '../../images/Fourth_banner_cloud.png'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useNavigate } from 'react-router-dom'
import HomePageLoader from '../Loader/HomePageloader'
import ScrollIndicator from '../../components/ui/ScrollIndicator'
const SquareGrid  = lazy(() => import('../Banner/ZeroOneParticles'))
const ForthBannerServer = lazy(() => import('../Banner/FourthBannerServer')) 
const Starfield = lazy(() => import('./SpaceBackground'));

export default function Banner() {

    let [showGIF, setShowGIF] = useState(true)
    let [hideUnnecessary, sethideUnnecessary] = useState(true)
 
    let [binaryNumber, setBinaryNumber] = useState(35)
    let navigate = useNavigate()
    const contactNavigation = () => {
      navigate('/contact-us');
    };
   
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(ScrollToPlugin);
      let banner_div = document.getElementById("HomePage-banner");
      let breakp = banner_div.offsetHeight* 5
        gsap.to(window, {
          scrollTo:0,
          duration: 1,
          ease: "power2.inOut"
        });

        // gsap.to("#partner", {scrollTrigger : {trigger : "#partner", start : "top top", end : "bottom top", onEnter :() => {sethideUnnecessary(false)}, onEnterBack : () => {sethideUnnecessary(true)}}})

        let bannerAnimation = gsap.timeline({
            scrollTrigger: { 
                trigger : ".HomePage-banner",
                start : "top top",
                end: () => innerHeight*6,
                pin: true,
                scrub: true,
                // markers : true
                onLeave : () => {
                  document.querySelector(".HomePage-banner").style.position = "relative"
                    
                }

            }
        })
        bannerAnimation.to("#splash-heading", {opacity: 0, zIndex: -1, duration: 0.4, },"key");
        bannerAnimation.fromTo(".first-screen", {opacity: 0}, { zIndex : 5, opacity : 2, onStart: () => { gsap.fromTo(".first-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut" , })
        gsap.fromTo(".second-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut"  })
      }, },"key1")
       bannerAnimation.to(".first-screen", {opacity: 0, duration: 0.1, zIndex: -1}, "key2")
      bannerAnimation.fromTo(".second-screen", {opacity: 0}, { zIndex : 5, opacity : 2, onStart: () => { gsap.fromTo(".third-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut", })
      gsap.fromTo(".fourth-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut", })
    }},"key3")
    bannerAnimation.to(".second-screen", {zIndex : -1, opacity: 0, duration: 0.1}, "key4")
    bannerAnimation.fromTo(".third-screen", {opacity: 0}, {zIndex: 5, opacity : 2, onStart: () => { setShowGIF(true); gsap.fromTo(".fifth-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut", })
    gsap.fromTo(".sixth-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut" })
  }},"key5")
  bannerAnimation.to(".third-screen", {zIndex : -1, opacity: 0,duration: 0.1, onComplete :() => {setShowGIF(false)}}, "key6")
  bannerAnimation.fromTo(".fourth-screen", {zIndex : -2,opacity: 0}, {zIndex : 2, opacity : 2, onStart: () => { gsap.fromTo(".seventh-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut", })
  gsap.fromTo(".eight-character", { y: -20, opacity: 0, skewY: -12, }, { opacity: 1.5, y: 0, skewY: 0, stagger: 0.02, duration: 0.5, ease: "sine.inOut", })
}, onReverseComplete : () => {setShowGIF(true)}},"key7")
  
        return() => {
            if(bannerAnimation) bannerAnimation.kill()
        }
    },[])


    return(
     
         
            <section id='HomePage-banner' className="HomePage-banner">
             
         <ScrollIndicator /> 
            <div className="First-particel">
           {hideUnnecessary ?  <Starfield /> : ""}
           </div>
           <ServerModel />
           <h1 id="splash-heading" className="splash-heading">
              <RevealText /> 
            </h1>  
                <div className="banner-container">
                     <div className='first-screen'>
                    <SparklesPreview canvasId={"firstSparckel"} id={"first_banner_head"} className={"first-screen-heading"} word={[ { text: "Local", class: "banner-heading-word", className : "inline-block first-character" }, { text: "By", class: "banner-heading-word", className : "inline-block first-character" }, { text: "Roots,", class: "banner-heading-word", className : "inline-block first-character" }, { text: "Global", class: "banner-heading-word", className : "inline-block first-character" }, { text: "By", class: "banner-heading-word", className : "inline-block first-character" }, { text: "Reach", class: "banner-heading-word", className : "inline-block first-character" }, ]} /> 
                
                <SparklesPreview2 className={"first_banner_subhead"} word={[ { text: "Embrace ", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "a", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "cloud", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "that", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "recognizes", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "your", class: "banner-subheading-word " , className : "inline-block second-character" }, { text: "potential", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "and", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "frees", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "you", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "to", class: "banner-subheading-word", className : "inline-block second-character" }, { text: "grow", class: "banner-subheading-word", className : "inline-block second-character" }, ]} /> 
             <div className='first-banner-CTA'>
             <button onClick={() => { navigate('/cloud-services') }} className="CTA-button" data-text="Awesome">
                <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
              </button>
             </div>
                    </div> 
                    <div className='second-screen'>
                      <div className='left-orbit-section'>
                       {hideUnnecessary ?  <OrbitMotion /> : ""}
                      </div>
                      <div className="second-banner-content">
                      <SparklesPreview canvasId={"secondSparckel"} id={"second_banner_head"} className={"second_banner_head"} word={[
{
text: "Gain",
class : "heading-word",
className : "inline-block third-character"
},
{
text: "the",
class : "heading-word",
className : "inline-block third-character"

},
{
text: "All-in-one",
class : "heading-word",
className : "inline-block third-character"

},
{
text: "advantage",
class : "heading-word",
className : "inline-block third-character"
},
{
text: "with",
class : "heading-word",
className : "inline-block third-character"
},
{
text: "our",
class : "heading-word",
className : "inline-block third-character"
},

{
text: "Cloud",
class : "heading-word",
className : "inline-block third-character"
},
{
text: "infra",
class : "heading-word",
className : "inline-block third-character"
},
{
  text: "management",
  class : "heading-word",
  className : "inline-block third-character"
  },
  {
    text: "&",
    class : "heading-word",
    className : "inline-block third-character"
    },
    {
      text: "SaaS",
      class : "heading-word",
      className : "inline-block third-character"
      },
      {
        text: "solutions",
        class : "heading-word",
        className : "inline-block third-character"
        },]} /> 
  <SparklesPreview2 className={"second_banner_subhead"} word={[
{
text: "Do",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
text: "you",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
text: "want",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
text: "a",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
text: "partner",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
  text: "that",
  class : "third_banner_subheading_text",
  className : "inline-block fourth-character"
  },
  {
    text: "goes",
    class : "third_banner_subheading_text",
    className : "inline-block fourth-character"
    },
{
text: "beyond",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
text: "the",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},
{
text: "basics?",
class : "third_banner_subheading_text",
className : "inline-block fourth-character"
},

]} /> 
                  <div className='second-banner-CTA'>
                    <button onClick={() => { navigate('/software-as-a-service'); }} className="CTA-button" data-text="Awesome">
                      <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                      <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                    </button>
                  </div>
                      </div>
                    </div>
                     <div className="third-screen">
                      <div className="third_banner_content">
                      <SparklesPreview canvasId={"thirdSparckel"} id={"third_banner_head"} className={"third_banner_head"} word={[
                {
                  text: "Managing",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "cyber",
                  class: "heading-word",
                  className: "inline-block fifth-character"

                },
                {
                  text: "security",
                  class: "heading-word",
                  className: "inline-block fifth-character"

                },
                {
                  text: "for",
                  class: "heading-word",
                  className: "inline-block fifth-character"

                },
                {
                  text: "Top",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "Banks",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "&",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "Cloud",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
              
                {
                  text: "for",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "50",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "of",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                 {
                  text: "India's",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "Fortune",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                },
                {
                  text: "500",
                  class: "heading-word",
                  className: "inline-block fifth-character"
                }

                ]} />
              <SparklesPreview2 className={"third_banner_subhead"} word={[
                {
                  text: "Which",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "side",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "are",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "you",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "on - An",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
            
                {
                  text: "Indian",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "expert",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "with",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "20+",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "years",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "of",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "experience",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "or",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "an",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "expansive",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },
                {
                  text: "MNC ?",
                  class: "third_banner_subheading_text",
                  className: "inline-block sixth-character"
                },

              ]} />
               <div className='third-banner-CTA'>
                  <button  onClick={() => { navigate("/soc-as-a-service") }} className="CTA-button" data-text="Awesome">
                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                  </button>
                </div>
                      </div>
                      <div className='third-banner-gif'>
                  
               <div id="server-gif" className="server-gif">
             <LazyLoadImage
                    effect='blur'
      alt={"gif-three"}
      placeholderSrc={fourthservergif}
            height={"100%"}
      src={serveranimation} // use normal <img> attributes as props
      width={"100%"} /> 
          </div> 
                      </div>
                    </div> 
                    <div className='fourth-screen'>
                <SparklesPreview canvasId={"forthSparckel"} id={"forth_banner_head"} className={"forth_banner_head"} word={[
                  {
                    text: "We're",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "with",
                    class: "heading-word",
                    className: "inline-block seventh-character"

                  },
                  {
                    text: "you,",
                    class: "heading-word",
                    className: "inline-block seventh-character"

                  },
                  {
                    text: "helping",
                    class: "heading-word",
                    className: "inline-block seventh-character"

                  },
                  {
                    text: "you",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "conquer",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "challenges",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "and",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "propel",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "your",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "business",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  },
                  {
                    text: "goals",
                    class: "heading-word",
                    className: "inline-block seventh-character"
                  }]} /> 
                <SparklesPreview2 className={"forth_banner_subhead"} word={[
                  {
                    text: "Tired",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "of",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "Cloud",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "providers",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "that",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "leave",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "you",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "with",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "just",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "a",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "login",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },
                  {
                    text: "portal?",
                    class: "forth_banner_subheading_text",
                    className: "inline-block eight-character"
                  },

                ]} />
                <div className='fourth-banner-CTA'>
                  <button  onClick={() => { contactNavigation() }} className="CTA-button" data-text="Awesome">
                    <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                  </button>
                </div>
               {hideUnnecessary ? <>
                <div className='cloud-numberrain'>
                <div id="forth_banner_cloud" className="forth_banner_cloud">
                  <LazyLoadImage
                    effect='blur'
                    alt={"fourth-cloud"}
                    height={"100%"}
                    src={Fourth_banner_cloud} // use normal <img> attributes as props
                    width={"100%"} />
                  
                </div>
                <div id="zeroOne" className="zeroOne">
                    <SquareGrid size={binaryNumber} size1={70} />
                  </div>
                </div>
                <div className='laptop-server'>
                <ForthBannerServer />
                </div> </>: ""} 
                    </div>
                </div>
            </section>
            
     
    )
}
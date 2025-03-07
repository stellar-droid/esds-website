import { useEffect, useLayoutEffect } from "react"

// import partner_gradient from '../../images/partner-gradient.png'
import './Partner.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { log2 } from "three/examples/jsm/nodes/Nodes.js"
export default function Partner({title, color, logosArray}) {
    useEffect(() => {
      // console.log(logosArray)
        const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

    },[])

    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
    if(title) {
      gsap.fromTo(".partner-heading",{skewY : -2, y : -20, opacity: 0}, {
        y : 0,
        opacity : 1,
        duration : 1,
        skewY : 0,
        scrollTrigger : {
            trigger : ".partner",
            start: "top 50%",
            end : "bottom top",
           
        }
    })
    }
    },[])
    return (
        <>
       <section style={{background: color}} className="partner">
       {title ?  <h3 className="partner-heading">{title}</h3> : ""}
    
       {/* <img className="gradient-partner" src={partner_gradient} alt="" /> */}
       <section style={{background : color}} className="horizontol-slider">
       <div className='bg-linear-gradient'></div>
            <div className="scroller" data-speed="slow">
  <ul className="tag-list scroller__inner">
  {
    logosArray.map((logo,index) => {
     return (
      <li key={index}><img src={logo} alt={logo} /></li>
     )
    })
  }
   
  </ul>
</div>
                </section>
       </section>
               
          
     
        </>
    )
}
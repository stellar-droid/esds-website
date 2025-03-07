import React, { useEffect, useLayoutEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import vector from '../../images/testimonial/Vector.png'
import oultine_cloud from '../../images/testimonial/bg-cloud-outline.png'
import hand_gif from  '../../images/clients/testimonial-click-gif.gif'
import hand_click from '../../images/clients/click-hand.png'
import reviewcomma from '../../images/testimonial/review-vector.png'
import reviewbottomcomma from '../../images/testimonial/review-vector-bottom.png'
import right_cloud from '../../images/testimonial/right-cloud.png'
import left_cloud from '../../images/testimonial/left-cloud.png'
import center_cloud from '../../images/testimonial/center-cloud.png'
import center_cloud2 from '../../images/testimonial/center-cloud2.png'
import './Testimonial.css'
import { useNavigate } from "react-router-dom";
export default function Testimonial() {

  gsap.registerPlugin(ScrollTrigger);
  let navigate = useNavigate()
  useLayoutEffect(() => {

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonil-section",
        start: "top top",
        end: () => innerHeight * 10,
        pin : true,
        scrub: true,
        // markers : true,
        onLeave: () => {
          document.querySelector(".testimonil-section").style.position = "relative"
        }
      },
    })
    t2.to(".center-text", {opacity : 5, ease: "sine.inOut", duration : 1},"key1")
    t2.to(".bg-image", {y: "-28vw", ease: "expoScale(0.5,7,none)", duration : 4},"key")
    t2.to(".center-text", {x : "230vw",y : "-25vw", scale : 75, ease: "sine.inOut", duration : 5, opacity : 0},"key")
    t2.to(".testimonial-CTA", { ease: "sine.inOut", duration : 2, opacity : -5,zIndex : -3},"key")
    t2.fromTo(".testimonial-without-cloud", {opacity : "-15"},{opacity : 1,ease: "sine.inOut", duration : 4,},"key")
    t2.to(".right-cloud", {y : 0, ease: "expoScale(0.5,7,none)", duration : 5}, "key")
    t2.to(".left-cloud", {y : 0, ease: "expoScale(0.5,7,none)", duration : 4}, "key")
    t2.to(".center-cloud", {x : 0, y : 0, ease: "expoScale(0.5,7,none)", duration : 5.8}, "key")
    t2.to(".center-cloud2", {x :0 ,y : 0, ease: "expoScale(0.5,7,none)", duration : 6.5}, "key")
    t2.to(".testimonial-without-cloud", {opacity : 5,ease: "sine.inOut", duration : 3},"key3")
    

    return () => {
      if (t2) t2.kill();
      
    };
  }, []);

  let [level, setLevel] = useState(0);

  // Memoize testimonialText array
  const testimonialText = useMemo(
    () => [
      {
        name: "Mr. Hariharan",
        designation: "Head ",
        company: "Shriram Properties",
        review: "We were on the search for a trusted partner that would adresses our IT needs. By selecting ESDS over other Cloud service providers, we achieved seamless implementation of the Cloud Customer Portal and SAP HANA services driven by unmatched pricing, scalability, and top-tier support. Operating flawlessly for years with zero downtime, we've consistently achieved peak system performance with proactive support from ESDS team.",
      },
      {
        name: "Mr. Subodh Nair",
        designation: "Group IT ",
        company: "ELGi Equipments Limited",
        review: "Let me share how ESDS guided our transformative IT journey at our leading manufacturing company. With a stratergic approach, ESDS implemented comprehensive cloud solutions and provided steadfast support throughout. Crucial projects like IoT integration and near-line DR services setup were seamlessly executed, showcasing ESDS’s expertise,  resources, and customer-centric ethos. Thanks to ESDS, we achieved elevated operational efficiency and set a new standard in our industry.",
      },
      {
        name: "Mr. Gopala Krishna HM ",
        designation: "IT Consultant & Operations and FAM ",
        company: "Surfa Coats (India) Private Limited",
        review: "At Surfa Coats, we decided to partner with ESDS for our cloud migration to streamline our IT operations in the textile industry. After facing challenges with previous cloud service provider, transitioning to ESDS was a game-changer. The process was smooth, ensuring our operations ran without interruption and our scalability improved significantly. We're truly impressed with ESDS's reliability and the positive impact it's had on our business. For any company looking for dependable cloud solutions, ESDS is definitely the way to go.",
      },
      {
        name: "Mr. Ravikumar N B",
        designation: "CFO",
        company: "Span Healthcare P Ltd",
        review: "ESDS has been instrumental in transforming our IT infrastructure since July 2019. As a healthcare provider, ensuring 24/7 service and data security is paramount. Their SAP HANA hosting services have not only met but exceeded our expectations, providing cost-effective solutions and reducing IT operational risks significantly. I highly recommend ESDS as a cloud service provider for their exceptional service and reliability."
,
      },
      {
        name: "Mr. Chirag Boonlia",
        designation: "Group Chief Technology Officer",
        company: "Embassy Group",
        review: "Our journey with ESDS has been transformative. We faced the challenge of optimizing IT operations across diverse sectors—commercial, residential, and facility management. ESDS's robust digital IT solutions, including ERP, CRM, mobile apps, and cutting-edge technologies like digital twins and IoT, enabled us to achieve IT operational excellence. Their IT infrastructure supported seamless scalability, minimizing CapEx and maximizing efficiency. Our partnership with ESDS has not just solved our IT challenges but has set a new standard for industry-wide digital transformation.",
      },
      {
        name: "Mr. Sandesh Salankey",
        designation: "AVP Corporate Finance & IT",
        company: "Unibic Foods India Pvt Ltd",
        review: "Amid crucial times, we at UNIBIC Cookies experienced our IT transformation seamlessly with ESDS's aid. Searching for the best cloud service providers, we chose ESDS for their private cloud services. With their unwavering support, we overcame accessibility hurdles and enhanced speed. ESDS ensured a seamless migration, demonstrating rapid response times and adherence to Indian privacy laws with their data centers in India. As a leading cookie manufacturer, we wholeheartedly endorse ESDS for their outstanding service and streamlined IT migration journey.",
      },
      {
        name: "Mr. Deepak Jain",
        designation: "SAP & Infra Head",
        company: "Quest Retail Ltd (The Body Shop)",
        review: "As a leading retail company, we were previously challenged by server limitations but found respite in ESDS's innovative cloud solutions. We have implemented all SAP servers on ESDS Cloud and have witnessed a massive shift in support and efficiency. Despite facing several challenges in the past, our transition to ESDS has ensured uninterrupted IT operations and unparalleled success.",
      },
    ],
    []
  );

  const activateTestimonial = useCallback((e, levelnumber) => {
    document.getElementById("testimonial-hand-gif").style.opacity = 0
    let active_bubble = document.querySelector(".active");
    if (active_bubble) {
      active_bubble.classList.add(e.target.classList[1]);
      active_bubble.classList.remove(active_bubble.classList[1]);
      e.target.classList.remove(e.target.classList[1]);
      e.target.classList.add("active");
    }
    setLevel(levelnumber);
  }, []);

  
  // const showTetimonisl = useCallback((levelnumber) => {
  //  console.log(levelnumber)
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLevel(prevLevel => {
  //       const nextLevel = (prevLevel + 1) % testimonialText.length;
  //       showTetimonisl(nextLevel);
  //       return nextLevel;
  //     });
  //   }, 2000);


  //   return () => clearInterval(interval);
  // }, [activateTestimonial, testimonialText.length]);

 

  return (

    <section id="test-sec" className="testimonil-section">
      {/* <div className="info-btn">
        <p>Click on client</p>
      <div className=" button-sparkle-line relative">
                                        <div style={{ left: "0", width: "100%" }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
                                        <div style={{ width: "100%", left: 0 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                    </div>
      </div> */}
    <div className="wrapper" id="wrapper">
      <div style={{ display: "block" }} id="bg-img" className="bg-image"></div>
      <div id="center_text" className="center-text">
        <React.Suspense fallback={<div>Loading...</div>}>
          <img loading="lazy" className="top-comma" src={vector} alt="comma" />
          <h2>Get on Cloud 9 with Us</h2>
          <img loading="lazy" className="bottom-comma" src={vector} alt="comma" />
        </React.Suspense>
        <div className="button-testimonial"></div>
      </div>
      <button onClick={() => {navigate('/contact-us')}} className="CTA-button testimonial-CTA" data-text="Awesome">
        <span className="actual-text">&nbsp;Connect Now&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Connect&nbsp;Now&nbsp;</span>
      </button>
      <div id="testimonial" className="testimonial">
        <div className="testimonial-without-cloud">
          
          {testimonialText.map((_, index) => (
            <div
              key={index}
              className={`buble-img ${index === 0 ? 'active' : `floating-bubble${index + 1}`}`}
              id={`float${index + 1}`}
              onClick={(e) => activateTestimonial(e, index)}
            ></div>
          ))}
          <div className="cloud-bg-outline">
            <React.Suspense fallback={<div>Loading...</div>}>
              <img loading="lazy" className="cloud-outline" src={oultine_cloud} alt="cloud outline" />
            </React.Suspense>
          </div>
          <div className="active-client">
            <div className="testimonial-img"></div>
            <div className="client-info">
              <h3>{testimonialText[level].name}</h3>
              <div className="designation-company">
                <p>{testimonialText[level].designation}</p> <p>-</p>
                <p>{testimonialText[level].company}</p>
              </div>
            </div>
            <div className="review-without-overlay">
              <React.Suspense fallback={<div>Loading...</div>}>
                <img loading="lazy" className="review-top-comma" src={reviewcomma} alt="comma" />
                <img loading="lazy" className="review-bottom-comma" src={reviewbottomcomma} alt="comma" />
              </React.Suspense>
              <div className="review">
                <p>{testimonialText[level].review}</p>
              </div>
            </div>
          </div>
          <div id="testimonial-hand-gif" className="testimonial-hand-gif">
          <img src={hand_click} alt="hand" />
        </div>
        </div>
        <div className="parallex-cloud">
          <React.Suspense fallback={<div>Loading...</div>}>
            <img className="right-cloud" loading="lazy" src={right_cloud} alt="cloud" />
            <img className="left-cloud" loading="lazy" src={left_cloud} alt="cloud" />
            <img className="center-cloud" loading="lazy" src={center_cloud} alt="cloud" />
            <img className="center-cloud2" loading="lazy" src={center_cloud2} alt="cloud" />
          </React.Suspense>
        </div>
       
      </div>
    </div>
  </section>
  );
}

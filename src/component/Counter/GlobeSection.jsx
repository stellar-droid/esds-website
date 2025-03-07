import { Suspense, lazy } from 'react';
import { useLayoutEffect, useState } from 'react'
// import counterCurve from '../../images/globe-line.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import gsap from 'gsap';
import './Counter.css'
const Earth = lazy(() => import('./Earth'));

export default function GlobeSection() {
  const [showCounter, setShowCounter] = useState(false);
  let [hideUnnecessary , sethideUnnecessary] = useState(false)

  useLayoutEffect(() => {
    const t7 = gsap.timeline({
      scrollTrigger: {
        trigger: "#sixth",
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
        onEnter: () => {
          setShowCounter(true);
        
        },
        onEnterBack: () => setShowCounter(true),
        
        onLeaveBack: () => {
          setShowCounter(false);
          
        }
      }
    });

    // let t8 = gsap.timeline({
    //   scrollTrigger : {
    //     trigger : ".sixth",
    //     start : "top top",
    //     endTrigger : ".globe",
    //     end : "bottom top",
    //     scrub : true,
    //     markers : true
    //   }
    // })
    // t8.to(".earthmodel", {position : "relative",  y : "-12vw",duration : 8, ease : "slow(0.7,0.1,false)", zIndex: 8888})

    return () => {
     if(t7) t7.kill();
      // if(t8) t8.kill();
    };
  }, []);

  return (
    <div id='globe' className="globe">
      {window.innerWidth > 1024 ? 
       <Row className='third-counter-row'>
              <Col xs={2} className='counter-col'>
              <div className="counter-wrapper">
              { showCounter ?  <CountUp end={227273} duration={5} /> : <span>0</span>}
              <span>+</span>
            </div>
            <p className='esdsCounter_text'>Security Scans Performed in a year</p>

          </Col>
      
      <Col className='counter-col'  xs={2}>
            <div className="counter-wrapper">
            { showCounter ?  <CountUp end={26500} duration={5} />: <span>0</span>}
              <span>+</span>
          </div>
          <p className='esdsCounter_text'>Devices monitored for SOC</p>
        </Col>
        
        <Col className='counter-col' xs={2}>
            <div className="counter-wrapper">
            { showCounter ?  <CountUp end={600} duration={5} /> : <span>0</span>}
            <span>+</span>
          </div>
          <p className='esdsCounter_text'>Million people connected over a fortnight</p>
        </Col>
        <Col className='counter-col' xs={2}>
            <div className="counter-wrapper">
            { showCounter ?   <CountUp end={1} duration={5} /> : <span>0</span> }
            <span>million+</span>
          </div>
          <p className='esdsCounter_text'>Trees planted</p>
        </Col>
        <Col className='counter-col' xs={2}>
            <div className="counter-wrapper">
            { showCounter ?   <CountUp end={10000000} duration={2000} /> : <span>0</span> }
          </div>
          <p className='esdsCounter_text'>Endless Possibilities</p>
        </Col>
        
      </Row>  :     
      <Row className='third-counter-row'>
        <Col className='counter-col' xs={2}>
            <div className="counter-wrapper">
            { showCounter ?   <CountUp end={1} duration={5} /> : <span>0</span> }
            <span>million+</span>
          </div>
          <p className='esdsCounter_text'>Trees planted</p>
        </Col>
        <Col className='counter-col' xs={2}>
            <div className="counter-wrapper">
            { showCounter ?   <CountUp end={10000000} duration={2000} /> : <span>0</span> }
          </div>
          <p className='esdsCounter_text'>Endless Possibilities</p>
        </Col>
      </Row>}
    {window.innerWidth > 1199 ?  
       <Earth /> 
      : ""}
    </div>
  );
}

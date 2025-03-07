import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import earth_bg from '../../images/earth-bg.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Counter.css';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, duration, suffix }) => (
  <div className="counter-wrapper">
    <CountUp end={end} duration={duration} />
    <span>{suffix}</span>
  </div>
);



const CounterSection = React.memo(() => {
  const [showCounter, setShowCounter] = useState(false);
  let navigate = useNavigate()
  useEffect(() => {
    const t7 = gsap.timeline({
      scrollTrigger: {
        trigger: "#sixth",
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
        onEnter: () => setShowCounter(true),
        onEnterBack: () => setShowCounter(true),
        onLeave: () => setShowCounter(false),
        onLeaveBack: () => setShowCounter(false),
      }
    });

    return () => {
      t7.kill();
    };
  }, []);

  return (
    <section id="sixth" className="sixth">
      <div className='esdsCounter'>
        <Container fluid>
          <Row className='head-count'>
            <Col xs={12} className='text-center esdsHeading'>
              <h1>20</h1>
              <span className='year'>+Years</span>
            </Col>
           
            <div className='count-heading-top'>We've been there for our customers. </div>
            <div className='count-heading-bottom'>Ready to see how we can help accelerate your business growth?</div>
           <div className='counter-CTA'>
           <button  onClick={() => { navigate('/contact-us') }} className="CTA-button" data-text="Awesome">
              <span className="actual-text">&nbsp;Start Your Journey&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Start&nbsp;Your&nbsp;Journey&nbsp;</span>
            </button>
           </div>
          </Row>
          {
            window.innerWidth > 1024 ? <Row className='second-counter-row'>
            <Col xs={2} className='counter-col'>
              {showCounter ? <Counter end={10} duration={5} suffix="million +" /> : <span>0</span>}
              <p className='esdsCounter_text'>Smart Meters hosted on the Government Community Cloud</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={246437} duration={5} suffix="Cr +" />}
              <p className='esdsCounter_text'>Mudra Loans Disbursed from Banking Cloud</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={14} duration={5} suffix="+" />}
              <p className='esdsCounter_text'>Major Smart cities hosted on eNlight Cloud</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={2817100} duration={5} suffix="+" />}
              <p className='esdsCounter_text'>Security events addressed</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={1} duration={5} suffix="million+" />}
              <p className='esdsCounter_text'>websites are scanned per day</p>
            </Col>
          </Row> : <Row className='second-counter-row'>
            <Col xs={2} className='counter-col'>
              {showCounter ? <Counter end={10} duration={5} suffix="million +" /> : <span>0</span>}
              <p className='esdsCounter_text'>Smart Meters hosted on the Government Community Cloud</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={246437} duration={5} suffix="Cr +" />}
              <p className='esdsCounter_text'>Mudra Loans Disbursed from Banking Cloud</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={14} duration={5} suffix="+" />}
              <p className='esdsCounter_text'>Major Smart cities hosted on eNlight Cloud</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={2817100} duration={5} suffix="+" />}
              <p className='esdsCounter_text'>Security events addressed</p>
            </Col>
            <Col xs={2} className='counter-col'>
              {showCounter && <Counter end={1} duration={5} suffix="million+" />}
              <p className='esdsCounter_text'>websites are scanned per day</p>
            </Col>
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
          </Row> 
          }
        </Container>
      </div>
      {window.innerWidth < 1024 ?  <div className='earth-bg-blend'>
        <img src={earth_bg} alt="" />
      </div> : null}
    </section>
  );
});

export default CounterSection;

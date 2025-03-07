import React, { lazy, Suspense } from 'react'
import './Mobilebanner.css'
const Starfield = lazy(() => import('./SpaceBackground'));
import ThreeDLogo from '../../images/navbar/ESDS 3D Logo.png'
import MobileModel from './MobileModel';

function MobileBanner2() {

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Observer)


  return (

      <div className='mobile-HomePage-banner'>
          <div className="space-bg">
              <Suspense fallback={null}>
                  <Starfield />
              </Suspense>
          </div>
          <div className="top-server">
              <MobileModel />
          </div>
          <div className="mobile-banner-container">
              <div className='mobile-splash-screen'>
                  <img className='threeDlogo' src={ThreeDLogo} alt="" />
                  <p className="splash-first">Enabling the Future of <span>Digital India</span></p>
                  <div className="indicator-container2">
                      <div id="scroll-down" className="scroll-down-symbol2">
                          <div></div>
                          <div></div>
                          <div className="scroll-text">Scroll to Explore</div>
                      </div>
                  </div>
              </div>
              
          </div>
          <div className='yellow-block'>

          </div>
      </div>
  );
}

export default MobileBanner2;

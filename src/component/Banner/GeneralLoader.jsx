import React, { useState, useEffect, useRef } from "react";
import CountUp from 'react-countup';
import gsap from 'gsap';

const LoaderComponent = ({ mediaUrls = [], onProgressUpdate, onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTime, setLoadingTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const startTimeRef = useRef(null);
  const loadedCountRef = useRef(0);
  const linesRef = useRef([]);

  useEffect(() => {
    if (mediaUrls.length === 0) {
      setIsLoaded(true);
      setStartAnimation(true);
      onLoadComplete && onLoadComplete(true, 0);
      return;
    }

    startTimeRef.current = Date.now();
    loadedCountRef.current = 0;
    const totalMedia = mediaUrls.length;

    const updateProgress = () => {
      const progress = Math.round((loadedCountRef.current / totalMedia) * 100);
      setLoadingProgress(progress);
      onProgressUpdate && onProgressUpdate(progress);

      if (loadedCountRef.current === totalMedia) {
        const timeTaken = (Date.now() - startTimeRef.current) / 1000;
        let timeSet = timeTaken.toFixed();
        let timetook = Number(timeSet) + 5;
        setLoadingTime(timetook);
        setIsLoaded(true);
        // Start the animation only after everything is loaded
        setTimeout(() => {
          setStartAnimation(true);
          onLoadComplete && onLoadComplete(true, timetook);
        }, 100);
      }
    };

    const handleLoad = () => {
      loadedCountRef.current++;
      updateProgress();
    };

    const handleError = () => {
      loadedCountRef.current++;
      updateProgress();
    };

    const mediaElements = mediaUrls.map((url) => {
      const isVideo = url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
      const element = isVideo ? document.createElement("video") : new Image();
      element.src = url;
      
      if (isVideo) {
        element.onloadeddata = handleLoad;
      } else {
        element.onload = handleLoad;
      }

      element.onerror = handleError;

      setTimeout(() => {
        if (!element.complete && loadedCountRef.current < totalMedia) {
          handleError();
        }
      }, 5000);

      return element;
    });

    return () => {
      mediaElements.forEach((el) => {
        el.onload = null;
        el.onerror = null;
      });
    };
  }, [mediaUrls, onProgressUpdate, onLoadComplete]);

  useEffect(() => {
    if (!startAnimation) return;

    const tl = gsap.timeline({
      onComplete: function () {
        tl.restart();
      },
    });

    const time = 1.9;
    const y = 80;
    const x = 20;

    tl.fromTo(
      linesRef.current[0],
      { opacity: 1, y: 0 },
      { opacity: 0.5, y: -x, duration: time },
      "key"
    )
    .fromTo(
      linesRef.current[1],
      { opacity: 0.5, y: x, fontWeight: 400 },
      { opacity: 1, y: 0, fontWeight: 600, duration: time },
      "key"
    )
    .fromTo(
      linesRef.current[2],
      { opacity: 0, y: y },
      { opacity: 0.5, y: x, duration: time },
      "key"
    )
    .fromTo(
      linesRef.current[3],
      { opacity: 0, y: y },
      { opacity: 0, y: x, duration: time },
      "key"
    )
    .fromTo(
      linesRef.current[0],
      { opacity: 0.5, y: -x },
      { opacity: 0, y: -y, duration: time },
      "key1"
    )
    .fromTo(
      linesRef.current[1],
      { opacity: 1, y: 0, fontWeight: 600 },
      { opacity: 0.5, y: -x, fontWeight: 400, duration: time },
      "key1"
    )
    .fromTo(
      linesRef.current[2],
      { opacity: 0.5, y: x, fontWeight: 400 },
      { opacity: 1, y: 0, fontWeight: 600, duration: time },
      "key1"
    )
    .fromTo(
      linesRef.current[3],
      { opacity: 0, y: y },
      { opacity: 0.5, y: x, duration: time },
      "key1"
    )
    .fromTo(
      linesRef.current[1],
      { opacity: 0.5, y: -x },
      { opacity: 0, y: -y, duration: time },
      "key2"
    )
    .fromTo(
      linesRef.current[2],
      { opacity: 1, y: 0, fontWeight: 600 },
      { opacity: 0.5, y: -x, fontWeight: 400, duration: time },
      "key2"
    )
    .fromTo(
      linesRef.current[3],
      { opacity: 0.5, y: x, fontWeight: 400 },
      { opacity: 1, y: 0, fontWeight: 600, duration: time },
      "key2"
    )
    .fromTo(
      linesRef.current[4],
      { opacity: 0, y: y },
      { opacity: 0.5, y: x, duration: time },
      "key2"
    );

    return () => {
      tl.kill();
    };
  }, [startAnimation]);

  return (
    <div className='loader-container'>
      <div className='loader-inner-container'>
        <div className="comapny-name2">
          <div className='company-name'>
            ESDS
          </div>
          <span className="green-text">Enabling Futurability</span>
        </div>
        
        <div className='list-services2'>
          <div className="line2" ref={(el) => (linesRef.current[0] = el)}>
            Cloud Solutions.
          </div>
          <div className="line2" ref={(el) => (linesRef.current[1] = el)}>
            Data Center Solutions.
          </div>
          <div className="line2" ref={(el) => (linesRef.current[2] = el)}>
            Innovation in Action
          </div>
          <div className="line2" ref={(el) => (linesRef.current[3] = el)}>
            Your Technology Partner.
          </div>
          <div className="line2" ref={(el) => (linesRef.current[4] = el)}>
            Future of Digital India
          </div>
        </div>

        {startAnimation && (
          <>
            <div className='progress-bar'>
              <div 
                style={{animationDuration: `${loadingTime}s`}} 
                className='blue-line2'
              />
            </div>
            <div className="counter-number">
              <span>
                <CountUp 
                  start={20} 
                  end={100} 
                  duration={loadingTime} 
                  onEnd={() => {
                    document.querySelector(".loader-container").style.opacity = 0;
                  }} 
                />%
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoaderComponent;
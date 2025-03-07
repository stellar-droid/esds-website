import React, { useState, useEffect, useRef } from "react";
// import { Loader2, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import gsap from 'gsap';

const LoaderComponent = ({ mediaUrls = [], onProgressUpdate, onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTime, setLoadingTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const startTimeRef = useRef(null);
  const loadedCountRef = useRef(0);

  useEffect(() => {
    if (mediaUrls.length === 0) {
      setIsLoaded(true);
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
        let timeSet = timeTaken.toFixed()
        let timetook = Number(timeSet) + 5
        setLoadingTime(timetook);
        setTimeout(() => {
          setIsLoaded(true);
          setLoadingProgress(100); // Ensure 100% completion
          onLoadComplete && onLoadComplete(true, timetook);
        }, 500);
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

      // Fallback timeout in case of network issues
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

  const linesRef = useRef([]); // To store multiple line references
  useEffect(() => {
   const tl = gsap.timeline({
     onComplete: function () {
       tl.restart(); // Restart the timeline when complete
     },
   });
 
   const time = 1.9;
   const y = 80;
   const x = 40;
 
   // Assuming linesRef.current contains the three words in an array-like structure
 
   // Animate the first word to opacity 0.5
   tl.fromTo(
     linesRef.current[0], // Target the first word
     { opacity: 1, y: 0 },
     { opacity: 0.5, y: -x, duration: time },
     "key"
   )
   // Animate the second word to opacity 1
   .fromTo(
     linesRef.current[1], // Target the second word
     { opacity: 0.5, y: x, fontWeight : 400 },
     { opacity: 1, y: 0, fontWeight : 600, duration: time },  
     "key"
   )
   // Animate the third word to opacity 0.5
   .fromTo(
     linesRef.current[2], // Target the third word
     { opacity: 0, y: y },
       { opacity: 0.5, y: x, duration: time },  
     "key"   
   )
   .fromTo(
       linesRef.current[3], // Target the third word
       { opacity: 0, y: y },
         { opacity: 0, y: x, duration: time },  
       "key"   
     )
   .fromTo(
       linesRef.current[0], // Target the third word
       {  opacity: 0.5, y: -x, },
       {  opacity: 0, y: -y, duration: time },
       "key1"   
     )
     .fromTo(
       linesRef.current[1], // Target the third word
       { opacity: 1, y: 0, fontWeight : 600 },
       { opacity: 0.5, y: -x, fontWeight : 400, duration: time },  
       "key1"   
     ).fromTo(
       linesRef.current[2], // Target the third word
       { opacity: 0.5, y: x, fontWeight : 400 },
       { opacity: 1, y: 0, fontWeight: 600,  duration: time },  
       "key1"   
     )
     .fromTo(
       linesRef.current[3], // Target the third word
       { opacity: 0, y: y },
       { opacity: 0.5, y: x, duration: time },  
       "key1"   
     )
     .fromTo(
       linesRef.current[1], // Target the third word
       { opacity: 0.5, y: -x },
       { opacity: 0, y: -y, duration: time },  
       "key2"   
     )
     .fromTo(
       linesRef.current[2], // Target the third word
       { opacity: 1, y: 0 , fontWeight : 600},
       { opacity: 0.5, y: -x, fontWeight : 400, duration: time },  
       "key2"   
     )
     .fromTo(
       linesRef.current[3], // Target the third word
       { opacity: 0.5, y: x, fontWeight : 400 },
       { opacity: 1, y: 0, fontWeight : 600, duration: time },  
       "key2"   
     )
     .fromTo(
       linesRef.current[4], // Target the third word
       { opacity: 0, y: y },
       { opacity: 0.5, y: x, duration: time },  
       "key2"   
     )

 }, []);

  return (
    
      // isLoaded ? null : 
      <div  className='loader-container'>
      <div className='loader-inner-container'>
      <div className='company-name'>
        ESDS
      </div>
      <div className='list-services2'>
                      <div class="line" ref={(el) => (linesRef.current[0] = el)}>
                          Cloud  Solutions.
                      </div>
                      <div class="line" ref={(el) => (linesRef.current[1] = el)}>
                          Data Center Solutions.
                      </div>
                      <div class="line" ref={(el) => (linesRef.current[2] = el)}>
                          Innovation in Action
                      </div>
                      <div class="line" ref={(el) => (linesRef.current[3] = el)}>
                          Your Technology Partner.
                      </div>
                      <div class="line" ref={(el) => (linesRef.current[4] = el)}>
                          Future of Digital India
                      </div>
                  </div>
        <div className='progress-bar'>
          <div style={{animationDuration : `${loadingTime}s`}} className='blue-line2'></div>
        </div>
        <div className="counter-number">
         
          <span> <CountUp end={100} duration={loadingTime} onEnd={() => {
          document.querySelector(".loader-container").style.opacity = 0
          }} />%</span>
        </div>
      </div>
     </div>
    
    
    
  );
};

export default LoaderComponent;

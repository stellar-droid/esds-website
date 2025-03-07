import HTMLFlipBook from "react-pageflip";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Leadership.css";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as demoActions from '../../Redux/Actions/DemoActions.js';

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <p>{props.children}</p>
    </div>
  );
});

function MyAlbum({ img1, magazinearray, leader_name, instalink, twitterlink, facebooklink, linkedlink, altTag }) {
  let [gradient, setgradient] = useState(false);

  const demoState = useSelector(state => state.DemoState);
  const magazine = useRef(); // Ref for accessing the flipbook
  const dispatch = useDispatch();
  
  const onFlip = useCallback((e) => {
      const updatedInfo = demoState.slide_info.map((item) =>
        item.name === leader_name ? { ...item, page_no: e.data } : item
      );
      dispatch({ type: demoActions.SLIDER_INFO, payload: updatedInfo });
  }, [dispatch, leader_name, demoState.slide_info]);

  return (
    <div className="wrapper-contain">
      <HTMLFlipBook
        width={window.innerWidth}
        height={window.innerHeight}
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        showCover={false}
        flippingTime={1000}
        style={{ margin: "0 auto" }}
        onFlip={onFlip}
        ref={magazine}
        maxShadowOpacity={0.5}
        className="album-web"
      >
        <Page number="1">
          <div className='card-outline'>
            <img src={img1} alt={altTag} />
            <div className='social-media-new'>
              <div className='social-mediaIcon'>
                <p className='social-media'>
                  {instalink && (
                    <Link
                      to={instalink}
                      target='_blank'
                      onMouseOver={() => { setgradient(true); }}
                      onMouseLeave={() => { setgradient(false); }}
                      className='insta'
                    >
                      
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#f58529', stopOpacity: 1 }} />
                                        <stop offset="50%" style={{ stopColor: '#dd2a7b', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#515bd4', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path fill={gradient ? `url(#instagramGradient)` : ""} d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                                <path fill={gradient ? `url(#instagramGradient)` : ""} d="M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z"></path>
                            </svg>
                        
                    </Link>
                  )}
                  {twitterlink && <Link to={twitterlink} target='_blank' className='twitter'><FaXTwitter /></Link>}
                </p>
                <p className='social-media'>
                  {linkedlink && <Link to={linkedlink} target='_blank' className='linkedin'><FiLinkedin /></Link>}
                  {facebooklink && <Link to={facebooklink} target='_blank' className='facebook'><FiFacebook /></Link>}
                </p>
              </div>
            </div>
          </div>
        </Page>
                
        {
          magazinearray.map((imgmag) => {
            return(
              <Page number="2"> <img className="magazine-bg" src={imgmag} alt="magazine background" /> </Page>
            )
          })
        }
      </HTMLFlipBook>
    </div>
  );
}

export default MyAlbum;

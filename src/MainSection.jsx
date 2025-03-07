import Routing from "./Routing";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import urlmetaTag from "./utils/MetaTag";
import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import img1 from './images/Banner/cloud-services.jpg'
import img2 from './images/Banner/IAAS.png'
import img3 from './images/Banner/managed-services.png'
import img4 from './images/Banner/SAAS.png'
import fourthservergif from './images/fourth-server-gif.png';
import serveranimation from './images/serveranimation.gif'
import img5 from './images/Banner/cloud-services.jpg'
import InnerPageLoader from "./component/Loader/InnerPageLoader";
import LoaderComponent from './component/Banner/GeneralLoader'
import HomePageLoader from "./component/Loader/HomePageloader";
import cloud_cta from './images/cloud-cta-button.svg'
import envelope from './images/messages.svg'
export default function MainSection() {
  const location = useLocation()
  const currentpath = location.pathname
  let index = currentpath
  let mainurl = [img1, img2, img3, img4,img5, fourthservergif, serveranimation]
// console.log(currentpath)
    return(

       <HelmetProvider>
      <div>
     {currentpath == "/" ? window.innerWidth < 1025 ?  <LoaderComponent mediaUrls={mainurl} /> : <HomePageLoader /> : null}
       
        <Routing />
        {
          index && urlmetaTag[index] ? <Helmet>
          <title>{urlmetaTag[index].meta_title}</title>
         {/* {index != "/" || index != "/contact-us" ?  <meta name="robots" content="noindex,nofollow" /> : ""} */}
          <meta name="description" content={urlmetaTag[index].meta_description} />
          <meta name="keywords" content={urlmetaTag[index].meta_keyword} />
        </Helmet> : ""
        }
     {currentpath == "/leadership" || currentpath == "/contact-us" ? "" :   <Link to={'/contact-us'}> <div className="right-bottom-btn">
<div class="loader">
  <img className="envelope" src={envelope} alt="envelope" />
<div class="words">
<span class="word btn-shine2">Connect with ESDS</span>
<span class="word btn-shine2">Talk to Our Experts</span>
<span class="word btn-shine2">Schedule a Call</span>
<span class="word btn-shine2">Get in Touch</span>
<span class="word btn-shine2">Your Solution Awaits</span>
</div>
    </div>  
   </div> </Link>}
   {currentpath == "/leadership" ? "" :    <Link target="_blank" to={'https://billing.esds.co.in/sso_registration_v1.php'}> <div className="cloud-bottom-btn">
<div class="loader-cloud">
  <img className="message" src={cloud_cta} alt="envelope" />
<div class="words">
<span class="cloud-text">Create cloud</span>
</div>
    </div>  
   </div> </Link>}
      </div>
    </HelmetProvider>     
    )
}

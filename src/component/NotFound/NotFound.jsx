import React, { useEffect } from "react";
import './NotFound.css'
import Page404 from '../../images/notfound.svg'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate()
  useEffect(() => {
    if(window.location.pathname == "/ESDS_peoples/careers") {
      window.open('/esds-peoples/careers', '_blank');
    }
    if(window.location.pathname == "/ESDS_peoples/news-events") {
      navigate('/esds-peoples/news-events/')
    }
    if(window.location.pathname == "/managedsecurity") {
      navigate('/soc-as-a-service')
    }
    if(window.location.pathname == "/managedservices") {
      navigate('/managed-services')
    }
    if(window.location.pathname == "/whyesds") {
      navigate('/why-esds')
    }
    if(window.location.pathname == "/colocationservice") {
      navigate('/colocation-data-centre-services')
    }
    if(window.location.pathname == "/about") {
      navigate('/about-esds')
    }
    if(window.location.pathname == "/cloudservice") {
      navigate('/cloud-services')
    }
  },[])
  return  (
  <section className='Managed-operation-counter error-page'>


  <div className="notFoundContainer">
    <h1 className="NotFound-header">Oops!</h1>
    <p className="NotFound-sub-header">This Page Is Off Exploring the Cloud</p>
  </div>
    <div className="content-404">
          <img src={Page404} alt="404 page" />
    </div>
    <Link className="back-button" to={'/'}>
    <FaArrowLeftLong/>
    <Link to={'/'} className="takemeback-text">Take me back</Link>
    </Link>
</section>
)};

export default NotFound;

import React, { useEffect, useState } from "react";
import './WhitePapers.css'
import gsap from "gsap";
import Header from "../Header/Header";
import SuccessStories from "../Case studt pop-up/SuccessStories";
import InnerPageLoader from "../Loader/InnerPageLoader.jsx";
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import FooterFinal from "../FinalFooter/FooterFinal";
import MobileNavbar from "../Navbar/MonileNavbar";
import { useDispatch } from "react-redux";
const eList = [
    {
      id : 1,
        sr_no: "01",
        title:"A fortress to guarantee data security",
       
    },
    {
      id : 2,
        sr_no: "02",
        title:"Auto-Scalable Cloud Solutions - Enabling e-Commerce companies to handle unpredictable spikes in traffic",
       
    },
    {
      id :3,
        sr_no: "03",
        title:"Automation - Redefining data infrastructure managementBFSI Institutions - Ensuring robust data security as a foundation for e-Service expansion",
       
    },
    {
      id : 4,
        sr_no: "04",
        title:"Choosing the right DC location for DR implementation",
      
    },
    {
      idd : 5,
        sr_no: "05",
        title:"Co-location as a Practice - Identifying the right provider",
        
    },
    {
      id : 6,
        sr_no: "06",
        title:"Co-location as a Service - Revolutionizing the way state-run enterprises operate",
       
    },
    
];
const WhitePapers = () => {
  const [eventsList,setEventsList] = useState(eList)
  const [isOpen,setIsOpen] = useState(false);
  const [caseStudyId, setCaseStudyId] = React.useState('');
  const [downloadFile,setDownloadFile] = useState(null)
  const handleOpen  = (id) => {

    setCaseStudyId(id)
    setIsOpen(true);
};
  const [fileName,setFileName] = useState('')
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
  },[])

  
return (
  <div>
    <MobileNavbar />
    <Header />
    {/* <InnerPageLoader /> */}
  <div>

<div id="WhitePapers">
<div className="bannerWhitepapers">
   <div className="headingText">
   <h2>White Papers</h2>
   <p>Uncovering Insights and Opportunities</p>
   </div>
</div>
</div>
<div className="anime-list">
  <ul>{eventsList.length ? 
    eventsList.map((event,index) => {
        return <li key={index}>
      <div className="index">
        <span>{event.sr_no}</span>
      </div>
      <div className="anime-name">
        <h2 dataValue={event.title}>{event.title}</h2>
      </div>
      <div className="redirect-link">
        <button className="downloadButton" onClick={() => handleOpen(event.id)} >
        DOWNLOAD NOW
        </button>
      </div>

    </li>
    })
  : null

    }
  </ul>
</div>
</div>
<FooterFinal BgColor={"#000"}/>
<SuccessStories isOpen={isOpen} onClose={() => setIsOpen(false)}  caseStudyId={caseStudyId} type="whitepaper" ></SuccessStories>
  </div>
  )};

export default WhitePapers;


 
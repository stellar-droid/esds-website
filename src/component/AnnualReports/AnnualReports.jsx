import React, { useEffect, useState } from "react";
import './AnnualReports.css';
import '../WhitePapers/WhitePapers.css'
import gsap from "gsap";
import InnerPageLoader from "../Loader/InnerPageLoader.jsx";
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import Header from "../Header/Header";
import FooterFinal from "../FinalFooter/FooterFinal";
import MobileNavbar from "../Navbar/MonileNavbar";
import { useDispatch } from "react-redux";
const eList = [
    {
        sr_no: "01",
        title:"Financial Year 2022-23",
        download:{
          file:"https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Annual-Report-FY23.pdf",
          name:"https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Annual-Report-FY23.pdf"
        }
    },
    {
        sr_no: "02",
        title:"Financial Year 2021-22",
        download:{
          file:"https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Annual-Report-FY22.pdf",
          name:"https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Annual-Report-FY22.pdf"
        }
    },
    {
        sr_no: "03",
        title:"Financial Year 2020-21",
        download:{
          file:"https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Annual-Report-FY21.pdf",
          name:"https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Annual-Report-FY21.pdf"
        }
    }
    
];


const AnnualReports = () => {
  const [eventsList,setEventsList] = useState(eList)
  const [isOpen,setIsOpen] = useState(false);
  const [downloadFile,setDownloadFile] = useState(null)
  const [fileName,setFileName] = useState('')
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
  },[])
return (
  <div>
    <MobileNavbar />
    {/* <InnerPageLoader /> */}
    <Header />
  <div>

  <div className="bannerWhitepapers">
   <div className="headingText">
   <h2>Investor Reports & Update</h2>
   <p>Financial Highlights and Strategic Overview</p>
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
        <button className="downloadButton" onClick={(e) => {
          e.preventDefault();
          const link = document.createElement('a');
          link.href = event.download.name; 
          link.download = `${event.download.file}`; 
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
            }} >
        {/* <img src={goToIcon} alt="anime-img" className="img-fluid"/> */}
        {/* <FaCircleArrowDown/> */}
        DOWNLOAD NOW
        </button>
      </div>
      {/* <div className="hover-img">
        <img src={event.image} alt="anime-img" className="img-fluid"/>
      </div> */}
    </li>
    })
  : null

    }
  </ul>
</div>
</div>
<FooterFinal BgColor={'#000'} />
  </div>
  )};

export default AnnualReports;


 
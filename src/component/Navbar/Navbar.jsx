import saas_img from '../../images/navbar/SaaS.png'
import Pass_img from '../../images/navbar/PaaS.svg'
import main_center_hologram from '../../images/navbar/hologram.svg'
import Cloud_img from '../../images/navbar/Cloud.svg'
// import ESDS_logo from '../../images/navbar/ESDS_logo.svg'
import DC_colocation from '../../images/navbar/DC-Colocation.svg'
import manage_secu_serv from '../../images/navbar/Manaaged-Security-Services.svg'
import manage_serv from '../../images/navbar/Managed-Services.svg'
import cloud_icon from '../../images/navbar/cloud-icon.svg'
import { IoArrowUpOutline } from "react-icons/io5";
import Tiles from '../../images/navbar/tiles.svg/'
import inner1 from '../../images/navbar/innerNavbarImage/about us.png'
import inner2 from '../../images/navbar/innerNavbarImage/careers.jpg'
import inner3 from '../../images/navbar/innerNavbarImage/events.jpg'
import inner4 from '../../images/navbar/innerNavbarImage/investor reports.jpg'
import inner5 from '../../images/navbar/innerNavbarImage/leadership.jpg'
import inner8 from '../../images/navbar/innerNavbarImage/contact-us.jpg'
import inner6 from '../../images/navbar/innerNavbarImage/why esds.jpg'
import inner7 from '../../images/navbar/innerNavbarImage/white papers.jpg'
import inner9 from '../../images/navbar/innerNavbarImage/certificate-img.jpg'
import './Navbar.css'
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import gsap from 'gsap/all'




export default function NavbarInner() {
    let [whichService, setwhichService] = useState()
    let [arrayNumber ,setArrayNumber] = useState(0)
    let [backorclose, setbackorclose] = useState(true)
    const navigate = useNavigate()
    let subMenuList = [
        [
          
            {
                Name : "Cloud",
                Link : "/cloud-services"
            },
            {
                Name : "Private Cloud",
                Link : "/private-cloud-services"
            },
            {
                Name : "Enterprise Cloud", 
                Link : "/enterprise-cloud-services"
            },
             {
                Name : "BFSI Community Cloud",
                Link : "/bfsi-cloud-services"
            }, 
            {
                Name : "Government Community Cloud", 
                Link : "/government-cloud-services"
            }
        ],
        [
            {
                Name : "Managed Services",
                Link : "/managed-services"
            },
            {
                Name : "DC Migration",
                Link : "/managed-services"
            },
            {
                Name : "Cloud Migration", 
                Link : "/cloud-migration"
            },
             {
                Name : "Cloud MS",
                Link : "/managed-services"
            }, 
            {
                Name : "DBA", 
                Link : "/managed-services"
            }
           
        ],  
        [
            {
                Name : "Managed Security Services",
                Link : "/soc-as-a-service"
            },
            {
                Name : "Managed SOC services",
                Link : "/managed-soc-services"
            },
            {
                Name : "SOAR Services", 
                Link : "/soar-services"
            },
             {
                Name : "Private SOC build & management",
                Link : "/private-soc-build"
            }, 
           
        ],  
        [
            {
                Name : "PaaS",
                Link : "/platform-as-a-service"
            },
            {
                Name : "Disaster Recovery/BCP Management",
                Link : "/platform-as-a-service"
            },
            {
                Name : "Back up as Service", 
                Link : "/baas"
            },
             {
                Name : "Database as a service",
                Link : "/platform-as-a-service"
            }, 
            {
                Name : "WebVPN",
                Link : "/platform-as-a-service"
            },
        ], 
        [
            {
                Name : "Colocation",
                Link : "/colocation-data-centre-services"
            },
            {
                Name : "Bangalore",
                Link : "/colocation-data-centre-services"
            },
            {
                Name : "Nashik", 
                Link : "/colocation-data-centre-services"
            },
             {
                Name : "Mumbai",
                Link : "/colocation-data-centre-services"
            }, 
            {
                Name : "Mohali",
                Link : "/colocation-data-centre-services"
            },   
        ],  
        [
            {
                Name : "SaaS",
                Link : "/software-as-a-service"
            },
            {
                Name : "Low Code No Code",
                Link : "https://lowcodemagic.co.in",
                target : "_blank"
            },
            {
                Name : "Project Management Solution", 
                Link : "https://digitalipas.com",
                target : "_blank"
            },
             {
                Name : "Agritech Services",
                Link : "https://www.famrut.com",
                target : "_blank"
            }, 
            {
                Name : "eNlight 360",
                Link : "https://insight360.cloud",
                target : "_blank"
            },    
        ],  
    ]

    function CursorActivities(span1,span2) {
            document.getElementById("cursorDefault").classList.remove("defaultcursor");
            document.querySelector(".change-action").innerHTML = span1
            document.querySelector(".change-cursor-text").innerHTML = span2
    }
    function CursorToNormal() {
        document.getElementById("cursorDefault").classList.add("defaultcursor")
        document.querySelector(".change-action").innerHTML = ""
            document.querySelector(".change-cursor-text").innerHTML = ""
    }

    function ClickChange(addedclass, num) {
        
        if(whichService == addedclass) {
            // setbackorclose(true)
            document.querySelector(".navbar-innerdiv").classList.remove(addedclass)
            setwhichService()
        }else {
            // setbackorclose(false)
            document.querySelector(".navbar-innerdiv").classList.remove(document.querySelector(".navbar-innerdiv").classList[1])
            document.querySelector(".navbar-innerdiv").classList.add(addedclass)
            setArrayNumber(num)
            setwhichService(addedclass)
        }
    }
    function backArrow() {
        document.querySelector(".navbar").classList.remove(document.querySelector(".navbar").classList[1])
        setbackorclose(true)
    }

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            if(document.getElementById("cursorDefault")) {
                document.getElementById("cursorDefault").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            }
            // document.getElementById("cursorDefault").style.transform = `translateX(${e.clientX}px)`
        })
      }, [])

   useEffect(() => {
    const nav = document.getElementById("nav");

    for(const link of nav.getElementsByTagName("a")) {  
      link.onmousemove = e => {
        const rect = link.getBoundingClientRect(),    
              img = link.querySelector("img");
        
        // img.style.left = `${e.clientX - rect.left}px`;
        // img.style.top = `${e.clientY - rect.top}px`;
      }
    }
    
    window.onmousemove = e => {
      const percent = e.clientY / 1500;
      
      nav.animate({
        transform: `translateY(${percent * nav.offsetHeight * -1}px)`
      }, {
        fill: "forwards",
        duration: 4000
      })
    }
   },[])

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
    
        <div className='navbar'>
            {/* <Loader  centerText={"Navbar"}/> */}
            <div className='navbar-info'>
               <div className='inner-div'>
               {/* <p>Click the logo and services to explore the possibilities</p> */}
              
                               </div>
            </div>
            <div className='Cancle-btn'>{backorclose ?<div onClick={() => {navigate(-1)}}> <RxCross2 /></div> : <div className='back-to-navbar' onClick={backArrow}><IoArrowBack />Back</div>}</div>
        <div className='radial-grad'>
            {/* <img src={navbar_bg} alt="" /> */}
        </div>
        <div id="cursorDefault" className="cursorDefault defaultcursor"><span className="change-action"></span>
     <span className='change-cursor-text'></span>
     </div>
            <div className='inner-navbar-list'>
                <nav id="nav">
                     <Link to={'/about-esds'}>
                        <span>About Us</span>
                        <img src={inner1} alt='About Us' />
                    </Link>
                     <Link target='_blank' to={'https://www.esds.co.in/esds-peoples/careers/'}>
                        <span>Careers</span>
                        <img src={inner2} alt='Careers' />
                    </Link>
                     <Link to={'/why-esds'}>
                        <span>Why ESDS</span>
                        <img src={inner6} alt='Why ESDS' />
                    </Link>
                    <Link to={'/certificate'}>
                        <span>Compliances & Certificates</span>
                        <img src={inner9} alt='Why ESDS' />
                    </Link>
                     <Link to={'/whitepapers '}>
                        <span>White Papers</span>
                        <img src={inner7} alt='White Papers' />
                    </Link>
                     <Link target='_blank' to={'https://www.esds.co.in/esds-peoples/news-events/'}>
                        <span>Media & Events</span>
                        <img src={inner3} alt='Media & Events' />
                    </Link>
                     <Link to={'/investors'}>
                        <span>Investor Report</span>
                        <img src={inner4} alt='Investor Report' />
                    </Link>
                    <Link to={'/leadership'}>
                        <span>Leadership </span>
                        <img src={inner5} alt='Leadership'/>
                    </Link>
                    <Link to={'/contact-us'}>
                        <span>Contact Us </span>
                        <img src={inner8} alt='Contact Us' />
                    </Link>
                </nav>
            </div>
            <section className="navbar-innerdiv">
                <div className='right-border-of-card'>
                    <div className='right-Sublist'>
                        <div className='list'>
                            {

                                subMenuList[arrayNumber].map((text, index) => {
                                    return (

                                        <a key={index} href={text.Link}>
                                            <div className='Item'>
                                                <div className='cloud-icon'><img src={cloud_icon} alt="" /></div>
                                                <div className='text'>{text.Name}</div>
                                                <IoArrowUpOutline className='sub-svg-icon' />
                                            </div>
                                        </a>)

                                })

                            }

                        </div>
                    </div>
                </div>
                <div className='Left-border-of-card'>
                    <div className='Left-Sublist'>
                        <div className='list'>
                            {

                                subMenuList[arrayNumber].map((text, index) => {
                                    return (<Link to={text.Link} target={text.target} key={index}> <div className='Item' >
                                        {<div className='cloud-icon'><img src={cloud_icon} alt="" /></div>}
                                        <div className='text'>{text.Name}</div>
                                        <IoArrowUpOutline />
                                    </div></Link>)

                                })

                            }

                        </div>
                    </div>
                </div>
                <div className='list-services' onClick={() => {
                    if (document.querySelector(".navbar").classList.contains("navbar-scale")) {
                        setbackorclose(true)
                    } else {
                        setbackorclose(false)
                    }
                    document.querySelector(".navbar").classList.length == 1 ? 
                      document.querySelector(".navbar").classList.add("navbar-scale")               
                    : 
                    document.querySelector(".navbar").classList.remove(document.querySelector(".navbar").classList[1])

                }}>
                    <div class="line" ref={(el) => (linesRef.current[0] = el)}>
                        About us
                    </div>
                    <div class="line" ref={(el) => (linesRef.current[1] = el)}>
                       Why ESDS
                    </div>
                    <div class="line" ref={(el) => (linesRef.current[2] = el)}>
                       Leadership
                    </div>
                    <div class="line" ref={(el) => (linesRef.current[3] = el)}>
                       Certificates
                    </div>
                    <div class="line" ref={(el) => (linesRef.current[4] = el)}>
                       Careers
                    </div>
                    <div class="line" ref={(el) => (linesRef.current[5] = el)}>
                       Media & Events
                    </div>
                </div>
                {/* <div className='center-hologram' onMouseOver={() => {
                    if (document.querySelector(".navbar").classList.contains("navbar-scale")) {
                        CursorActivities("Click to", "Go Back")
                    } else {
                        CursorActivities("Click &", "Explore")
                    }

                }} onMouseLeave={() => {
                    CursorToNormal()
                }} onClick={() => {
                    if (document.querySelector(".navbar").classList.contains("navbar-scale")) {
                        CursorActivities("Click &", "Explore")
                        setbackorclose(true)
                    } else {
                        CursorActivities("Click to", "Go Back")
                        setbackorclose(false)
                    }
                    document.querySelector(".navbar").classList.length == 1 ? 
                      document.querySelector(".navbar").classList.add("navbar-scale")               
                    : 
                    document.querySelector(".navbar").classList.remove(document.querySelector(".navbar").classList[1])

                }}>
                    <img src={main_center_hologram} alt="" />
                </div>
                <div className='center-logo-svg' onMouseOver={() => {
                    if (document.querySelector(".navbar").classList.contains("navbar-scale")) {
                        CursorActivities("Click to", "Go Back")
                    } else {
                        CursorActivities("Click &", "Explore")
                    }

                }} onMouseLeave={() => {
                    CursorToNormal()
                }} onClick={() => {
                    if (document.querySelector(".navbar").classList.contains("navbar-scale")) {
                        CursorActivities("Click &", "Explore")
                        setbackorclose(true)
                    } else {
                        CursorActivities("Click to", "Go Back")
                        setbackorclose(false)
                    }
                    document.querySelector(".navbar").classList.length == 1 ? document.querySelector(".navbar").classList.add("navbar-scale") : document.querySelector(".navbar").classList.remove(document.querySelector(".navbar").classList[1])

                }}>
                    <img src={Navabr_logo_3D} alt="" />
                </div> */}
                <div className="left-center-tiles-beam">
                    <div className='left-center-tiles'>
                        <img src={Tiles} alt="left-center-tiles" />
                    </div>
                    <div className="DC-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                </div>
                <div className="right-center-tiles-beam">
                    <div className='right-center-tiles'>
                        <img src={Tiles} alt="right-center-tiles" />
                    </div>
                    <div className="MSS-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                </div>
                <div className='right-tiles-beam'>
                    <div className='right-bottom-tiles'>
                        <img src={Tiles} alt="right-bottom-tiles" />
                    </div>
                    <div className="Right-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                    <div className="MS-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                </div>
                <div className='bottom-beam'>
                    <div className='left-top-tiles'>
                        <img src={Tiles} alt="left-top-tiles" />
                    </div>
                    <div className="Bottom-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                    <div className="Saas-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                </div>
                <div className='top-beams'>
                    <div className='left-bottom-tiles'>
                        <img src={Tiles} alt="left-bottom-tiles" />
                    </div>
                    <div className="Top-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                    <div className="Paas-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                </div>
                <div className="left-beam">
                    <div className='right-top-tiles'>
                        <img src={Tiles} alt="right-top-tiles" />
                    </div>
                    <div className="Left-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                    <div className="C-three-beam">
                        <div className="beam-line-static"><span></span></div>
                        <div className="beam-line2-static"><span></span></div>
                        <div className="beam-line3-static"><span></span></div>
                    </div>
                </div>
                <div className="SaaS" onClick={() => { ClickChange("Saas-scale", 5) }} onMouseOver={() => {
                    if (document.querySelector(".navbar-innerdiv").classList.contains("Saas-scale")) {
                        CursorActivities("Click &", "Go Back")
                    } else {
                        CursorActivities("Click &", "View")
                    }
                }} onMouseLeave={() => { CursorToNormal() }}>
                    <div className='title'>SaaS</div>
                    <div className='Saas-img'>
                        <img src={saas_img} alt="SaaS" />
                    </div>
                </div>
                <div className="PaaS" onClick={() => { ClickChange("Paas-scale", 3) }} onMouseOver={() => {
                    if (document.querySelector(".navbar-innerdiv").classList.contains("Paas-scale")) {
                        CursorActivities("Click &", "Go Back")
                    } else {
                        CursorActivities("Click &", "View")
                    }

                }} onMouseLeave={() => { CursorToNormal() }}>
                    <div className='title'>PaaS</div>
                    <div className='Paas-img'>
                        <img src={Pass_img} alt="PaaS" />
                    </div>
                </div>
                <div className="Cloud-service" onClick={() => { ClickChange("Cloud-scale", 0) }} onMouseOver={() => {
                    if (document.querySelector(".navbar-innerdiv").classList.contains("Cloud-scale")) {
                        CursorActivities("Click &", "Go Back")
                    } else {
                        CursorActivities("Click &", "View")
                    }
                }} onMouseLeave={() => { CursorToNormal() }}>
                    <div className='title'>Cloud</div>
                    <div className='cloud-img'>
                        <img src={Cloud_img} alt="Cloud" />
                    </div>
                </div>
                <div className="DC-colocation" onClick={() => { ClickChange("DC-scale", 4) }} onMouseOver={() => {
                    if (document.querySelector(".navbar-innerdiv").classList.contains("DC-scale")) {
                        CursorActivities("Click &", "Go Back")
                    } else {
                        CursorActivities("Click &", "View")
                    }

                }} onMouseLeave={() => { CursorToNormal() }}>
                    <div className='title'>DC <br></br>Colocation</div>
                    <div className='dc-img'>
                        <img src={DC_colocation} alt="Colocation" />
                    </div>
                </div>
                <div className="Managed-security-services" onClick={() => { ClickChange("manage-security-scale", 2) }} onMouseOver={() => {
                    if (document.querySelector(".navbar-innerdiv").classList.contains("manage-security-scale")) {
                        CursorActivities("Click &", "Go Back")
                    } else {
                        CursorActivities("Click &", "View")
                    }

                }} onMouseLeave={() => { CursorToNormal() }}>
                    <div className='title'>Managed <br /> Security  Services</div>
                    <div className='manage-security-img'>
                        <img src={manage_secu_serv} alt="Managed Security  Services" />
                    </div>
                </div>
                <div className="Managed-services" onClick={() => { ClickChange("manage-services-scale", 1) }} onMouseOver={() => {
                    if (document.querySelector(".navbar-innerdiv").classList.contains("manage-services-scale")) {
                        CursorActivities("Click &", "Go Back")
                    } else {
                        CursorActivities("Click &", "View")
                    }
                }} onMouseLeave={() => { CursorToNormal() }}>
                    <div className='title'>Managed <br></br> Services</div>
                    <div className='manage-service-img'>
                        <img src={manage_serv} alt="Managed Services" />
                    </div>
                </div>
            </section>
            
        </div>
    
    )
}
import './Leadershiptwo.css'
import { lazy, useEffect, useLayoutEffect, useState } from 'react'
import loader_bg from '../../images/leaders/loader-background.png'

import gsap from 'gsap'
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import komal_somani from '../../images/leaders/cover-page-komal-somani.png'
import { FiLinkedin } from "react-icons/fi";
import pamela_kumar_new from '../../images/leaders/cover-page-pamela-kumar.png'
import alipt_sharma_new from '../../images/leaders/cover-page-alipt-sharma.png'
import vanktesh_natrajan_new from '../../images/leaders/cover-page-venkatesh-natrajan.png'
import MobileNavbar from '../Navbar/MonileNavbar.jsx'
import Header from '../Header/Header.jsx'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import komal_innerpage1 from '../../images/leaders/Komal-Inner-Page1.png'
import komal_innerpage2 from '../../images/leaders/Komal-Inner-Page2.png'
import piyush_tedx from '../../images/leaders/boss-innerpage1.png'
import piyush_meditation from '../../images/leaders/boss-innerpage2.png'
import piyush_marathon from '../../images/leaders/boss-innerpage4.png'
import rishi from '../../images/leaders/cover-page-rushi-jadhav.png'
import MyAlbum from './Leadership';
import Rajeev1 from '../../images/leaders/rajeev-barnwal.png'
import Rajeev2 from '../../images/leaders/rajeev_second_frame.png'
import mobile_rajeev from '../../images/leaders/mobile-rajeev-innerpage.png'
import jindra_page2 from '../../images/leaders/Jitendra-pathak-inner-page1.png'
import piyuh_swimm from '../../images/leaders/boss-innerpage3.png'
import dhandapani from '../../images/leaders/cover-page-dhandhapani.png'
import Sameer from '../../images/leaders/cover-page-sameer-redij.png'
import ramaiha from '../../images/leaders/cover-page-sita-ramaiah.png'
import piyush_somani from '../../images/leaders/coverPage-piyush-somani.png'
import Jitendra from '../../images/leaders/jitendra-pathak.png'
import { FiFacebook } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import piyush_somani2 from '../../images/leaders/inner-page-piyush-somani2.png'
import piyush_somani3 from '../../images/leaders/inner-page-piyush-somani3.png'
import piyush_somani4 from '../../images/leaders/inner-page-piyush-somani4.png'
import komal_somani1 from '../../images/leaders/inner-page-komal-somani1.png'
import komal_somani2 from '../../images/leaders/inner-page-komal-somani2.png'
import kp1 from '../../images/leaders/inner-page-kp1.png'
import kp2 from '../../images/leaders/inner-page-kp2.png'
import kp3 from '../../images/leaders/inner-page-kp3.png'
import Jitendra3 from '../../images/leaders/inner-page-Jitendra3.png'
import Slider from "react-slick";
import { ScrollToPlugin } from 'gsap/all'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




export default function Leadershiptwo() {
    // Mobile Leaders slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    // Mobile Leaders slider End

    let [gradient, setgradient] = useState(false)
    let [whichSlide, setwhichSlide] = useState(1)
    let [execslide, setexecslide] = useState(1)
    let [BoardshowList, setBoardshowList] = useState(true)
    let [ExecshowList, setExecshowList] = useState(false)
    let [boardSection, setboardSection] = useState(true)
    let [execSection, setexecSection] = useState(false)
    let [currentLeader, setcurrentLeader] = useState("piyush")
    let piyushimg = [piyush_tedx, piyuh_swimm, piyush_meditation, piyush_marathon]
    let komalimg = [komal_innerpage1, komal_innerpage2]
    let rajeevimg = [Rajeev2]
    let jintendraimg = [jindra_page2]

    const demoState = useSelector(state => state.DemoState);

    //Leader loader animation 
    useLayoutEffect(() => {
        document.body.style.overflow = "hidden"
        gsap.fromTo(".top-center-text", { opacity: 0.2, x: "-25vw" }, { opacity: 1, x: 0, duration: 1.8, ease: "power2.inOut", })
        gsap.fromTo(".center-text", { opacity: 0.2, x: "25vw", }, { opacity: 1, x: 0, duration: 1.8, ease: "power2.inOut", })
        gsap.fromTo(".upper-div", { y: 0 }, { delay: 4, y: "-1000vw", duration: 1.2, ease: "power3.inOut", })
        gsap.fromTo(".lower-div", { y: 0 }, { delay: 4, y: "1000vw", duration: 1.2, ease: "power3.inOut",onComplete : () => {document.body.style.overflow = "visible"} })
      
    }, [])

    const dispatch = useDispatch();

    //right bottom slider list functionality 
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
    
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power2.inOut"
        });
        document.querySelectorAll(".slide").forEach((e) => {
            setwhichSlide(1)
            setexecslide(1)
            gsap.to(".prev-btn", { display: "none" })
            e.addEventListener("click", () => {
                setcurrentLeader(e.classList[0])
                dispatch({ type: demoActions.SLIDER_CHNAGE, payload: e.id })
                if (e.parentElement.id == "board-m-slide") {
                    setwhichSlide(Number(e.id) + 1)
                }
                else {
                    setexecslide(Number(e.id) + 1)
                }
                if (e.classList.contains("slide-active")) {

                } else {
                    document.querySelector(".slide-active").classList.remove("slide-active")
                    e.classList.add("slide-active")
                }
            })
        })

        document.querySelectorAll(".toggle-btn").forEach((e) => {
            e.addEventListener("click", () => {
                
                setTimeout(() => {
                    if (e.classList[1] == "board-memeber") {
                        setboardSection(true)
                        setexecSection(false)
                        setcurrentLeader("piyush")
                    } else {
                        setboardSection(false)
                        setexecSection(true)
                        setcurrentLeader("Jitendra")
                    }
                    if (e.classList[2] == "board-m-slide") {
                        setBoardshowList(true)
                        setExecshowList(false)
                    } else {

                        setBoardshowList(false)
                        setExecshowList(true)
                    }
                }, 1000);

                if (e.classList.contains("active-toggle-btn")) {

                } else {
                    gsap.to(".upper-div", { y: "0", duration: 0.8, ease: "power3.inOut", })
                    gsap.to(".lower-div", { y: "0", duration: 0.8, ease: "power3.inOut", })
                    gsap.to(".upper-div", { delay: 2, y: "-50vw", duration: 1.2, ease: "power3.inOut", })
                    gsap.to(".lower-div", { delay: 2, y: "50vw", duration: 1.2, ease: "power3.inOut", })
                    document.querySelector(".active-toggle-btn").classList.remove("active-toggle-btn")
                    e.classList.add("active-toggle-btn")
                    dispatch({ type: demoActions.SLIDER_INFO, payload: [
                        { id: 1, name: "piyush", page_no: 0 },
                        { id: 2, name: "komal", page_no: 0 },
                        { id: 3, name: "rajeev", page_no: 0 },
                        { id: 4, name: "Jitendra", page_no: 0 }
                      ] })
                }

            })
        })
    }, [BoardshowList, ExecshowList])

    //slide hide and show functionality 
    useEffect(() => {

        let slideNumber = document.querySelector(".slide-active").id
        let leader_card = document.querySelectorAll(".whole-bg-gradient")[slideNumber]
        document.querySelectorAll(".whole-bg-gradient").forEach((e) => {
            e.style.opacity = 0
            e.style.zIndex = -1;
        })
        leader_card.style.opacity = 1;
        leader_card.style.zIndex = 2;
    }, [whichSlide, boardSection, execSection, execslide])

    //sidebar of Borard memeber and executive hide and show on various condition
    useEffect(() => {
        console.log(demoState.slide_info)
        demoState.slide_info.map((i) => {
            if(i.name == currentLeader) {
                if(i.page_no >= 1) {
                    document.querySelector(".side-toggle").style.display = "none"
                } else {
                    document.querySelector(".side-toggle").style.display = "flex"
                }
            }else if(currentLeader == "slide") {
                document.querySelector(".side-toggle").style.display = "flex"   
            }
        })
       
    }, [demoState.slide_info,currentLeader])


    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])


        const [isLoaded, setIsLoaded] = useState({});
      
        const handleImageLoad = (key) => {
          setIsLoaded((prevState) => ({
            ...prevState,
            [key]: true,
          }));
        };

        
        const renderImageWithSkeleton = (src, alt, key) => (
          <div>
          {!isLoaded[key] &&  <SkeletonTheme baseColor="#f0f0f0" 
  highlightColor="#e0e0e0">
            <Skeleton height={"60vh"} width={"100%"} style={{position : "relative"}} />
            </SkeletonTheme>}
            <img
              src={src}
              alt={alt}
              style={isLoaded[key] ? {} : { display: 'none' }}
              onLoad={() => handleImageLoad(key)}
            />
          </div>
        );


    return (
        <div>
            <MobileNavbar />
            <Header />
            <section className="loader-full">
                <div className='upper-div'>
                   <p className='image-text top-center-text'>Passionate Leaders</p>
                </div>
                <div className="lower-div">
                   <p className='image-text1 center-text'>Inspiring Vision</p>
                </div>
            </section>
            <div className='leadership-page'>
                {/* <Header /> */}
             


                <div className='side-toggle'>
                    <div className='two-btn-toggle'>
                        <div className='toggle-btn board-memeber board-m-slide active-toggle-btn'><span>Board members ({whichSlide}/6)</span></div>
                        <div className='toggle-btn  executive-leadership executive-m-slide'><span>Executive Leadership({execslide}/5)</span></div>
                    </div>
                </div>
                {BoardshowList && <div id='board-m-slide' className="leader-slider-list">
                    <div id='0' className='piyush slide box-1 slide-active'>

                    </div>
                    <div id='1' className='komal slide box-2' >

                    </div>
                    <div id='2' className='slide box-3 '>

                    </div>
                    <div id='3' className='slide box-4'>

                    </div>
                    <div id='4' className='slide box-5'>

                    </div>
                    <div id='5' className='slide box-6'>

                    </div>
                </div>}
                {ExecshowList && <div id='executive-m-slide' className="executive-slider-list">
                   
                    <div id='0' className='Jitendra slide exec-box-2 KP slide-active'>

                    </div>
                    <div id='1' className='slide exec-box-3 Jitendra'>

                    </div>
                    <div id='2' className='rajeev slide exec-box-1 '>

                    </div>
                    <div id='3' className='slide exec-box-4'>

                    </div>
                    <div id='4' className='slide exec-box-5'>

                    </div>
                    
                   
                </div>}
               
                {boardSection && <section id='board-memeber' className='Board-member'>
                    {/* -------------------------Piyush Somani magazine---------------- */}
                    <section className='whole-bg-gradient piyush-magazine' >
                        {demoState.slide_info[0].page_no != 0 ? <div className="previoues-btn">Previous</div> : null}
                        {demoState.slide_info[0].page_no != 4 ? <div className='next-btn'>Next</div> : null}
                        <MyAlbum img1={piyush_somani} leader_name = {"piyush"} magazinearray={piyushimg} instalink={"https://www.instagram.com/somani_piyush/"} linkedlink={"https://www.linkedin.com/in/piyushsomani/"} facebooklink={"https://www.facebook.com/piyush.somani1"} twitterlink={"https://x.com/ESDSPiyush"} altTag={"Piyush Somani"} />
                    </section>

                    {/* --------------------------------end ----------------------------------- */}
                    {/* -------------------------Komal Somani magazine---------------- */}
                   
                    <section className='whole-bg-gradient'>
                        
                        {demoState.slide_info[1].page_no != 0 ? <div className="previoues-btn">Previous</div> : null}
                        {demoState.slide_info[1].page_no != 2 ? <div className='next-btn'>Next</div> : null}
                        <MyAlbum img1={komal_somani} magazinearray={komalimg} leader_name = {"komal"} linkedlink={"https://www.linkedin.com/in/komal-somani-8726bb55/"} facebooklink={"https://www.facebook.com/komal.z.somani?mibextid=ZbWKwL"} altTag={"Komal Somani"} />
                    </section>
                    {/* --------------------------------end ----------------------------------- */}

                    {/* -------------------------Pamela Kumar magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={pamela_kumar_new} alt="Pamela Kumar" />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                        <Link to={"https://www.linkedin.com/in/pamela-kumar-8b51124/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* --------------------------------end ----------------------------------- */}

                    {/* -------------------------Alpit Sharma magazine---------------- */}
                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={alipt_sharma_new} alt="Alpit Sharma" />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                        <Link to={"https://www.linkedin.com/in/alipt-sharma-276972/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* --------------------------------end ----------------------------------- */}

                    {/* -------------------------Dhandapani T.G. magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={dhandapani} alt="Dhandapani T.G" />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                        <Link to={"https://www.linkedin.com/in/t-g-dhandapani-b624708/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* --------------------------------end ----------------------------------- */}

                    {/* -------------------------Venkatesh Natarajan magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={vanktesh_natrajan_new} alt="Venkatesh Natarajan" />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                    
                                        <Link to={"https://www.linkedin.com/in/venkatesh-natarajan-558aa117/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* --------------------------------end ----------------------------------- */}

                </section>}
                {execSection && <section id='executive-leadership' className='Executive-member'>
                    {/* -------------------------Jitendra Pathak magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        
                        {demoState.slide_info[3].page_no != 0 ? <div className="previoues-btn">Previous</div> : null}
                        {demoState.slide_info[3].page_no != 1 ? <div className='next-btn'>Next</div> : null}
                        <MyAlbum img1={Jitendra} magazinearray={jintendraimg} leader_name = {"Jitendra"} linkedlink={"https://www.linkedin.com/in/jitendrapathakin/"} altTag={"Jitendra Pathak"} />
                    </section>
                    {/* --------------------------------end ----------------------------------- */}
                    {/* -------------------------Rishsikesh jadhav magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={rishi} alt="Rishikesh Jadhav" />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                        <Link to={"https://www.linkedin.com/in/rushikeshjadhav/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                    {/* --------------------------------end ----------------------------------- */}
                     {/* -------------------------Rajeev Barnwal magazine---------------- */}

                     <section className='whole-bg-gradient'>
                        {demoState.slide_info[2].page_no != 0 ? <div className="previoues-btn">Previous</div> : null}
                        {demoState.slide_info[2].page_no != 1 ? <div className='next-btn'>Next</div> : null}
                        <MyAlbum img1={Rajeev1} magazinearray={rajeevimg} leader_name = {"rajeev"} linkedlink={"https://www.linkedin.com/in/rajeevbarnwal/"} twitterlink={"https://x.com/rajeevkuma11?t=hMA1LT3zstCfdfwFz7iD-g&s=09"} altTag={"Rajeev Barnwal"} />
                    </section>
                    {/* --------------------------------end ----------------------------------- */}
                    {/* -------------------------Sameer Redij magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={Sameer} alt="Sameer Redij" />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                       <Link to={"https://www.linkedin.com/in/sameerredij/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* --------------------------------end ----------------------------------- */}
                    {/* -------------------------Ramaiah Sita N. magazine---------------- */}

                    <section className='whole-bg-gradient'>
                        <div className='card-outline'>
                            <img className='' src={ramaiha} alt="Ramaiah Sita N." />
                            <div className='social-media-new'>
                                <div className='social-mediaIcon'>
                                    <p className='social-media'>
                                        <Link to={"https://www.linkedin.com/in/ramaiah-sita-nadukuru-38960022/"} target='_blank' className='linkedin'><FiLinkedin /></Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* --------------------------------end ----------------------------------- */}
                    {/* -------------------------Sajiv Nair magazine---------------- */}
{/* 
                   
                    {/* --------------------------------end ----------------------------------- */}
                </section>}
            </div>

            <div className='leadership-page-mobile'>
              
                <div className='mobileleadership'>
                    <h2>- Board members (1/6)</h2>
                    {/* Piyush Somani */}
                    <div className='leadership1'>
                        <div className="slider-container mt_15">
                            <Slider {...settings}>
                                {renderImageWithSkeleton(piyush_somani, "Piyush Somani", "piyush_somani")}
                                {renderImageWithSkeleton(piyush_somani2, "Piyush Somani 2", "piyush_somani2")}
                                {renderImageWithSkeleton(piyush_somani3, "Piyush Somani 3", "piyush_somani3")}
                                {renderImageWithSkeleton(piyush_somani4, "Piyush Somani 4", "piyush_somani4")}
                            </Slider>
                        </div>

                        <div className='nameInfo'>
                            <ul>
                                <li><Link
                                    to={"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fsomani_piyush%2F&is_from_rle"}
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

                                </Link></li>
                                <li><Link to={"https://x.com/ESDSPiyush"} target='_blank' className='twitter'><FaXTwitter /></Link></li>

                                <li><Link to={"https://www.linkedin.com/in/piyushsomani/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                                <li><Link to={"https://www.facebook.com/piyush.somani1"} target='_blank' className='facebook'><FiFacebook /></Link></li>

                            </ul>
                        </div>
                    </div>
                    {/* Komal Somani */}
                    <div className='leadership1'>
                        <div className="slider-container mt_15">
                            <Slider {...settings}>
                            {renderImageWithSkeleton(komal_somani, "Komal Somani", "Komal_somani")}
                            {renderImageWithSkeleton(komal_somani1, "Komal Somani 2", "Komal_somani2")}
                            {renderImageWithSkeleton(komal_somani2, "Komal Somani 3", "Komal_somani3")}
                            </Slider>
                        </div>

                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/komal-somani-8726bb55/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                                <li><Link to={"https://www.facebook.com/komal.z.somani?mibextid=ZbWKwL"} target='_blank' className='facebook'><FiFacebook /></Link></li>

                            </ul>
                        </div>
                    </div>
                    {/* Pamela Kumar */}
                    <div className='leadership1'>
                         {renderImageWithSkeleton(pamela_kumar_new, "pamela kumar", "pamela_kumar")}

                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/pamela-kumar-8b51124/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Alipt Sharma */}
                    <div className='leadership1'>
                    {renderImageWithSkeleton(alipt_sharma_new, "alpit sharma", "alpit_sharma")}
                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/alipt-sharma-276972/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Dhandhapani T.G */}
                    <div className='leadership1'>
                    {renderImageWithSkeleton(dhandapani, "dhanpani", "dhanpani")}
                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/t-g-dhandapani-b624708/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Vanktesh Natrajan */}
                    <div className='leadership1'>
                        {renderImageWithSkeleton(vanktesh_natrajan_new, "vanktesh natrajan", "vanktesh_natrajan")}
                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/venkatesh-natarajan-558aa117/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>

                    <h2 className='mt_45'>- Executive Leadership(1/6)</h2>

                    {/* Jitendra Pathak*/}
                    <div className='leadership1'>
                        <div className="slider-container mt_15">
                            <Slider {...settings}>
                            {renderImageWithSkeleton(Jitendra, "jitendra pathak", "jitendra_pathak")}
                            {renderImageWithSkeleton(Jitendra3, "jintendra pathak 1", "jitendra_pathak1")}
                            </Slider>
                        </div>

                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/jitendrapathakin/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Rushikesh Jadhav*/}
                    <div className='leadership1'>
                    {renderImageWithSkeleton(rishi, "rishikesh jadhav", "rishikesh_jadhav")}

                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/rushikeshjadhav/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                 {/* Rajeev Barnwal */}
                    <div className='leadership1'>
                        <div className="slider-container mt_15">
                            <Slider {...settings}>
                                {renderImageWithSkeleton(Rajeev1, "Rajeev barnwal", "rajeev_barnwal")}
                                {renderImageWithSkeleton(mobile_rajeev, "Rajeev barnwal", "rajeev_barnwal2")}
                            </Slider>
                        </div>

                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/rajeevbarnwal/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                                <li><Link to={"https://x.com/rajeevkuma11?t=hMA1LT3zstCfdfwFz7iD-g&s=09"} target='_blank' className='twitter'><FaXTwitter /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*Sameer redij*/}
                    <div className='leadership1'>
                       {renderImageWithSkeleton(Sameer, "sameer redij", "sameer_redij")}
                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/sameerredij/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>

                    {/*Sita Ramaiah*/}
                    <div className='leadership1'>
                    {renderImageWithSkeleton(ramaiha, "sitaramaiha", "sitaramaiha")}
                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/ramaiah-sita-nadukuru-38960022/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Sajiv Nair*/}
                    {/* <div className='leadership1'>
                        <img src={sajiv} alt="Sajiv Nair" className='mt_15' />
                        <div className='nameInfo'>
                            <ul>
                                <li><Link to={"https://www.linkedin.com/in/sajiv-nair-b4ab828/"} target='_blank' className='linkedin'><FiLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
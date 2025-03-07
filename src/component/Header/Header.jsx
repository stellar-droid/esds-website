import { Link, useNavigate } from 'react-router-dom'
import Navabr_logo_3D from '../../images/navbar/ESDS 3D Logo.png'
import './Header.css'
import menuSVG from '../../images/mobile-menu-icon.svg'
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import gsap from 'gsap'



export default function Header() {
    let navigate = useNavigate()
    
  

    const dispatch = useDispatch();
    const demoState = useSelector(state => state.DemoState);
    // useEffect(() => {
    //     setStateUpdate(demoState.navbar)
    // },[])
    function updateNavbarState() {
           if(demoState.navbar) {
            dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
           }
           else {
            dispatch({type:demoActions.UPDATE_NAVBAR,payload:true})
           }
       
    }

    function logoAction() {
        navigate('/');

        gsap.to(window, {
            scrollTo:0,
            duration: 1,
            ease: "power2.inOut"
          });
          dispatch({type:demoActions.UPDATE_NAVBAR,payload:false});
    }
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-inner">
                    <div onClick={() => logoAction()} className="logo"><img src={Navabr_logo_3D} alt="Logo" /></div>
                   {window.innerWidth > 1024 ?  <Link to={"/navbar"} className='menu'>Menu</Link> :  <button onClick={() => updateNavbarState()}  ><img src={menuSVG} alt="menu" /></button>}
                </div>
            </div>
        </div>
    )
}
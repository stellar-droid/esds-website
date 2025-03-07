import { useLayoutEffect, useMemo } from 'react'
import leftserver from '../../images/leftserver.png'
import gsap from 'gsap';
import laptop from '../../images/laptop.png'

export default function ForthBannerServer() {

    return (
    <>
    <div id='forth_banner_server' className="forth_banner_server">
        <div className="left_server" >
          <img loading='lazy' src={leftserver} alt="server" />
        </div>
        <div className='laptop'>
            <img loading='lazy' src={laptop} alt="laptop" />
        </div>
        <div className="right_server" >
        <img loading='lazy' src={leftserver} alt="server" />
        </div>
        </div>
    </>
        

    )
}
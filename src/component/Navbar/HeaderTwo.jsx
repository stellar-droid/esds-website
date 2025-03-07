import Navabr_logo_3D from '../../images/navbar/ESDS 3D Logo.png'
import { Link } from 'react-router-dom'
import {  useNavigate } from "react-router-dom"

export default function HeaderTwo() {
    const navigate = useNavigate()
    return (
        <>
            <div className="Fixed-top">
                <div className="Logo">
                    <img src={Navabr_logo_3D} alt="" />
                </div>
                <div className='menu' onClick={() => {
                        navigate('/Menu')
                }}>
                  <div>

                    MENU
                  </div>
                  
                </div>
            </div>
        </>
    )
}
import { useEffect } from 'react'
import thankImage from '../../images/thankyou.png'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'
export default function ThankYou() {
    let navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 8000);
    },[])
    return (
        <div className='Thank-you-container'>
            <div className="heading">
                <h3>Your Vision, Our Cloud Solutions.</h3>
                <p>Thank you for choosing ESDS. We're excited to connect with you ! You'll hear from us shortly. </p>
            </div>
            <div className="center-img">
                <img src={thankImage} alt="" />
            </div>
            <div className="last-line">Enabling Your Futurability</div>
        </div>
    )
}
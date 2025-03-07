import './ContactPage.css' 
import Select from 'react-select'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import getintouch_bg from "../../images/getin_touch_bg.svg"
import NashikDC from '../../images/colocation/Nashik.png'
import mumbaiDC from '../../images/colocation/mumbai.png'
import bengaluruDC from '../../images/colocation/banglore.png'
import mohaliDC from '../../images/colocation/mohali.png'
import airoliDC from '../../images/colocation/airoli.png'
import InputField from './InputField.jsx'
import Header from '../Header/Header';
import MobileNavbar from '../Navbar/MonileNavbar.jsx';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import axios from 'axios';
import Swal from 'sweetalert2';
import { ScrollToPlugin } from 'gsap/all';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import FooterFinal from '../FinalFooter/FooterFinal.jsx';
// import SuccessStories from '../Success Stories/SuccessStories.jsx'
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import ContactServer from './ContactServer.jsx';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: 'white',
        fontSize: 'clamp(2.15rem, -1.182rem + 2.454vw, 2.563rem)',
    }),

};


export default function ContactPage() {

    const [open, setOpen] = React.useState(false);
    let [disabledbtn, setDissabledbtn]  = useState(false)
    const handleClose = () => {
        setOpen(false);
    };
    gsap.registerPlugin(ScrollToPlugin);
    const handleOpen = () => {
        setOpen(true);
    };
    let navigate = useNavigate()
     const dispatch = useDispatch();
          

    useLayoutEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power2.inOut"
        });
    }, [])

    function showDCImage(divName) {
      document.querySelector(`.${divName}`).style.transform = "scale(1.3)"
       
    }
    function hideDCImage(divName) {
       document.querySelector(`.${divName}`).style.transform = "scale(0)"
     }
    const options = [
        { value: '', label: '--Service Request--' },
        { value: 'Cloud Services ', label: 'Cloud Services ' },
        { value: 'Managed Services ', label: 'Managed Services ' },
        { value: 'Managed Security Services ', label: 'Managed Security Services ' },
        { value: 'Colocation Services ', label: 'Colocation Services ' },
        { value: 'Software as a Service ', label: 'Software as a Service ' },
        { value: 'Platform as a Service ', label: 'Platform as a Service ' },
        { value: 'Other', label: 'other' },
    ]

    const [formValues, setFormValues] = useState({
        fullName: '',
        companyName: '',
        businessEmail: '',
        jobTitle: '',
        contact: '',
        lookingFor: '',
        selectedOption: '' || null || [],
        recaptcha: false,

    });

    const [errors, setErrors] = useState({
        fullName: '',
        companyName: '',
        businessEmail: '',
        jobTitle: '',
        contact: '',
        lookingFor: '',
        selectedOption: '',
        recaptcha: '',


    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const recaptchaRef = useRef();

    const [touched, setTouched] = useState({});
    const [isPlaceholderActive, setIsPlaceholderActive] = useState(false);


    useEffect(() => {
        document.querySelectorAll(".input-text").forEach((ele) => {

            ele.addEventListener("click", (e) => {
                e.target.previousSibling.style.transform = "translateY(0)"
                e.target.previousSibling.style.fontSize = "calc(clamp(0.625rem, 0.559vw + 0.266rem, 0.938rem))"
            })

            ele.addEventListener("blur", (e) => {
                if (e.target.value == "") {
                    e.target.previousSibling.style.transform = "translateY(2vw)"
                    e.target.previousSibling.style.fontSize = "calc(clamp(2.15rem, 2.454vw - 1.182rem, 2.563rem))"
                }
            })
        })
    }, [])


    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        setFormValues((prevData) => ({
            ...prevData,
            recaptcha: !!value,
        }));
        if(value === true){
            setErrors({recaptcha: ''})
        }
    };

    const handleSelectChange = (selectedOption) => {
        const isActive = selectedOption && selectedOption.value && selectedOption.value !== 'Service Request';
        setIsPlaceholderActive(isActive);

        setFormValues({
            ...formValues,
            selectedOption: selectedOption || ''
        });
        setTouched({
            ...touched,
            selectedOption: true
        });
        validateField('selectedOption', selectedOption ? selectedOption.value : null);
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value || ''
        });

        if (touched[name]) {
            validateField(name, value);
        }
        if (!value) {
            setTouched({
                ...touched,
                [name]: false
            });


        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        setTouched({
            ...touched,
            [name]: true
        });
        validateField(name, value);
    };



    const validateField = (name, value) => {
        let error = '';
        const valueString = value && typeof value === 'string' ? value.trim() : '';
        // console.log('val', valueString, name)
        if (!valueString) {
            error = 'This field is required';
        } else {
            if (name === 'fullName') {
                const words = valueString.split(/\s+/);
                const multipleSpacesRegex = /\s{2,}/;

                if (valueString.length > 60) {
                    error = 'Full name should not exceed 60 characters';
                }  else if (/[^a-zA-Z\s]/.test(valueString)) {
                    error = 'Full name should only contain alphabetic characters and spaces';
                } else if (multipleSpacesRegex.test(valueString)) {
                    error = 'Full name should not contain multiple consecutive spaces';
                }
            } else if (name === 'companyName') {
                const words = valueString.split(/\s+/);
                if (valueString.length > 60) {
                    error = 'Company name should not exceed 60 characters';
                } 
                // else if (valueString.length < 5) {
                //     error = 'Company name should not less than 5 characters';
                // } 
                // else if (/[^a-zA-Z\s\-_.,]/.test(valueString)) {
                //     error = 'Company name should only contain alphabetic characters, spaces, and special characters like - _ , .';
                // }
            } else if (name === 'businessEmail') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (valueString.length > 100) {
                    error = 'Email should not exceed 100 characters';
                } else if (!emailRegex.test(valueString)) {
                    error = 'Please enter a valid email';
                }
            } else if (name === 'jobTitle') {
                if (valueString.length > 50) {
                    error = 'Job Title should not exceed 50 characters';
                } 
            } else if (name === 'contact') {
                const phoneRegex = /^[0-9]{10,13}$/;
                if (!phoneRegex.test(valueString)) {
                    error = 'Please enter a valid Contact Number (10 to 13 digits)';
                }
            } else if (name === 'lookingFor') {
                if (valueString.length < 10) {
                    error = 'Looking For must be at least 10 characters long';
                } else if (valueString.length > 500) {
                    error = 'Looking For should not exceed 500 characters';
                } else if (/[^a-zA-Z0-9\s\-_.,]/.test(valueString)) {
                    error = 'Looking For can contain alphabetic characters, numbers, and special characters like - _ , .';
                }
            } else if (name === 'selectedOption') {
                if (!value) {
                    error = 'Please select an option';
                }
            }
        }
        if (name === 'recaptcha' && !value) {
            errors.recaptcha = 'Please confirm you are not a robot';
        }

        setErrors({
            ...errors,
            [name]: error
        });
    };

    const formFields = [
        { label: 'Name', name: 'fullName', type: 'text' },
        { label: 'Company Name', name: 'companyName', type: 'text' },
        { label: 'Email', name: 'businessEmail', type: 'email' },
        { label: 'Job Title', name: 'jobTitle', type: 'text' },
        { label: 'Contact Number', name: 'contact', type: 'text' },
        { label: 'Comment', name: 'lookingFor', type: 'text' },
    ];



    const handleSubmit = (event) => {
       
        event.preventDefault();

        const newTouched = {
            fullName: true,
            companyName: true,
            businessEmail: true,
            jobTitle: true,
            contact: true,
            lookingFor: true,
            selectedOption: true,
            recaptcha: true,

        };

        setTouched(newTouched);

        const newErrors = {};
        const keyMap = {
            fullName: 'full_name',
            companyName: 'company_name',
            businessEmail: 'business_email',
            jobTitle: 'job_title',
            contact: 'contact',
            lookingFor: 'looking_for',
            selectedOption: 'service_request',
            recaptcha: 'recaptcha'

        };

        const transformedValues = {};
        Object.keys(formValues).forEach((fieldName) => {
            let value = formValues[fieldName];
            if (fieldName === 'recaptcha') {
                value = !!captchaValue;
            } else if (fieldName === 'selectedOption' && typeof value === 'object') {
                value = value?.value || '';
            } else {
                value = value && typeof value === 'string' ? value.trim() : '';
            }
            const transformedKeyName = keyMap[fieldName];
            transformedValues[transformedKeyName] = value;
            // console.log('sub', value)
            if (!value) {
                newErrors[fieldName] = 'This field is required';
            }
        });
        if (!captchaValue) {
            newErrors.recaptcha = 'Please complete the reCAPTCHA';
        }
        // console.log(newErrors)
        setErrors(newErrors);
        const hasError = Object.values(newErrors).some((error) => error);
        if (hasError) {
            return;
        }

        if (!captchaValue) {
            return;
        }
        setDissabledbtn(true)
      
             axios.post(
                    'https://api-esds2024.esds.co.in:8000/api/enquiry/',
                    transformedValues,
                    {
                        headers: {
                            'Authorization': `Token 9e7ccadba501b39c7f69e2e2b7efc01f5b54b16811a`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
            .then(response => {
                if (response.data.status === 'success') {
                   
                    // Swal.fire({
                    //     title: "Your Form Has Landed. We’ll Reach Out Shortly!",
                    //     icon: "success",
                    //     customClass : {
                    //         confirmButton : "my-swal-button"
                    //     }
                    //   });

                    navigate('/thankyou')
                    setFormValues({
                        fullName: '',
                        companyName: '',
                        businessEmail: '',
                        jobTitle: '',
                        contact: '',
                        lookingFor: '',
                        selectedOption: null,
                        recaptcha: false,

                    });

                    setTouched({});
                    setErrors({});
                    setCaptchaValue(null);
                    setIsPlaceholderActive(false);
                    // document.querySelector('input[name="selectedOption"]').value = '';

                }
                recaptchaRef.current.reset();
            })
            .catch(error => {
                // alert(error?.response.data.data.full_name)
                console.error('Error:', error);

            });
    };

    return (
        <div>
                <MobileNavbar  />
            <ReactLenis root options={{ smoothWheel: true, duration: 3, easing: (t) => Math.min(1.5, 1.001 - Math.pow(2, -10 * t)), touchMultiplier: 2 }}>
                <Header />
                <section className='contact-page'>
                    <div className="contact-form-ES">
                        <div className="innerdiv-contact">
                            <div className="contact-heading">
                                <div className="greeting-div">
                                    <h1>Namaste, Lets<br />
                                    <span>Grow Together</span></h1>
                                </div>
                                <div className="social-media-icon">
                                    <ul>
                                        <li><Link target="_blank" to={"https://www.youtube.com/@esdsdc"}><FaYoutube /></Link></li>
                                        <li><Link target="_blank" to={"https://www.facebook.com/ESDSdc"}><FaFacebookF /></Link></li>
                                        <li><Link target="_blank" to={"https://www.instagram.com/esds.dc?igsh=NnQ4b2V4NmhuYWxu"}> <IoLogoInstagram /></Link></li>
                                        <li> <Link target="_blank" to={"https://x.com/esdsdatacenter"}><FaXTwitter /></Link></li>
                                        <li> <Link target="_blank" to={"https://www.linkedin.com/company/esdsdc/"}><FaLinkedinIn /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-innerdiv">
                                        {formFields.map(field => (
                                            <InputField
                                                key={field.name}
                                                label={field.label}
                                                name={field.name}
                                                type={field.type}
                                                value={formValues[field.name]}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                error={errors[field.name]}
                                                touched={touched[field.name]}
                                            />
                                        ))}
                                        {/* {isPlaceholderActive === true && <div>
                                            <label>Service Request</label>
                                        </div>
                                        } */}
                                        <div className="input-div">
                                            {/* <span className='input-title'>{isPlaceholderActive === true ? <span style={{ fontSize: '20px', width: '50px', transform: 'translateY(-1vw)' }}>Service Request</span> : `Service Request`}</span> */}
                                            <Select
                                                options={options}
                                                placeholder="Service Request"
                                                value={formValues.selectedOption ? options.find(option => option.value === formValues.selectedOption) : ''}
                                                onChange={handleSelectChange}
                                                onBlur={() => setTouched({ ...touched, selectedOption: true })}
                                                styles={customStyles}
                                            />
                                            <span className='select-warning-msg'>{touched.selectedOption && errors.selectedOption}</span>

                                        </div>
                                        <div className="recaptcha">
                                            <div>
                                                <div className="recaptcha-container">
                                                    <ReCAPTCHA
                                                        ref={recaptchaRef}
                                                        sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
                                                        onChange={handleCaptchaChange}
                                                        theme="dark"
                                                        size="normal"
                                                    />
                                                </div>
                                                <div style={{ marginLeft: '1%' }}>
                                                    <span style={ {color : "rgb(245 89 89)"}} className="error">{touched.recaptcha && errors.recaptcha}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-form-submit-btn disabled-btn">
                                       {disabledbtn ? <p className='after-submit'>Please wait...</p> :  <button type="submit" className="contact-form-btn" data-text="Awesome">
                                           Submit
                                            <FaArrowRight />
                                        </button>}
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="innerdiv-service">
                            <h3>We are always here at your <span>Service</span></h3>
                            <div className='contact-detail-grid'>
                                <div className='firstdiv'>
                                    <img src={getintouch_bg} alt="get in touch" />
                                    <p>getintouch@esds.co.in</p>
                                    <p>1800-209-3006</p>
                                    {window.innerWidth > 1024 ? <div className='server-model'>
                                        <ContactServer />
                                    </div> : "" }
                                </div>
                                <div>
                                    <h5>India</h5>
                                    <p>+91-7030-365-247 </p>
                                    <p>+91-(253)-711-2233</p>
                                </div>
                                <div>
                                    <h5>United Kingdom</h5>
                                    <p>+44-2034-575-776</p>
                                </div>
                                <div>
                                    <h5>United States</h5>
                                    <p>+1-8443-245-054</p>
                                </div>
                                <div onMouseEnter={() => showDCImage("nashik-dc")} onMouseLeave={() => hideDCImage("nashik-dc")} className='nashikAddress addressDiv'>
                                    <h5>Nashik</h5>
                                    <p>Plot No. B- 24 & 25, NICE Industrial Area,Satpur MIDC, Nashik 422 007.</p>
                                    <div className='address-div nashik-dc'><img src={NashikDC} alt="Nashik DC" /></div>
                                </div>
                                <div  onMouseEnter={() => showDCImage("mumbai-dc")} onMouseLeave={() => hideDCImage("mumbai-dc")} className='mumbaiAddress addressDiv'>
                                    <h5>Mumbai</h5>
                                    <p>Plot No. Gen 71/1 & 71/1/1, Mahape Circle, Mahape MIDC, Navi Mumbai 400 710.</p>
                                    <div className='address-div mumbai-dc'><img src={mumbaiDC} alt="mumbai DC" /></div>
                                </div>
                                <div  onMouseEnter={() => showDCImage("bangluru-dc")} onMouseLeave={() => hideDCImage("bangluru-dc")} className='bengaluruAddress addressDiv'>
                                    <h5>Bengaluru</h5>
                                    <p>1st floor, No 76, 77 & 78(p), New STPI building, Cyber Park, Electronic City Phase-1, Hosur Road ,Bengaluru 560 100</p>
                                    <div className='address-div bangluru-dc'><img src={bengaluruDC} alt="bengaluru DC" /></div>
                                </div>
                                <div onMouseEnter={() => showDCImage("mohali-dc")} onMouseLeave={() => hideDCImage("mohali-dc")} className='mohaliAddress addressDiv'>
                                    <h5>Mohali</h5>
                                    <p>Plot No.
C-184 Stpi Building, Software Technology Parks Of India Mohali, Sector 75, Plot No.
184, Mohali, Sas Nagar, Punjab, 160071.</p>
                                    <div className='address-div mohali-dc'><img src={mohaliDC} alt="mohali DC" /></div>
                                </div>
                                <div onMouseEnter={() => showDCImage("newmumbai-dc")} onMouseLeave={() => hideDCImage("newmumbai-dc")} className='naviMumbaiAddress addressDiv'>
                                    <h5>Navi Mumbai</h5>
                                    <p>202 B Wing, Central Rd N, Gavate Wadi, MIDC Industrial Area, Airoli, Navi Mumbai, Maharashtra 400708</p>
                                    <div className='address-div newmumbai-dc'><img src={airoliDC} alt="airoli DC" /></div>
                                </div>
                            </div>
                            <div></div>
                            {/* <p class="my-text">Let's Get Started</p> */}
                        </div>
                    </div>

                </section>
                <FooterFinal BgColor={"#000320"} />
            </ReactLenis>
        </div>
    )
}
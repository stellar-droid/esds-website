import Slider from "react-slick";
import client1 from '../../images/clients/client1.png'
import client2 from '../../images/clients/client2.png'
import client3 from '../../images/clients/client3.png'
import client4 from '../../images/clients/client4.png'
import client5 from '../../images/clients/client5.png'
import client6 from '../../images/clients/client6.png'
import client7 from '../../images/clients/client7.png'
import client8 from '../../images/clients/client8.png'
import cloud1 from '../../images/testimonial/cloud1.png'
import cloud2 from '../../images/testimonial/cloud2.png'
import cloud3 from '../../images/testimonial/cloud3.png'
import cloud4 from '../../images/testimonial/cloud4.png'
import './MobileTestimonial.css'
import { useNavigate } from "react-router-dom";
export default function MobileTestimonial() {

    let navigate = useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows : false
      };
    return (
        <section className="mobile-testimonial">
            <div className="mobile-testimonial-container">
                <div className="intro-testimonial">
                    <h3>Get On Cloud 9 With Us</h3>
                    <div className="mobiletesti-cta">
                        <button onClick={() => {navigate('/contact-us')}} className="CTA-button testimonial-CTA" data-text="Awesome">
                            <span className="actual-text">&nbsp;Get Started&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
                        </button>
                    </div>
                </div>
                <div className="testimonial-review">
                        <h3>Don't Just Take Our Word For It. Hear Reviews That Speaks Volume.</h3>
                        <div className="testimonial-review-slider">
                       <Slider {...settings}>
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client1} alt="Subodh Nair" />
                                </div>
                                <h4 className="client-name">Mr. Subodh Nair</h4>
                                <p>Group IT - ELGi Equipments Limited</p>
                                </div>
                                <div className="review-description">
                                Let me share how ESDS guided our transformative IT journey at our leading manufacturing company. With a stratergic approach, ESDS implemented comprehensive cloud solutions and provided steadfast support throughout. Crucial projects like IoT integration and near-line DR services setup were seamlessly executed, showcasing ESDS’s expertise, resources, and customer-centric ethos. Thanks to ESDS, we achieved elevated operational efficiency and set a new standard in our industry.
                                </div>
                            </div>
        </div>
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client2} alt="Hariharan" />
                                </div>
                                <h4 className="client-name">Mr. Hariharan</h4>
                                <p>Head - Shriram Properties</p>
                                </div>
                               
                                <div className="review-description">
                                We were on the search for a trusted partner that would adresses our IT needs. By selecting ESDS over other Cloud service providers, we achieved seamless implementation of the Cloud Customer Portal and SAP HANA services driven by unmatched pricing, scalability, and top-tier support. Operating flawlessly for years with zero downtime, we've consistently achieved peak system performance with proactive support from ESDS team.
                                </div>
                            </div>
        </div>
    
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client8} alt="Gopala Krishna HM" />
                                </div>
                                <h4 className="client-name">Mr. Gopala Krishna HM</h4>
                                <p>IT Consultant & Operations and FAM - Surfa Coats (India) Private Limited</p>
                                </div>
                               
                                <div className="review-description">
                                At Surfa Coats, we decided to partner with ESDS for our cloud migration to streamline our IT operations in the textile industry. After facing challenges with previous providers, transitioning to ESDS was a game-changer. The process was smooth, ensuring our operations ran without interruption and our scalability improved significantly. We're truly impressed with ESDS's reliability and the positive impact it's had on our business. For any company looking for dependable cloud solutions, ESDS is definitely the way to go.
                                </div>
                            </div>
        </div>
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client5} alt="Ravikumar N Br" />
                                </div>
                                <h4 className="client-name">Mr. Ravikumar N Br</h4>
                                <p>CFO - Span Healthcare P Ltd</p>
                                </div>
                               
                                <div className="review-description">
                                ESDS has been instrumental in transforming our IT infrastructure since July 2019. As a healthcare provider, ensuring 24/7 service and data security is paramount. Their SAP HANA hosting services have not only met but exceeded our expectations, providing cost-effective solutions and reducing IT operational risks significantly. I highly recommend ESDS for their exceptional service and reliability.
                                </div>
                            </div>
        </div>
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client4} alt="Chirag Boonlia" />
                                </div>
                                <h4 className="client-name">Mr. Chirag Boonlia</h4>
                                <p>Group Chief Technology Officer - Embassy Group</p>
                                </div>
                               
                                <div className="review-description">
                                Our journey with ESDS has been transformative. We faced the challenge of optimizing IT operations across diverse sectors—commercial, residential, and facility management. ESDS's robust digital IT solutions, including ERP, CRM, mobile apps, and cutting-edge technologies like digital twins and IoT, enabled us to achieve IT operational excellence. Their IT infrastructure supported seamless scalability, minimizing CapEx and maximizing efficiency. Our partnership with ESDS has not just solved our IT challenges but has set a new standard for industry-wide digital transformation.
                                </div>
                            </div>
        </div>
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client7} alt="Sandesh Salankey" />
                                </div>
                                <h4 className="client-name">Mr. Sandesh Salankey</h4>
                                <p>AVP Corporate Finance & IT - Unibic Foods India Pvt Ltd</p>
                                </div>
                               
                                <div className="review-description">
                                Amid crucial times, we at UNIBIC Cookies experienced our IT transformation seamlessly with ESDS's aid. Searching for the best cloud service providers, we chose ESDS for their private cloud services. With their unwavering support, we overcame accessibility hurdles and enhanced speed. ESDS ensured a seamless migration, demonstrating rapid response times and adherence to Indian privacy laws with their data centers in India. As a leading cookie manufacturer, we wholeheartedly endorse ESDS for their outstanding service and streamlined IT migration journey.
                                </div>
                            </div>
        </div>
        <div className="review-slides">
                            <div className="review-container">
                                <div className="client-info">
                                <div className="client-img">
                                    <img src={client6} alt="Deepak Jain" />
                                </div>
                                <h4 className="client-name">Mr. Deepak Jain</h4>
                                <p>SAP & Infra Head - Quest Retail Ltd (The Body Shop)</p>
                                </div>
                               
                                <div className="review-description">
                                As a leading retail company, we were previously challenged by server limitations but found respite in ESDS's innovative cloud solutions. We have implemented all SAP servers on ESDS Cloud and have witnessed a massive shift in support and efficiency. Despite facing several challenges in the past, our transition to ESDS has ensured uninterrupted IT operations and unparalleled success.


                                </div>
                            </div>
        </div>
      
 
      </Slider>
                        </div>
                </div>
            </div>
            <div className="cloud-bottom">
                <img src={cloud1} alt="cloud-img" />
                <img src={cloud2} alt="cloud-img" />
                <img src={cloud3} alt="cloud-img" />
                <img src={cloud4} alt="cloud-img" />
            </div>
        </section>
    )
}
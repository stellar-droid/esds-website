import React, { useEffect } from 'react';
import Header from "../Header/Header";
import FooterFinal from "../FinalFooter/FooterFinal";
import MobileNavbar from "../Navbar/MonileNavbar";
import './certificate.css';
import india_petant from "../../images/Certificate/india_petant.png"
import india_petant2 from "../../images/Certificate/india_petant2.png"
import UKPatent from "../../images/Certificate/UKPatent.jpg"
import GPTW from "../../images/Certificate/GPTW.png"
import USPTO from "../../images/Certificate/USPTO.jpg"
import certificate_TIA_1 from "../../images/Certificate/certificate_TIA_1.jpg"
import certificate_TIA_3 from "../../images/Certificate/certificate_TIA_3.jpg"
import STQC from "../../images/Certificate/STQC.jpg"
import Meity from "../../images/Certificate/Meity.jpg"
import SAP from "../../images/Certificate/SAP.jpg"
import SAP_2 from "../../images/Certificate/SAP_2.jpg"
import ROC_CIN from "../../images/Certificate/ROC_CIN.jpg"
import ISO_2015 from "../../images/Certificate/ISO_2015.jpg"
import ISO_2018 from "../../images/Certificate/ISO_2018.jpg"
import ISO_2019 from "../../images/Certificate/ISO_2019.jpg"
import ISO_27017_2015 from "../../images/Certificate/ISO_27017_2015.jpg"
import ISO_27018_2019 from "../../images/Certificate/ISO_27018_2019.jpg"
import ISO_27701_2019 from "../../images/Certificate/ISO_27701_2019.jpg"
import ISO_27001_2022 from "../../images/Certificate/ISO_27001_2022.jpg"
import ISO_14001_2015 from "../../images/Certificate/ISO_14001_2015.jpg"
import CMMI5 from "../../images/Certificate/CMMI5.jpg"
import pci from "../../images/Certificate/pci.jpg"
import * as demoActions from '../../Redux/Actions/DemoActions.js'
import SOC from "../../images/Certificate/SOC.jpg"
import { useDispatch } from 'react-redux';


function Certificate() {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:demoActions.UPDATE_NAVBAR,payload:false})
      },[])
    return (
        <div>
            <MobileNavbar />
            <Header />
            <div className='innerPage_certificate'>
                <h1>Compliance & Certifications</h1>
                <div className='wrapper'>
                <div>

                        <img src={india_petant} alt="india petant" />
                    </div>
                    <div>
                        <img src={india_petant2} alt="india petant" />
                    </div>
                    <div>
                        <img src={UKPatent} alt="UKPatent" />
                    </div>
                    <div>
                    <img src={USPTO} alt="GPTUSPTOW" />
                    </div>
                    <div>
                        {/* <img src={GPTW} alt="GPTW" /> */}
                        <img src={Meity} alt="Meity" />
                    </div>
                    <div>
                    <img src={STQC} alt="STQC" />
                    </div>
                    <div>
                                                <img src={CMMI5} alt="CMMI5" />
                    </div>
                    <div>
                        <img src={certificate_TIA_1} alt="certificate_TIA_1" />
                    </div>
                    <div>
                        <img src={certificate_TIA_3} alt="certificate_TIA_3" />
                    </div>

                    <div>
                    <img src={SOC} alt="SOC" />
                    </div>
                    <div>
                    <img src={pci} alt="pci" />
                    </div>
                    <div>
                    <img src={ROC_CIN} alt="ROC_CIN" />
                    </div>
                   
                    <div>
                        <img src={ISO_2015} alt="ISO_2015" />
                    </div>

                    <div>
                        <img src={ISO_2018} alt="ISO_2018" />
                    </div>

                    <div>
                        <img src={ISO_2019} alt="ISO_2019" />
                    </div>

                    <div>
                        <img src={ISO_27017_2015} alt="ISO_27017_2015" />
                    </div>
                    <div>
                        <img src={ISO_27018_2019} alt="ISO_27018_2019" />
                    </div>

                    <div>
                        <img src={ISO_27701_2019} alt="ISO_27701_2019" />
                    </div>
                    <div>
                        <img src={ISO_27001_2022} alt="ISO_27001_2022" />
                    </div>
                    <div>
                        <img src={ISO_14001_2015} alt="ISO_14001_2015" />
                    </div>
                  
                    <div>
                        <img src={SAP} alt="SAP" />
                    </div>
                    <div>
                        <img src={SAP_2} alt="SAP" />
                    </div>
                    <div>
                        <img src={GPTW} alt="" />
                    </div>
                </div>
            </div>
            <FooterFinal BgColor={"#000819"} />

        </div>
    )
}

export default Certificate
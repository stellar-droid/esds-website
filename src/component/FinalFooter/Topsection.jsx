import {  useNavigate } from "react-router-dom"
import './Topsection.css'
import { div } from "three/examples/jsm/nodes/Nodes.js"
import { lazy, Suspense } from "react"
const FooterServerModel = lazy(() => import("./FooterServerModel"))  
export default function Topsection({question, answers, CTA, color, MSS, answer1, answer2}) {
    const navigate = useNavigate()

    return(
      
            <section style={{background : color}} className="question-answer">
           <Suspense fallback={<h1>laoding</h1>}><FooterServerModel /></Suspense> 

                <div className="question">{question}</div>
               { MSS ? <div className="two-answer"> <span className="textCenter" style={{color:"#f66b6b"}}>{answer1}</span> <span> <button onClick={() => { navigate("/contact-us") }} className="CTA-button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Secure Your Zone Today&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Secure&nbsp;your&nbsp;Zone&nbsp;Today</span>
                        </button></span></div> : <div className="answer">{answers}</div>}
               {
                MSS ? "" : <div className="QNA-CTA">
                
                <button onClick={() => { navigate("/contact-us") }} className="CTA-button" data-text="Awesome">
                    <span className="actual-text">&nbsp;Connect Now&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;Connect&nbsp;NOW</span>
                </button>
        </div>
               }
            </section>
     
    )
}
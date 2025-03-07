import { useEffect } from "react"
import Earthmodel from "./Earthmodel"

export default function Earth() {      
    // useEffect(() => {
    //         document.getElementById("Earth").addEventListener("mouseover", () => {

    //             let myDiv =  document.getElementById("cursorDefault")
    //             myDiv.children[0].innerHTML = "Drag to"
    //             myDiv.children[1].innerHTML = "Locate Us";
    //             myDiv.classList.remove("defaultcursor")
    //         })
    //         document.getElementById("Earth").addEventListener("mouseleave", () => {
    //             let myDiv =  document.getElementById("cursorDefault")
    //             myDiv.children[0].innerHTML = ""
    //             myDiv.children[1].innerHTML = ""
    //             myDiv.classList.add("defaultcursor")
    //         })
    // })
    return(
        <>
            <div className="Earthdiv" id="Earth">
             <Earthmodel />
                </div>      
        </>
    )
}
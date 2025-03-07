import { memo } from 'react'
import LCM from '../../images/ESDSFinalDesigns/prod-1.png'
import VTM from '../../images/ESDSFinalDesigns/prod-2.png'
import IPEG from '../../images/ESDSFinalDesigns/prod-3.png'
import famrut from '../../images/ESDSFinalDesigns/prod-4.png'
import enlight from '../../images/ESDSFinalDesigns/prod-5.png'
import enlight2 from '../../images/ESDSFinalDesigns/prod-6.png'
import enlight3 from '../../images/ESDSFinalDesigns/prod-7.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const OrbitMotion = memo(() => {
// console.log("meghna")
    return (
        <>
            <div className="circle-div" >
                <div className="circle" id='circle'>
                    <div className="one"> <LazyLoadImage
                    effect='blur'
      alt={"LCM"}
      height={"100%"}
      src={LCM} // use normal <img> attributes as props
      width={"100%"} /></div>
                    <div className="two"><LazyLoadImage
                    effect='blur'
      alt={"VTM"}
      height={"100%"}
      src={VTM} // use normal <img> attributes as props
      width={"100%"} /></div>
                    <div className="three"><LazyLoadImage
                    effect='blur'
      alt={"eNlight"}
      height={"100%"}
      src={enlight} // use normal <img> attributes as props
      width={"100%"} /></div>
                   
                </div>
                <div className="circle2" id='circle2'>
                <div className="one"><LazyLoadImage
                    effect='blur'
      alt={"famrut"}
      height={"100%"}
      src={famrut} // use normal <img> attributes as props
      width={"100%"} /></div>
                    <div className="two"><LazyLoadImage
                    effect='blur'
      alt={"VTM"}
      height={"100%"}
      src={IPEG} // use normal <img> attributes as props
      width={"100%"} /></div>
                    <div className="three"><LazyLoadImage
                    effect='blur'
      alt={"eNlight"}
      height={"100%"}
      src={enlight2} // use normal <img> attributes as props
      width={"100%"} /></div>
                    <div className="four"><LazyLoadImage
                    effect='blur'
      alt={"famrut"}
      height={"100%"}
      src={enlight3} // use normal <img> attributes as props
      width={"100%"} /></div>
                </div>
            </div>
        </>
    )
})

export default OrbitMotion
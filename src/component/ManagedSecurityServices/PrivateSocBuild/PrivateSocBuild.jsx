import React from "react";
import "./PrivateSocBuild.css";
import Header from "../../Header/Header";
import CTAButton from "../../../components/ui/CtaButton/CtaButton";
import bgUniqueBuisnessNeeds from "../../../images/PrivateSocBuild/bgUniqueBuisnessNeeds.jpg";
import customizedSocImg from "../../../images/PrivateSocBuild/customizedSocImg.png";
import HeadingBottomLine from "../../../components/ui/HeadingBottomLine";
import approachToBuilding from "../../../images/PrivateSocBuild/approachToBuilding.png";
import barChart from "../../../images/PrivateSocBuild/barChart.svg";
import cloudMonitoring from "../../../images/PrivateSocBuild/cloudMonitoring.svg";
import cutOverHeadCost from "../../../images/PrivateSocBuild/cutOverHeadCost.svg";
import securityShield from "../../../images/PrivateSocBuild/securityShield.svg";
import socLifeCycle from "../../../images/PrivateSocBuild/socLifeCycle.svg";
import threatDetection from "../../../images/PrivateSocBuild/threatDetection.svg";
import FooterFinal from "../../FinalFooter/FooterFinal";
import Partner from "../../Partner/Partner";
import axisBank from "../../../images/partners/partner1.png";
import UnionBank from "../../../images/partners/partner2.png";
import MuthoonGroup from "../../../images/partners/partner3.png";
import DCBBank from "../../../images/partners/partner4.png";
import TATACapital from "../../../images/partners/partner5.png";
import SBICpas from "../../../images/partners/partner6.png";
import Sidbi from "../../../images/partners/partner7.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PrivateSocBuild = () => {
  const features = [
    {
      icon: securityShield,
      text: "We customize your SOC to meet your unique security needs, offering complete flexibility and control.",
      position: "top-left",
    },
    {
      icon: cloudMonitoring,
      text: "Our experts monitor your infrastructure round-the-clock, providing continuous protection against emerging threats.",
      position: "top-right",
    },
    {
      icon: socLifeCycle,
      text: "From setup to ongoing monitoring, we manage your entire SOC lifecycle, letting you focus on your core business.",
      position: "middle-left",
    },
    // {
    //   icon: <Security color="#2086F2" size={40} />,
    //   text: "Our Private SOC Build and Management services offer a complete, tailored security solution that provides you with unmatched control, visibility, and real-time incident response. Here's why you should choose us -",
    //   position: "center"
    // },
    {
      icon: barChart,
      text: "Ensure alignment with critical industry standards like GDPR and HIPAA.",
      position: "bottom-left",
    },
    {
      icon: cutOverHeadCost,
      text: "Cut overhead costs while improving security with a managed SOC solution.",
      position: "bottom-right",
    },
    {
      icon: threatDetection,
      text: "Early threat detection and swift response help safeguard your assets and prevent potential breaches.",
      position: "middle right",
    },
  ];
  let logos = [
    axisBank,
    UnionBank,
    MuthoonGroup,
    DCBBank,
    TATACapital,
    SBICpas,
    Sidbi,
  ];

// SECTION 2 TEXT ANIMATION
React.useEffect(()=>{
  const headingText = document.querySelector('.customizedSocHead h3');
  const paragraphText = document.querySelector('.customizedSocInfo p');
  const ctaText = document.querySelector('.customizedSocInfo h3');
  const blocks = document.querySelectorAll('.block1, .block2, .block3, .block4, .block5, .block6, .column2');
  
  if (paragraphText) {
    gsap.fromTo(
      paragraphText,
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.customizedSocInfo',
          start: "top 70%",
         toggleActions: "restart none none none"
        }
      }
    );
  }
 
  if(blocks){
    gsap.fromTo(
      blocks,
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.privateSocContainer',
          start: "top 70%",
         toggleActions: "restart none none none"
        }
      }
    );
  }

},[]);

// SECTION 3 ANIMATION
  const liRefs = React.useRef([]);
// Text Reveal Animation
  React.useLayoutEffect(() => {
    gsap.fromTo(
      liRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5, // Creates a delay between animations
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".approachToBuildingInfo ul li",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  

  return (
    <>
      <div className="privateSocBuild">
        <Header />
        <section
          className="uniqueBuisnessNeeds flex flex-row "
          style={{ background: "#000000" }}
        >
          <div className="uniqueBuisnessNeedsContainer">
            <div className="uniqueBuisnessNeedsText text-white w-6/12 space-y-1">
              <h3 className=" cs-heading text-4xl">
                End-to-End SOC Build & <br className="hidden lg:block" />
                Management designed for
                <br className="hidden lg:block" />
                <span className=" text-white font-bold">
                  Your Unique Business Needs
                </span>{" "}
                <br className="hidden lg:block" />
              </h3>

              <p className="cs-heading-p">
                We recognize that every organization has distinct security
                challenges. That's why we create
                <span style={{ color: "#00a3ff", paddingLeft: "5px" }}>
                  custom-built Private Security Operations Centers (SOC)
                </span>
                , meticulously designed to align with your business’s unique
                needs. Our solutions ensure your data, infrastructure, and
                assets are relentlessly protected against emerging threats,
                enabling your organization to operate with confidence and
                resilience.
              </p>
              <span className="relative  left-[20px]">
                <CTAButton
                  buttonText={"Get Started"}
                  hoverText={"Get Started"}
                  route_link={"contact-us"}
                />
              </span>
            </div>
            {/* <div className="uniqueBuisnessNeedsImg w-6/12   ">
              <img src={bgUniqueBuisnessNeeds} alt="Unique Buisness Needs" />
            </div> */}
          </div>
        </section>

        <section className="customizedSoc">
          <div className="customizedSocHead">
            <h3 className="">
              What{" "}
              <span className="font-bold" style={{ color: "#00a3ff" }}>
                Could a Customized SOC
              </span>{" "}
              Do for Your Organization's IT Security ?
            </h3>
            <HeadingBottomLine />
          </div>

          <div className="customizedSocContainer">
            <div className="customizedSocInfo">
              <p>
                Imagine a security system so advanced, it not only defends but
                anticipates and <br className="hidden lg:block" />
                evolves with every threat. What if your operations were
                seamlessly protected 24/7, <br className="hidden lg:block" />
                and every risk was detected and managed in real-time?
                <br className="hidden lg:block" />
                <br className="hidden lg:block" />
                You might be asking; how could this level of intelligence be
                possible? The answer lies in tailored Private SOC solutions —
                custom-built to address your organization's unique security
                landscape. From automated threat responses to strategic
                orchestration across your entire infrastructure, our solutions
                are designed to leave no room for compromise.
              </p>
              <h3 span style={{ color: "#00a3ff" }}>
                Curious about how it works? Ready to discover how this can
                transform your security posture?
              </h3>
              <CTAButton
                buttonText={"Get Started"}
                hoverText={"Get Started"}
                route_link={"contact-us"}
              />
            </div>
            <div className="customizedSocImg ">
              <img src={customizedSocImg} alt="Customized SOC" />
            </div>
          </div>
        </section>

        <section className="approachToBuilding">
          <div className="approachToBuildingHead">
            <h3 className="">
              ESDS’ Tailored{" "}
              <span style={{ fontWeight: "bold" }}>Approach to Building</span>{" "}
              and
              <br className="hidden lg:block" /> Managing Your Custom Private
              SOC
            </h3>
            <HeadingBottomLine />
          </div>
          <div className="approachToBuildingContainer">
            <div className="approachToBuildingImg">
              <img src={approachToBuilding} alt="Approach To Building" />
            </div>
            <div className="approachToBuildingInfo">
              <ul>
                <li key={0} ref={(el) => (liRefs.current[0] = el)}>
                  Assessment and Design: We evaluate your security needs and
                  design a SOC that integrates seamlessly with your
                  infrastructure.
                </li>
                <li key={1} ref={(el) => (liRefs.current[1] = el)}>
                  Deployment of Security Tools and Technologies: We implement
                  cutting-edge security tools, including SIEM, threat
                  intelligence, and endpoint detection, for full coverage.
                </li>
                <li key={2} ref={(el) => (liRefs.current[2] = el)}>
                  Real-Time Threat Monitoring and Detection: Our SOC uses
                  AI-powered detection systems to continuously monitor and
                  mitigate risks in real-time.
                </li>
                <li   key={3} ref={(el) => (liRefs.current[3] = el)}>
                  Incident Response and Mitigation: In case of a breach, we
                  deploy predefined playbooks and custom workflows to neutralize
                  threats swiftly.
                </li>
                <li key={4} ref={(el) => (liRefs.current[4] = el)}>
                  Ongoing Management and Optimization: We provide continuous
                  management and regular updates to adapt to evolving threats
                  and business needs.
                </li>
              </ul>
              <CTAButton
                buttonText={"Get Started"}
                hoverText={"Get Started"}
                route_link={"contact-us"}
              />
            </div>
          </div>
        </section>

        <section className="privateSoc" style={{ background: "#000000" }}>
          <div className="privateSocContainer">
            <div className="column1">
              <div className="block1">
                <p className="text-white opacity-80 max-w-xs">
                  <span className="font-bold">
                    We customize your SOC to
                    <br className="hidden lg:block" /> meet your unique security
                    <br className="hidden lg:block" /> needs
                  </span>
                  , offering complete <br className="hidden lg:block" />
                  flexibility and control.
                </p>
                <div className="mb-4 p-4 img1 ">
                  <img
                    src={securityShield}
                    alt="Security Shield"
                    className=""
                  />
                </div>
              </div>
              <div className="block2">
                <p className="text-white opacity-80 max-w-xs">
                  <span className="font-bold">
                    From setup to ongoing <br className="hidden lg:block" />{" "}
                    monitoring, we manage your{" "}
                    <br className="hidden lg:block" />
                    entire SOC lifecycle
                  </span>
                  , letting you <br className="hidden lg:block" />
                  focus on your core business.
                </p>
                <div className="mb-4 p-4 img2">
                  <img src={socLifeCycle} alt="Soc Life Cycle" className="" />
                </div>
              </div>
            </div>
            <div className="column2">
              <h2>
                Why Choose <span className="font-bold">ESDS</span> for Your
                Private SOC?
              </h2>
              <HeadingBottomLine />
              <p>
                Our{" "}
                <span className="font-bold">
                  Private SOC Build and Management{" "}
                </span>{" "}
                services offer a complete, tailored security solution that
                provides you with unmatched control, visibility, and real-time
                incident response. Here's why you should choose us -
              </p>
            </div>
            <div className="column3">
              <div className="block3">
                <div className="mb-4 p-4 img3">
                  <img
                    src={cloudMonitoring}
                    alt="Cloud Monitoring"
                    className=""
                  />
                </div>
                <p className="text-white opacity-80 max-w-xs">
                  <span className="font-bold">
                    Our experts monitor your <br className="hidden lg:block" />
                    infrastructure round-the-
                    <br className="hidden lg:block" />
                    clock{" "}
                  </span>
                  , providing continuous <br className="hidden lg:block" />
                  protection against emerging <br className="hidden lg:block" />
                  threats.
                </p>
              </div>
              <div className="block4">
                <div className="mb-4 p-4 img4">
                  <img
                    src={threatDetection}
                    alt="Threat Detection"
                    className=""
                  />
                </div>
                <p className="text-white opacity-80 max-w-xs">
                  <span className="font-bold">
                    {" "}
                    Early threat detection and{" "}
                    <br className="hidden lg:block" />
                    swift response{" "}
                  </span>{" "}
                  help safeguard <br className="hidden lg:block" />
                  your assets and prevent
                  <br className="hidden lg:block" /> potential breaches.
                </p>
              </div>
            </div>
            <div className="row4">
              <div className="block5">
                <p className="text-white opacity-80 max-w-xs">
                  <span className="font-bold">
                    {" "}
                    Ensure alignment with critical industry standards{" "}
                  </span>{" "}
                  like GDPR and HIPAA.
                </p>
                <div className="mb-4 p-4 img5">
                  <img src={barChart} alt="Bar Chart" className="" />
                </div>
              </div>
              <div className="block6 ">
                <div className="mb-4 p-4 img6 ">
                  <img
                    src={cutOverHeadCost}
                    alt="Over Head Cost"
                    className=""
                  />
                </div>
                <p className="text-white opacity-80 max-w-xs">
                  <span className="font-bold"> Cut overhead costs </span> while
                  improving security with a managed SOC solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="privateSocBuildFinalSection" style={{ background: "#000000" }}>
          <div className="clientLogos">
            <Partner color={"#00000b"} logosArray={logos} />
          </div>
          <div className="privateSocCallToAction">
            <h3 className="text-3xl font-light mb-4" >
              Are you ready to take control of your <br className="hidden lg:block" /> <span className="font-bold">organization's cybersecurity
              with a <br className="hidden lg:block" />customized, private SOC?</span>{" "}
            </h3>
            <p>
              Contact us today to discuss your specific security needs, and let
              our experts help you build a robust, scalable solution tailored
              for your business.
            </p>
            <CTAButton hoverText={"Let’s Build Your Private SOC Today!"} buttonText={"Let’s Build Your Private SOC Today!"} route_link={"contact-us"}/>
          </div>
        </section>
        <FooterFinal BgColor="" />
      </div>
    </>
  );
};

export default PrivateSocBuild;

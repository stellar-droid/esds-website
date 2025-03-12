import React from "react";
import "./BaaS.css";
import Header from "../../Header/Header";
import CTAButton from "../../../components/ui/CtaButton/CtaButton";
import HeadingBottomLine from "../../../components/ui/HeadingBottomLine";
import reallyPreparedImg from "../../../images/Paas/BaaS/reallyPreparedImg.png";
import harshRealityImg from "../../../images/Paas/BaaS/harshRealityImg.png";
import dataProtection from "../../../images/Paas/BaaS/dataProtection.svg";
import dataRecovery from "../../../images/Paas/BaaS/dataRecovery.svg";
import dataLiberation from "../../../images/Paas/BaaS/dataLiberation.svg";
// import column1 from "../../../images/Paas/BaaS/column1.png";
import column2 from "../../../images/Paas/BaaS/column2.png";
// import column3 from "../../../images/Paas/BaaS/column3.png";
import benefitsOfEsds from "../../../images/Paas/BaaS/benefitsOfEsds.png";
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
import { useRef } from "react";
import { useLayoutEffect } from "react";

const BaaS = () => {
  let logos = [
    axisBank,
    UnionBank,
    MuthoonGroup,
    DCBBank,
    TATACapital,
    SBICpas,
    Sidbi,
  ];

  // SECTION 2 ANIMATION
  React.useEffect(() => {
    const reallyPrepared = document.querySelector(".reallyPreparedInfo p");
    const reallyPreparedh3 = document.querySelector(
      ".reallyPreparedInfo h3:last-of-type"
    );
    const reallyPreparedImgSecondChild = document.querySelector(
      ".reallyPreparedImg > *:nth-child(2)"
    );
    const EsdsSolutionsHead = document.querySelector(".esdsSolutionsHead h3");
    const BenefitsOfEsds = document.querySelector(".benefitsOfEsds h3");
    const harshRealityImgFirstChild = document.querySelector(
      ".harshRealityImg > *:first-child"
    );
    if (reallyPrepared) {
      gsap.fromTo(
        reallyPrepared,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reallyPreparedInfo",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }

    if (reallyPreparedh3) {
      gsap.fromTo(
        reallyPreparedh3,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reallyPreparedInfo",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }
    if (reallyPreparedImgSecondChild) {
      gsap.fromTo(
        reallyPreparedImgSecondChild,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 4, // Increased duration for smoother effect
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".reallyPreparedContainer",
            start: "top 70%",
            onEnter: () => {
              reallyPreparedImgSecondChild.style.opacity = "1";
            },
            onLeave: () => {
              reallyPreparedImgSecondChild.style.opacity = "0";
            },
            onEnterBack: () => {
              reallyPreparedImgSecondChild.style.opacity = "1";
            },
            onLeaveBack: () => {
              reallyPreparedImgSecondChild.style.opacity = "0";
            },
          },
        }
      );
    }

    if (EsdsSolutionsHead) {
      gsap.fromTo(
        EsdsSolutionsHead,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".esdsSolutionsHead",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }

    if (BenefitsOfEsds) {
      gsap.fromTo(
        BenefitsOfEsds,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".benefitsOfEsds",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }

    if (harshRealityImgFirstChild) {
      gsap.fromTo(
        harshRealityImgFirstChild,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".harshRealityImg",
            start: "top 70%",
            onEnter: () => {
              harshRealityImgFirstChild.style.opacity = "1";
            },
            onLeave: () => {
              harshRealityImgFirstChild.style.opacity = "0";
            },
            onEnterBack: () => {
              harshRealityImgFirstChild.style.opacity = "1";
            },
            onLeaveBack: () => {
              harshRealityImgFirstChild.style.opacity = "0";
            },
          },
        }
      );
    }
  }, []);

  const reallyPreparedRef = useRef(null);
  React.useEffect(() => {
    gsap.to(reallyPreparedRef.current, {
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: reallyPreparedRef.current,
        start: "top 70%", // When the top of the element is 70% in viewport
        toggleActions: "play none none reverse", // Reverts when scrolled out
      },
    });
  }, []);

  // SECTION 3 ANIMATION
  const liRefs = React.useRef([]);
  const BenefitsOfEsdsRefs = React.useRef([]);
  // Text Reveal Animation
  React.useLayoutEffect(() => {
    gsap.fromTo(
      liRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5, // Creates a delay between animations
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".harshRealityContainer",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      BenefitsOfEsdsRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5, // Creates a delay between animations
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefitsOfEsdsInfo ul li",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  //  SECTION 4 ANIMATION
  // Card Animation

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Add cards to the ref array
  const addToRefs = (el) => {
    if (
      el &&
      !cardsRef.current.includes(el) &&
      el.classList.contains("backupServicesCard1")
    ) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    // Store context to easily kill animations on unmount
    let ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers
      // ScrollTrigger.getAll().forEach(st => st.kill());

      // Reset card refs array for potential re-renders
      cardsRef.current = cardsRef.current.slice(0, 5);

      // Initial setup - make sure cards are visible but styled
      cardsRef.current.forEach((card, i) => {
        gsap.set(card, {
          transformOrigin: "top center",
          scale: 0.8,
          opacity: 0,
          y: 50,
        });
      });

      // Create a separate animation for each card that triggers when the card comes into view
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Starts animation when card is 80% from the top of the viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse", // play on enter, reverse on leave
            markers: false, // Remove in production
          },
        });

        // Add perspective effect as you scroll
        gsap.to(card, {
          rotationX: i % 2 === 0 ? 10 : -10, // Alternate rotation directions
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smooth scrubbing effect
          },
        });
      });

      // Add hover effects
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          gsap.to(this, {
            scale: 1.05,
            rotationX: 0, // Reset rotation on hover
            // boxShadow: "0 0 35px rgba(0, 194, 255, 0.5)",
            duration: 0.3,
            ease: "power1.out",
            zIndex: 10,
          });
        });

        card.addEventListener("mouseleave", function () {
          gsap.to(this, {
            scale: 1,
            // boxShadow: "0 0 25px rgba(0, 132, 255, 0.3)",
            duration: 0.3,
            ease: "power1.in",
            zIndex: 1,
          });
        });
      });
    }, sectionRef);

    // Cleanup function
    return () => {
      ctx.revert(); // This will clean up all GSAP animations created by this context
    };
  }, []); // Empty dependency array means it runs once after mount

  return (
    <>
      <div className="BaaS">
        <Header />
        <section className="backupAdvantage">
          <div className="backupAdvantageContainer">
            <div className="backupAdvantageText">
              <h3>
                Resilient, Reliable, Recoverable{" "}
                <span style={{ fontWeight: "bold" }}>
                  – <br className="hidden lg:block" />
                  The ESDS Backup Advantage
                </span>
              </h3>
              <CTAButton
                buttonText={"Learn More"}
                hoverText={"Learn More"}
                route_link={"contact-us"}
              />
            </div>
          </div>
        </section>

        <section
          className="reallyPrepared"
          ref={reallyPreparedRef}
          style={{ background: "#000000" }}
        >
          <div className="reallyPreparedContainer">
            <div className="reallyPreparedInfo">
              <h3>
                Are You{" "}
                <span style={{ fontWeight: "bold" }}>Really Prepared</span> for
                a Data Disaster?
              </h3>
              <HeadingBottomLine />
              <p>
                Have you ever wondered what happened to the server rooms and
                data centers inside the Twin Towers on 9/11? Or what became of
                the data centers in Ukraine amid ongoing conflicts? Events like
                these remind us of a harsh reality—no system is entirely immune
                to disaster. Yet, many businesses continue to assume that their
                data is safe and untouchable. But is it wise to be overly
                optimistic when it comes to something as critical as your data?
                <br className="hidden lg:block" />
                <p style={{ marginTop: "1rem" }}>
                  Imagine waking up one day to find that the data center hosting
                  your website or business information has been hacked or wiped
                  out. The loss would be devastating. Cyberattacks, natural
                  disasters, and unforeseen crises can strike at any time.
                  Relying on a single storage method or assuming everything will
                  always run smoothly isn’t just risky—it’s a gamble.
                </p>
              </p>
              <h3 style={{ fontWeight: "bold", color: "#00A3FF" }}>
                Is your data truly secure, or are you just hoping for the best?
              </h3>
            </div>
            <div className="reallyPreparedImg">
              <img src={reallyPreparedImg} alt=" Are You Really Prepared" />
              <HeadingBottomLine />
            </div>
          </div>
        </section>

        <section className="harshReality" style={{ background: "#000000" }}>
          <div className="harshRealityContainer">
            <div className="harshRealityImg">
              <HeadingBottomLine />
              <img src={harshRealityImg} alt=" Data is Never Safe" />
            </div>
            <div className="harshRealityInfo">
              <h1 key={0} ref={(el) => (liRefs.current[0] = el)}>
                The Harsh Reality -
                <br className="hidden lg:block" />
                <span style={{ fontWeight: "bold" }}>
                  Your Data Is Never 100% Safe{" "}
                </span>
              </h1>
              <HeadingBottomLine
                key={1}
                ref={(el) => (liRefs.current[1] = el)}
              />
              <p key={2} ref={(el) => (liRefs.current[2] = el)}>
                From global enterprises to small businesses, no one is immune to
                data threats. Ransomware attacks have surged by 93% year over
                year, hardware failures account for 45% of unplanned downtime,
                and human errors contribute to nearly 88% of all data breaches.
                The risks are real, and the stakes are higher than ever.
              </p>
              <CTAButton
                buttonText={"Get Started"}
                hoverText={"Get Started"}
                route_link={"contact-us"}
              />
            </div>
          </div>
        </section>

        <section
          ref={sectionRef}
          className="backupServices"
          style={{ background: "#000000" }}
        >
          <div className="backupServicesHead">
            <h3>How ESDS backup services ensure Data Resilience?</h3>
            <HeadingBottomLine />
            <h3>
              Unbreakable Data Resilience – Because Downtime is Not an Option
            </h3>
          </div>
          <div ref={containerRef} className="backupServicesContainer">
            <div ref={addToRefs} className="backupServicesCard1">
              <div className="logo">
                <img src={dataProtection} alt="Data Protection" />
              </div>
              <h3>Data Protection</h3>
              <p>
                Your data is protected with enterprise-grade security and
                compliance-driven measures, ensuring end-to-end encryption and
                secure storage.
              </p>
            </div>
            <div ref={addToRefs} className="backupServicesCard1">
              <div className="logo">
                <img src={dataRecovery} alt="Data Recovery " />
              </div>
              <h3>Data Recovery </h3>
              <p>
                Retrieve your critical data instantly, anytime, anywhere, with
                our seamless recovery mechanisms.
              </p>
            </div>
            <div ref={addToRefs} className="backupServicesCard1">
              <div className="logo">
                <img src={dataLiberation} alt="Data Liberation" />
              </div>
              <h3>Data Liberation</h3>
              <p>
                Eliminate vendor lock-ins and retain complete control over your
                data with open, flexible backup solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="esdsSolutions" style={{ background: "#000000" }}>
          <div className="esdsSolutionsHead">
            <h3>
              How Does ESDS Ensure Fast, Reliable, and Cost-
              <br className="hidden lg:block" />
              Effective Backup Solutions?
            </h3>
            <HeadingBottomLine />
          </div>

          <div className="esdsSolutionContainer">
            <div className="esdsSolutionContainerColumn1"></div>
            <div className="esdsSolutionContainerColumn2">
              <img src={column2} alt="Cloud Backup Solutions" />
            </div>
            <div className="esdsSolutionContainerColumn3"></div>
          </div>
        </section>

        <section className="benefitsOfEsds" style={{ background: "#000000" }}>
          <h3>
            The Core{" "}
            <span style={{ fontWeight: "bold" }}>Benefits of ESDS</span> Backup
            & Data Protection
          </h3>
          <HeadingBottomLine />
          <div className="benefitsOfEsdsContainer">
            <div className="benefitsOfEsdsInfo">
              <ul>
                <li key={0} ref={(el) => (BenefitsOfEsdsRefs.current[0] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Ransomware Protection –
                  </span>{" "}
                  SSL/TLS encrypted port in transit
                </li>
                <li key={1} ref={(el) => (BenefitsOfEsdsRefs.current[1] = el)}>
                  {" "}
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Reliable Data Recovery –
                  </span>{" "}
                  No VPN required for access
                </li>
                <li key={2} ref={(el) => (BenefitsOfEsdsRefs.current[2] = el)}>
                  {" "}
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Disaster Recovery Readiness -
                  </span>{" "}
                  Offsite storage in secure cloud repository
                </li>
                <li key={3} ref={(el) => (BenefitsOfEsdsRefs.current[3] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Data Security -
                  </span>{" "}
                  AES-256 encryption for all stored data
                </li>
                <li key={4} ref={(el) => (BenefitsOfEsdsRefs.current[4] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Improved Compliance -
                  </span>{" "}
                  Firewall security with IDS & IPS protection
                </li>
                <li key={5} ref={(el) => (BenefitsOfEsdsRefs.current[5] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Optimized Bandwidth Usage -
                  </span>{" "}
                  Source-level de-duplication & compression
                </li>
                <li key={6} ref={(el) => (BenefitsOfEsdsRefs.current[6] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Dual Data Copy for Redundancy -
                  </span>{" "}
                  Ensuring geographic diversity
                </li>
                <li key={7} ref={(el) => (BenefitsOfEsdsRefs.current[7] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    O365 Backup & Kubernetes Support -
                  </span>{" "}
                  Expanded protection for cloud workloads
                </li>
                <li key={8} ref={(el) => (BenefitsOfEsdsRefs.current[8] = el)}>
                  <span style={{ color: "#00a3ff", fontWeight: "bold" }}>
                    Guaranteed Backup & Restoration -
                  </span>{" "}
                  Verified backups for assured recovery
                </li>
              </ul>
            </div>
            <div className="benefitsOfEsdsImg">
              <img src={benefitsOfEsds} alt="Benefits Of Esds" />
            </div>
          </div>
        </section>
        <section className="lastSegment" style={{ background: "#000000" }}>
          <h3
            className="text-3xl font-light"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Trusted by Leading Enterprises
          </h3>

          <Partner color={"#00000b"} logosArray={logos} />
          <CTAButton
            buttonText={"Get Started with Secure Backup Solutions Today!"}
            hoverText={"Get Started with Secure Backup Solutions Today!"}
            route_link={"contact-us"}
          />
          <h3 className="text-2xl font-light">
            Don’t wait for a data disaster to take action. Protect your critical
            business data with ESDS{" "}
            <span style={{ fontWeight: "bold" }}>Backup as a Service.</span>
          </h3>
        </section>
        <FooterFinal BgColor={""} />
      </div>
    </>
  );
};

export default BaaS;

import React,{useRef} from "react";
import "./CloudMigration.css";
import Header from "../../Header/Header";
import CTAButton from "../../../components/ui/CtaButton/CtaButton";
import itInfraStructure from "../../../images/Managed services/itInfraStructure.png";
import HeadingBottomLine from "../../../components/ui/HeadingBottomLine";
import questionMark from "../../../images/Managed services/questionMark.svg";
import logoStep1 from "../../../images/Managed services/logoStep1.svg";
import logoStep2 from "../../../images/Managed services/logoStep2.svg";
import logoStep3 from "../../../images/Managed services/logoStep3.svg";
import logoStep4 from "../../../images/Managed services/logoStep4.svg";
import logoStep5 from "../../../images/Managed services/logoStep5.svg";
import logoStep6 from "../../../images/Managed services/logoStep6.svg";
import FooterFinal from "../../FinalFooter/FooterFinal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CloudMigration = () => {


  React.useEffect(() => {
    const Itinfrastructureinfo = document.querySelector(
      ".itInfraStructureInfo p"
    );
    const CloudMigrationSolutions = document.querySelectorAll(
      ".card1, .card2, .card3, .card4"
    );

    const trustTeamStats = document.querySelectorAll(".trustTeamInfo h1");
    

    if (Itinfrastructureinfo) {
      gsap.fromTo(
        Itinfrastructureinfo,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".itInfraStructureInfo",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }

    if (CloudMigrationSolutions) {
      gsap.fromTo(
        CloudMigrationSolutions,
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
            trigger: ".cloudMigrationSolutionContainer",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }

     trustTeamStats.forEach((stat) => {
    let finalValue = parseInt(stat.innerText.replace(/\D/g, ""), 10); // Extract only the number
    if (!isNaN(finalValue)) {
      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: finalValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".trustTeamInfo",
            start: "top 80%",
            toggleActions: "restart none none none",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            stat.innerText = Math.floor(this.targets()[0].innerText).toLocaleString(); // Format numbers properly
          },
        }
      );
    }
  });
  }, []);


  // Card Animation

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);


// Add cards to the ref array
const addToRefs = (el) => {
  if (
    el &&
    !cardsRef.current.includes(el) &&
    el.classList.contains("steps")
  ) {
    cardsRef.current.push(el);
  }
};

React.useLayoutEffect(() => {
    // Store context to easily kill animations on unmount
    let ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers
      // ScrollTrigger.getAll().forEach(st => st.kill());

      // Reset card refs array for potential re-renders
      cardsRef.current = cardsRef.current.slice(0, 6);

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
          duration: 0.8,
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
      <div className="cloudMigration">
        <Header />
        <section className="legacyCloudMigration  ">
          <div className="legacyCloudMigrationContainer">
            <h3>
              Out with Legacy, In with the Cloud –{" "}
              <br className="hidden lg:block" />
              ESDS Cloud Migration Makes Your <br className="hidden lg:block" />
              Seamless Transformation!{" "}
            </h3>
            <span>
              <CTAButton
                buttonText={"Get Started"}
                hoverText={"Get Started"}
                route_link={"contact-us"}
                className="test"
              />
            </span>
          </div>
        </section>

        <section className="itInfraStructure" style={{ background: "#000000" }}>
          <div className="itInfraStructureContainer">
            <div className="itInfraStructureImg">
              <img src={itInfraStructure} alt="IT Infra Structure" />
            </div>
            <div className="itInfraStructureInfo">
              <h3>
                Is Your{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Current IT Infrastructure
                </span>{" "}
                Holding Back Your Growth?
              </h3>
              <HeadingBottomLine />
              <p>
                <span style={{ color: "#00A3FF" }}>
                  94% of enterprises have already embraced cloud services
                </span>
                , recognizing the limitations of outdated IT systems. Legacy
                infrastructure often struggles with scalability, leading to
                reduced agility and longer innovation cycles. Businesses stuck
                in traditional setups face rising maintenance costs, slower
                decision-making, and the inability to adapt to rapidly changing
                market demands.{" "}
                <span style={{ color: "#00A3FF" }}>
                  With 83% of enterprise workloads expected
                </span>{" "}
                to be in the cloud by year-end, staying tethered to aging
                systems risks falling behind in a world driven by speed,
                resilience, and innovation.
              </p>
            </div>
          </div>
        </section>

        <section
          className="criticalQuestions"
          style={{ background: "#000000" }}
        >
          <div className="criticalQuestionsContainer">
            <h1>ASK YOURSELF THE CRITICAL QUESTIONS</h1>
            <HeadingBottomLine />
            <h3>
              Are your outdated legacy systems preventing your business from
              achieving its full potential? <br className="hidden lg:block" />{" "}
              Is Your IT Infrastructure adapting to the demands of modern
              Technology?
            </h3>
            <div className="questionMarkLines">
              <div className="questionMarkLine"></div>
              <div className="questionMarkLine1"></div>
              <div className="questionMarkHalfCircle">
                <img src={questionMark} alt="Question Mark" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="cloudMigrationSolution"
          style={{ background: "#000000" }}
        >
          <h3>
            Comprehensive{" "}
            <span className="font-bold">
              Cloud Migration Solutions
              <br className="hidden lg:block" /> for Seamless
            </span>{" "}
            Transformation
          </h3>
          <HeadingBottomLine />
          <h1>
            We deliver tailored cloud migration solutions designed to meet your
            business goals while ensuring minimal disruption.
          </h1>
          <div className="cloudMigrationSolutionContainer">
            <div className="card1">
              <div>
                <h3 style={{ color: "#01DFF1" }}>
                  On-Premise to cloud migration
                </h3>
                <p>
                  Transition seamlessly from on-premise to the cloud with
                  minimal
                  <br className="hidden lg:block" />
                  disruption. Retain control while unlocking cloud benefits.
                </p>
              </div>
            </div>
            <div className="card2">
              <div>
                <h3 style={{ color: "#01DFF1" }}>
                  On-Premise to cloud migration
                </h3>
                <p>
                  Transition seamlessly from on-premise to the cloud with
                  minimal
                  <br className="hidden lg:block" />
                  disruption. Retain control while unlocking cloud benefits.
                </p>
              </div>
            </div>
          </div>
          <div
            className="cloudMigrationSolutionContainer"
            style={{ marginTop: "15px" }}
          >
            <div className="card3">
              <div>
                <h3 style={{ color: "#01DFF1" }}>
                  On-Premise to cloud migration
                </h3>
                <p>
                  Transition seamlessly from on-premise to the cloud with
                  minimal
                  <br className="hidden lg:block" />
                  disruption. Retain control while unlocking cloud benefits.
                </p>
              </div>
            </div>
            <div className="card4">
              <div>
                <h3 style={{ color: "#01DFF1" }}>
                  On-Premise to cloud migration
                </h3>
                <p>
                  Transition seamlessly from on-premise to the cloud with
                  minimal
                  <br className="hidden lg:block" />
                  disruption. Retain control while unlocking cloud benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="trustTeam" style={{ background: "#000000" }}>
          <h3>
            Looking for a Proven,{" "}
            <span className="font-bold">Trusted Team</span> for Your Cloud
            Migration ?
          </h3>
          <HeadingBottomLine />
          <div className="trustTeamInfo">
            <div className="info1">
              <h1 style={{ color: "#0596FF" }}>
                Over 1,000 Successful Migrations
              </h1>
              <p>with minimal downtime</p>
            </div>
            <div className="info2">
              <h1 style={{ color: "#0596FF" }}>15% Faster Execution</h1>
              <p>in migrating workloads</p>
            </div>
            <div className="info3">
              <h1 style={{ color: "#0596FF" }}>20-25% Cost Reduction</h1>
              <p>through optimized cloud strategies</p>
            </div>
            <div className="info4">
              <h1 style={{ color: "#0596FF" }}>6,000+ devices Migrated</h1>
              <p>seamlessly across various environments</p>
            </div>
            <div className="info5">
              <h1 style={{ color: "#0596FF" }}>99% Success Rate</h1>
              <p>in cloud migration activities executed</p>
            </div>
            <div className="info6">
              <h1 style={{ color: "#0596FF" }}>1000 + Database migration</h1>
              <p>successfully undertaken</p>
            </div>
          </div>
        </section>

        <section ref={sectionRef} className="sixStepBluePrint" style={{ background: "#000000" }}>
          <h3>Our 6-Step Blueprint for Seamless Cloud Migration</h3>
          <HeadingBottomLine />
          <div ref={containerRef} className="sixSteps">
            <div ref={addToRefs} className="steps">
              <div className="innerStep">
                <span>
                  <img src={logoStep1} alt="Assessment" />
                </span>
                <h3>Assessment</h3>
              </div>
              <p>
                In-depth analysis of your existing infrastructure and business
                goals.
              </p>
            </div>
            <div ref={addToRefs} className="steps">
              <div className="innerStep">
                <span>
                  <img src={logoStep2} alt="Planning" />
                </span>
                <h3>Planning</h3>
              </div>
              <p>
                Tailored strategy covering timelines, risks, and priorities.
              </p>
            </div>
            <div ref={addToRefs} className="steps">
              <div className="innerStep">
                <span>
                  <img src={logoStep3} alt="Migration" />
                </span>
                <h3>Migration</h3>
              </div>
              <p>
                Execute seamless transitions to the cloud with zero data loss.
              </p>
            </div>
            <div ref={addToRefs} className="steps">
              <div className="innerStep">
                <span>
                  <img src={logoStep4} alt="Validation" />
                </span>
                <h3>Validation</h3>
              </div>
              <p>Ensure performance and reliability post-migration.</p>
            </div>
            <div ref={addToRefs} className="steps">
              <div className="innerStep">
                <span>
                  <img src={logoStep5} alt="Optimization" />
                </span>
                <h3>Optimization</h3>
              </div>
              <p>Fine-tune applications and workloads for peak efficiency.</p>
            </div>
            <div ref={addToRefs} className="steps">
              <div className="innerStep">
                <span>
                  <img src={logoStep6} alt="Support" />
                </span>
                <h3>Support</h3>
              </div>
              <p>
                Continuous monitoring and 24x7 assistance for your cloud
                environment.
              </p>
            </div>
          </div>
        </section>

        <FooterFinal BgColor="" />
      </div>
    </>
  );
};

export default CloudMigration;

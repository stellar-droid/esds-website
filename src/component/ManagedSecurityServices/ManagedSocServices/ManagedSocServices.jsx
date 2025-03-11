import React from "react";
import CTAButton from "../../../components/ui/CtaButton/CtaButton";
import bgManagedSocServices from "../../../images/manage security/ManagedSocServices/bgManagedSocServices.png";
import "./ManagedSocServices.css";
import Header from "../../Header/Header";
import HeadingBottomLine from "../../../components/ui/HeadingBottomLine";
import cyberAttackImg from "../../../images/manage security/ManagedSocServices/cyberAttackImg.png";
import cyberAttackBusinessImg from "../../../images/manage security/ManagedSocServices/cyberAttackBusinessImg.png";
const ManagedSocServices = () => {
  return (
    <>
      <div className="managedSocServices">
        <Header />
        <section
          className="worldOfLiimitless"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="worldOfLiimitlessText">
            <h3>
              Why limit your IT security, in a{" "}
              <br className="hidden lg:block" />
              <span style={{ fontWeight: "bold" }}>
                world of limitless
              </span>{" "}
              threats?
            </h3>
            <p>
              Your defenses can't stand still—our evolving security strategy
              <br className="hidden lg:block" />
              empowers you to discover, prevent, and respond to advanced
              <br className="hidden lg:block" />
              threats with a robust Security Operation Centre capability
            </p>
            <CTAButton
              hoverText={"Learn More"}
              buttonText={"Learn More"}
              route_link={"contact-us"}
            />
          </div>
        </section>

        <section
          className="surviveCyberAttack"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="surviveCyberAttackContainer">
            <div className="surviveCyberAttackText">
              <h3>
                Is your well prepared to{" "}
                <span style={{ fontWeight: "bold" }}>
                  survive a Cyber Security
                </span>{" "}
                attack?
              </h3>
              <HeadingBottomLine />
              <p>
                <span style={{ color: "#00A3FF", fontWeight: "bold" }}>
                  The real scenario tells us, 85% of organizations do not have
                  adequate cyber security measures
                </span>{" "}
                in place to defend against modern threats. Many companies
                mistakenly believe that a standard firewall or basic antivirus
                software will shield them from today’s sophisticated
                cyber-attacks, but this false sense of security can lead to
                devastating results.
              </p>
            </div>
            <div className="surviveCyberAttackImg">
              <img src={cyberAttackImg} alt="Cyber Security Attack" />
            </div>
          </div>
        </section>

        <section
          className="cyberAttackBusiness"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="cyberAttackBusinessContainer">
            <div className="cyberAttackBusinessImg">
              <img
                src={cyberAttackBusinessImg}
                alt="Cyber Security attack on Business "
              />
            </div>
            <div className="cyberAttackBusinessText">
              <h3>
                What if a{" "}
                <span style={{ fontWeight: "bold" }}>cyber attack</span> hits
                your business?
              </h3>
              <HeadingBottomLine />
              <p>
                Research shows that <span style={{color:"#00A3FF"}}>51% of customers</span> would stop engaging with a
                company after their personal information were compromised,
                reflecting the severe impact on customer trust. While <span style={{color:"#00A3FF"}}>27% of
                companies close down permanently</span> after facing a significant
                cyber-attack for the first time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagedSocServices;

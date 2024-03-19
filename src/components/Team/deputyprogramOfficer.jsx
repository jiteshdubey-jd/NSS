import React from "react";
// import "../.././styles/team/teams.css";
import "../.././styles/team/deputyprogramOfficer.css";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Images from "../.././assets/team/index";

const Team = () => {
  const [isFlipped, setIsFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  useEffect(() => {
    document.title = "Teams | TCET NSS UNIT";
  });

  const handleClick = (e, newVersion) => {
    setIsFlipped((prev) => {
      console.log(e, prev[e]);
      return {
        ...prev,
        [e]: !prev[e],
      };
    });
  };

  return (
    <div>
      <div id="Deputy-Programm-officer-container">
        <div className="depupo_container">
          <h1 className="dp_head" id="deputy-programme-officer">
            deputy-Programme officers
          </h1>
          <p className="dp_about">
            At the core of implementation, our Deputy Program Officers play a
            crucial role, transforming vision into tangible reality and ensuring
            that each project mirrors the essence of TCET NSS.
          </p>
        </div>
        <div className="dep-prog">
          <div id="dep_box">
            <div
              className="deputy-program-officer-card"
              onClick={() => handleClick("card3")}
            >
              <ReactCardFlip
                isFlipped={isFlipped.card3}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={Images.SajjanKumar}
                      alt="Programme Officer Vinita maam"
                    />
                    <div className="depu_po_details">
                      <h1>SajjanKumar Lal</h1>
                      <h3>-Deputy Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="back_content">
                    <h3>FROM THE PROGRAMME OFFICER’S DESK</h3>
                    <p>
                      The TCET NSS UNIT centers on Education, Health, Societal
                      Welfare, and Environment. Fueled by unity and enthusiasm,
                      volunteers from all branches form a cohesive NSS family.
                      Their strong bond transcends challenges, making them an
                      inspirational force of hope and unity in the college.
                      Prioritizing societal upliftment, these volunteers are an
                      integral part of the community they serve, actively
                      addressing issues and finding solutions. Despite global
                      difficulties, the volunteers approach community service
                      with renewed vigor and determination, earning our complete
                      trust and everlasting pride.
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div id="dep_box">
            <div
              className="deputy-program-officer-card"
              onClick={() => handleClick("card4")}
            >
              <ReactCardFlip
                isFlipped={isFlipped.card4}
                flipDirection="horizontal"
              >
                <div className="front">
                  <div className="front_content">
                    <img
                      src={Images.Jyoti}
                      alt="Programme Officer Vinita maam"
                    />
                    <div className="depu_po_details">
                      <h1>Jyoti Vanawe</h1>
                      <h3>-Deputy Programme Officer</h3>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="back_content">
                    <h3>FROM THE PROGRAMME OFFICER’S DESK</h3>
                    <p>
                      The TCET NSS UNIT upholds core values of Respect,
                      Discipline, and Punctuality, guided by the motto "NOT ME
                      BUT YOU." Comprising 200 dedicated volunteers from various
                      branches, they unite to serve the community with
                      unwavering dedication and responsibility. Persistent and
                      committed, the unit prioritizes community upliftment,
                      addressing local issues with solutions. Even during
                      lockdown, volunteers brought joy, and now, with offline
                      activities, their enthusiasm for community service has
                      heightened. Post-tenure, volunteers evolve into adept
                      multitaskers, earning our complete trust and everlasting
                      pride.
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Team;

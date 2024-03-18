import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Images from "../assets/team/index";
import "../styles/team/teamdebug.css";

const Debug = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className="prog-officer" onClick={() => handleClick()}>
        <img src={Images.Vinita} alt="Programmer Officer - NSS" />
        <div className="prog-detail">
          <h1>Dr. Vinita Agarwal</h1>
          <h3>Programme Officer</h3>
        </div>
      </div>
      <div className="prog-officer" onClick={() => handleClick()}>
        <img src={Images.Satish} alt="Programmer Officer - NSS" />
        <div className="prog-detail">
          <h1>Dr. Vinita Agarwal</h1>
          <h3>Programme Officer</h3>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Debug;

import React from "react";

import "./BenefitCard.css";

const BenefitCard = ({ title, img, text }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-card-content">
        <div className="benefit-card-icon">
          <img src={img} alt="icon"/>
        </div>
        <div className="benefit-card-content-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div> 
      </div>
    </div>
  );
};

export default BenefitCard;

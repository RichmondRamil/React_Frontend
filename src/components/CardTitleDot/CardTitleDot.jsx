import React from "react";
import "./cardtitledot.scss";

const CardTitleDot = ({ title }) => {
  return (
    <div className="card-title-dot">
      <div className="card-title-dot__container-title">
        <h2>{title}</h2>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default CardTitleDot;

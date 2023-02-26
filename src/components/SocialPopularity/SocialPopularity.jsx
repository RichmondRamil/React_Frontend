import React from "react";
import "./socialpopularity.scss";

const SocialPopularity = ({
  socials,
  ratings,
  percentClass,
  percent,
  update,
  socialClass,
  date,
  socialImage,
  name,
  position,
}) => {
  return (
    <div className="social">
      <div className="social__container">
        <div className="social__container-text">
          <h4>{socials} Ratings</h4>
          <h2>
            {ratings} <span className={percentClass}>{percent}</span>
          </h2>
          <h3>{update}</h3>
          <p className={socialClass}>{date}</p>
        </div>
        <div className="social__container-image">
          <img src={socialImage} alt="" />
          <div className="profile-name">
            <h3>{name}</h3>
            <h5>Position</h5>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPopularity;

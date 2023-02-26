import React from "react";
import "./bannerimage.scss";

const BannerImage = ({ image, birdname, eggs, sales, percent, desc }) => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__container-image">
          <img src={image} alt="" />
        </div>
        <div className="banner__container-text">
          <h2>{birdname}</h2>
          <h3>
            {eggs}
            <span className={sales}>{percent}</span>
          </h3>
          <p>{desc}</p>
          <button>View Eggs Update</button>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;

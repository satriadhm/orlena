// File: src/components/GridContainer.js

import React from "react";
import "../styles/GridContainer.css";
import bestSelling1 from "../public/images/best selling1.png";
import bestSelling2 from "../public/images/best selling2.png";
import cocoaHorizon from "../public/images/cocoaHorizon.png";

const GridContainer = () => {
  return (
    <div className="grid-container">
      <div className="grid-item top-left">
        <img src={bestSelling1} alt="Top Left" />
      </div>
      <div className="grid-item top-right">
        <p>Made from 100% of the Best Cocoa Beans!</p>
      </div>
      <div className="grid-item bottom-left">
        <div className="bottom-left-content">
          <img src={cocoaHorizon} alt="Cocoa Horizon" />
          <p>
            Thank you for your support in advancing programs with positive
            impacts, with our vision to improve the welfare of cocoa farmers
            through the formation of independent communities that protect the
            environment.
          </p>
        </div>
      </div>
      <div className="grid-item bottom-right">
        <img src={bestSelling2} alt="Bottom Right" />
      </div>
    </div>
  );
};

export default GridContainer;

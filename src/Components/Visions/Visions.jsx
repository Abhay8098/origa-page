import React from "react";
import vision from "../../assets/visions.png";

const Visions = () => {
  return (
    <div className="vision mt-40">
      <div className="container">
        <div className="d-flex align-item--center f-wrap">
          <div className="flex-child">
            <div className="w-50" >
            <div className="d-flex mb-20" >
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 40321" opacity="0.6">
                <circle
                  id="Ellipse 188"
                  cx="1.99976"
                  cy="2"
                  r="2"
                  fill="#2B2A2C"
                />
                <circle
                  id="Ellipse 189"
                  cx="9.99976"
                  cy="7"
                  r="5"
                  fill="#2B2A2C"
                />
              </g>
            </svg>
            <p className="c-gray m-10">ORIGA'S HASSLE FREE EXPERIENCE</p>
            </div>
            <h2 className="mb-20">Our Visions</h2>
            <p className="c-gray">
              "Facilate capacity building that builds enterprises,create jobs
              and income at all levels create jobs and income at all levels"
            </p>
          </div>
          </div>

          <div className="flex-child">
            <img className="img-child" src={vision} alt='vision'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visions;

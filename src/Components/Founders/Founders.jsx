import React from "react";
import founder_a_Img from "../../assets/founder_a.png";
import founder_b_Img from "../../assets/founder_b.png";
const Founders = () => {
  return (
    <div className="Founder">
      <div className="container">
        <div className="d-flex align-item--center f-wrap">
          <div className="flex-child">
            <div className="d-flex mb-20">
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
              <p className="c-gray m-10">ORIGA SERVICE</p>
            </div>
            <h2 className="mb-20">Our Founders</h2>
            <p className="c-gray">
              "Facilate capacity building that builds enterprises,create jobs
              and income at all levels create jobs and income at all levels"
            </p>
          </div>
        </div>
      </div>
      <div className="founder-section d-flex">
        <div className="founder-card founder-card-1 d-flex">
          <div className="card-img">
            <img src={founder_a_Img} alt="" />
          </div>
          <div className="card-content" >
            <h2>Mr Srirang Tambe</h2>
            <p className="mb-20">Founder & CEO</p>
            <div className="hider">
              <p>
                Lorem ipsum dolor si.
              </p>
              <p className="small-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="founder-card founder-card-2 d-flex  justify-content--space-between">
          <div className="card-content">
            <h2>Mr Srirang Tambe</h2>
            <p className="mb-20">Founder & CEO</p>
            <div className="hider">
              <p>
                Lorem 
              </p>
              <p className="small-text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card-img">
            <img src={founder_b_Img} alt="" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Founders;

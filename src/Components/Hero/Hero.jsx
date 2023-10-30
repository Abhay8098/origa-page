import React from "react";
import machine_space from "../../assets/machine_space.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="d-flex align-item--center f-wrap">
          <div className="flex-child--30 flex-child--T100">
            <div>
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
                <p className="c-gray m-10">TEAM ORIGA</p>
              </div>
              <h1>We are set to revolutionize the industrial Machine Space</h1>
              <p>
                From Machine to tools to finance everything you need in one
                place
              </p>
            </div>
          </div>
          <div className="flex-child--70 flex-child--T100">
            <div className="hero__img">
              <img src={machine_space} alt="" style={{width:"100%"}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

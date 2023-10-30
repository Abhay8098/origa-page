import React from "react";
import audienceImg from "../../assets/audeince.png";
const Audience = () => {
  return (
    <div className="audience mt-40">
      <div className="container">
        <div className="d-flex align-item--center f-wrap">
          <div className="flex-child">
            <img className="img-child" src={audienceImg} />
          </div>
          <div className="flex-child ">
            <div className="w-50 m-auto">
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
                <p className="c-gray m-10">ORIGA'S HASSLE FREE EXPERIENCE</p>
              </div>
              <h2 className="mb-20">
                Lets your services reach a new audience!!
              </h2>
              <p className="c-gray">
                Partner with us to deliver exceptional service in multiple
                cities across the Country, to build to build exceptional
                customer experience from repair to logistics
              </p>
              <button className="btn-primary">Partner with Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;

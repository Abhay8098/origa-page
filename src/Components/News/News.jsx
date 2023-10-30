import { ArrowBack } from "@mui/icons-material";
import React from "react";
import ImageSlider from "./ImageSlider";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="news mt-20">
      <div className="container">
        <div className="d-flex align-item--center f-wrap ">
          <div className="flex-child news-content">
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
            <h2 className="mb-20">Our News</h2>
            <p className="c-gray">
              "Facilate capacity building that builds enterprises,create jobs
              and income at all levels create jobs and income at all levels"
            </p>
          </div>
          {/* <div className="flex-child news-slider--controler">
            <button>
              <ArrowBack />
            </button>
            <button>
              <ArrowBack />
            </button>
          </div> */}
        </div>
        <div className="image-slide-section">
          <ImageSlider/>
        </div>
      </div>
    </div>
  );
};

export default News;

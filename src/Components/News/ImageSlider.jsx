import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React from "react";
import newsImg from "../../assets/news.png";
import { yellow } from "@mui/material/colors";
const ImageSlider = () => {
  const images = [
    {
      id: 1,
      src: newsImg,
      alt: "Image 1",
    },
    {
      id: 2,
      src: newsImg,
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "",
      alt: "Image 3",
    },
  ];
  const settings = {
    infinite: false,
    dots: false,
    className: "center",
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20">
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="news-card">
              {/* <img src={newsImg} alt={item.alt} width={500} /> */}
              <Card sx={{ maxWidth: 545 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="440"
                    image={newsImg}
                    alt="green iguana"
                  />
                  <div className="bg-prime">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ImageSlider;

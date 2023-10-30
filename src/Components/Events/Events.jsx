import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import eventImg_a from '../../assets/event_a.png'
import eventImg_b from '../../assets/event_a.png'
const Events = () => {
  return (
    <div className="event mt-40">
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
              <p className="c-gray m-10">ORIGA'S HASSLE FREE EXPERIENCE</p>
            </div>
            <h2 className="mb-20">Our Events</h2>
            <p className="c-gray">
              "Facilate capacity building that builds enterprises,create jobs
              and income at all levels create jobs and income at all levels"
            </p>
          </div>
        </div>
        <div className="d-flex mt-20 justify-content--space-between f-wrap">
          <div className="mb-20"><Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={eventImg_a}
                alt="green iguana"
              />
              <CardContent >
                <Typography gutterBottom align="center"  variant="h5" component="div">
                  Remote Assist
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></div>
         <div className="mb-20"> <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={eventImg_a}
                alt="green iguana"
              />
              <CardContent >
                <Typography gutterBottom align="center"  variant="h5" component="div">
                  Remote Assist
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></div>
         <div className="mb-20"> <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={eventImg_a}
                alt="green iguana"
              />
              <CardContent >
                <Typography gutterBottom align="center"  variant="h5" component="div">
                  Remote Assist
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></div>
        </div>
      </div>
    </div>
  );
};

export default Events;

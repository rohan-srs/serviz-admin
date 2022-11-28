import React from "react";
import "../scss/components/widget.scss";
import { PersonOutlined, SchoolSharp, BookTwoTone } from "@mui/icons-material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { whiteText } from "../utils";
import { blue } from "@mui/material/colors";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "Students":
      data = {
        title: "STUDENTS",
        link: "See all Students",
        icon: <PersonOutlined className="icon" />,
      };
      break;

    case "Projects":
      data = {
        title: "PROJECTS",
        link: "See all Projects",
        icon: <BookTwoTone className="icon" />,
      };
      break;

    case "Teachers":
      data = {
        title: "TEACHERS",
        link: "See all Teachers",
        icon: <SchoolSharp className="icon" />,
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">3100</span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage">
          <CircularProgressbar
            value={66}
            text={"66%"}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              //   rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",

              // Text size
              textSize: "18px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              //pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              textColor: whiteText,
              trailColor: blue,
              backgroundColor: whiteText,
            })}
          />
        </div>

        <div className="icon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;

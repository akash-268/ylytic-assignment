import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressRing() {
  const percentage = '40';
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        strokeLinecap: "round",
        textSize: "20px",
        pathTransitionDuration: 0.5,
        pathColor: `rgb(158,68,255)`,
        textColor: "#ac25e6",
        trailColor: "#ceadf7",
        backgroundColor: "#3e98c7",
      })}
    />
  );
}

export default ProgressRing;

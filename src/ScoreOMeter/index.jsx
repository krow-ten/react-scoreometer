import React from "react";
import PropTypes from "prop-types";
import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";

const MIN_SCORE = 0;
const MAX_SCORE = 4;

const redFill = "rgb(220, 115, 32)";
const yellowFill = "rgb(249, 207, 66)";
const greenFill = "rgb(74, 185, 100)";

const ScoreOMeter = ({ score }) => {
  const scoreAsNumber = parseFloat(score);

  const redArc = arc()
    .innerRadius(0.8)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(-0.15)();

  const yellowArc = arc()
    .innerRadius(0.8)
    .outerRadius(1)
    .startAngle(-0.15)
    .endAngle(0.8)();

  const greenArc = arc()
    .innerRadius(0.8)
    .outerRadius(1)
    .startAngle(0.8)
    .endAngle(Math.PI / 2)();

  const percent = scaleLinear().domain([MIN_SCORE, MAX_SCORE]).range([0, 100])(
    scoreAsNumber
  );

  const angleToRotateLine = scaleLinear()
    .domain([0, 100])
    .range([-90, 90])
    .clamp(true)(percent);

  return (
    <div style={{ width: "200px" }}>
      <svg style={{ overflow: "visible" }} viewBox={"-1, -1, 2, 1"}>
        <path d={redArc} fill={redFill} />
        <path d={yellowArc} fill={yellowFill} />
        <path d={greenArc} fill={greenFill} />

        <line
          x1="0"
          y1="-1"
          x2="0"
          y2="-0.7"
          stroke-width="0.05"
          stroke="#222"
          transform={`rotate(${angleToRotateLine})`}
        />
      </svg>

      <div
        style={{
          fontSize: "48px",
          marginTop: "-25%",
          textAlign: "center",
        }}
      >
        {score}
      </div>
    </div>
  );
};

ScoreOMeter.propTypes = {
  score: PropTypes.string,
};

export default ScoreOMeter;

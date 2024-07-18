// Employment component
// Displays my work experience

import React from "react";
import "../styles/experiences.css";

function Employment(props) {
  return (
    <div className="employment vertical-stack">
      <img
        className="employment-icon"
        src={`images/experiences/${props.path}.png`}
      />
      <p2>{props.position}</p2>
      <p1>{props.company}</p1>
      <p1>{props.range}</p1>
      <div className="employment-links">
        {props.links.map((link, index) => (
          <a key={index} href={link.url} target="_blank">
            <img
              className="employment-link-icon"
              src={`images/icons/${link.type}-icon.png`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Employment;

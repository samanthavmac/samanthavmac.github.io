// DesignProject component
// Displays my design work

// src/components/DesignProject.js
import React from "react";
import "../styles/design-projects.css";

function DesignProjectCondensed(props) {
  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <div className="design" data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="700">
      <div className="design-left-col">
        <img
          src={`images/design-projects/${props.path}.png`}
          className="design-icon"
          alt={`${props.name} icon`}
        />
        <div className="design-left-text">
          <h5 className="design-name">{props.name}</h5>
          <p1 className="design-tagline">{props.tagline}</p1>
        </div>
      </div>

      <div className="design-right-col">
        <button className="view-more-button" onClick={handleClick}>View More</button>
      </div>
    </div>
  );
}

export default DesignProjectCondensed;

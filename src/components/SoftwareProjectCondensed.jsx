// Project component
// Description of project and link to code/case study

import React from "react";
import "../styles/software-projects.css";

function SoftwareProjectCondensed(props) {
  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card border-0 bg-transparent" style={{ width: "18rem" }}>
        <div className="card-body software-project-condsened-body vertical-stack">
          <div className="software-project-icon-container">
            <img
              className="software-project-icon"
              src={`images/software-projects/${props.path}-condensed.png`}
              alt={`${props.name} icon`}
            />
            <a onClick={handleClick}>
              <img className="play-button" src="images/icons/play-button.png" />
            </a>
          </div>
          <h5 className="name">{props.name}</h5>
          <p className="tagline">{props.tagline}</p>
          <p className="tech-stack">{props.techStack}</p>
        </div>
      </div>
    </div>
  );
}

export default SoftwareProjectCondensed;

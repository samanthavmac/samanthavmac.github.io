// Design component (expanded)
// Full design project description

import React from "react";
import EmbedFigma from "./EmbedFigma";
import "../styles/design-projects.css";

function DesignProjectExpanded({ project, onClose }) {
  return (
    <div className="design-project-expanded p-0 m-0">
      <button className="exit-button" onClick={onClose}>
        Close
      </button>

      <div className="card-body bg-transparent m-0">
        <div className="modal-text">
          <h1>{project.name}</h1>
          <h6>{project.description}</h6>
          <div className="links">
            <div className="horizontal-stack">
              {project.links.map((link, index) => (
                <button className="link-button" key={index} href={link.url}>
                  <img
                    src={`images/icons/${link.type}-icon.png`}
                    alt={`${link.type} icon`}
                  />
                  <p>{link.title}</p>
                </button>
              ))}
            </div>
          </div>
          {project.awards.length > 0 && (
            <div className="awards">
              <ul>
                {project.awards.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            {project.embedLinks.map((link, index) => (
              <EmbedFigma key={index} url={link.url} width="800" height="450" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignProjectExpanded;

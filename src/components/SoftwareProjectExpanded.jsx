// Project component (expanded)
// Full project description

import React from "react";
import "../styles/software-projects.css";
import CarouselComponent from "./CarouselComponent";

function SoftwareProjectExpanded({ project, onClose }) {
  return (
    <div className="software-project-expanded p-0 m-0">
      <button className="exit-button" onClick={onClose}>
        Close
      </button>

      <div className="card-body bg-transparent m-0">
        <div className="modal-text">
          <div className="modal-header">
            <CarouselComponent
              className="carousel"
              path={project.path}
              numImages={project.numImages}
            />
            <div className="modal-header-text vertical-stack">
              <p className="tech-stack">{project.techStack}</p>
              <h2 className="name-expanded">{project.name}</h2>
              <h6 className="usage-description">{project.usageDescription}</h6>
              <div className="links">
                <div className="horizontal-stack">
                  {project.links.map((link, index) => (
                    <a className="button-wrap" href={link.url} target="_blank">
                      <button className="link-button" key={index}>
                        <img
                          src={`images/icons/${link.type}-icon.png`}
                          alt={`${link.type} icon`}
                        />
                        <p>{link.title}</p>
                      </button>
                    </a>
                  ))}
                </div>
              </div>
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

          {project.keyFeatures.length > 0 && (
            <div className="key-features">
              <h3>Key Features</h3>
              <ul>
                {project.keyFeatures.map((description, index) => (
                  <li key={index}>
                    <span className="feature-icon">{description.icon}</span>
                    <span className="feature-text">{description.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technicalDescription?.length > 0 && (
            <div>
              <h2>Technical Breakdown</h2>
              <ul className="technical-description">
                {project.technicalDescription.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SoftwareProjectExpanded;

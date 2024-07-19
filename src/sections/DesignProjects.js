// Design Projects
// Display all product design projects

import React, { useState } from "react";
import DesignProjectsData from "../data/DesignProjectsData";
import DesignProjectCondensed from "../components/DesignProjectCondensed";
import DesignProjectExpanded from "../components/DesignProjectExpanded";

function DesignProjects() {
  const [selectedProjectKey, setSelected] = useState(null);

  const handleExpand = (key) => {
    setSelected(key);
    document.body.classList.add("modal-open");
  };

  const handleClose = () => {
    setSelected(null);
    document.body.classList.remove("modal-open");
  };

  return (
    <section id="design">
      <h2>More of design</h2>
      <div>
        {DesignProjectsData.map((project) => (
          <DesignProjectCondensed
            id={project.key}
            name={project.name}
            path={project.path}
            tagline={project.tagline}
            description={project.description}
            awards={project.awards}
            caseStudyURL={project.caseStudyURL}
            onClick={handleExpand}
          />
        ))}
      </div>

      {selectedProjectKey && (
        <div className="modal-overlay">
          <div className="modal-content">
            <DesignProjectExpanded
              project={DesignProjectsData.find(
                (p) => p.key === selectedProjectKey
              )} // Find the selected project data
              onClose={handleClose} // Pass handleClose function to close the expanded view
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default DesignProjects;

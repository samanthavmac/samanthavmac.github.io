// Projects Section
// Contains all Project components
import React, { useState } from "react";
import SoftwareProjectsData from "../data/SoftwareProjectsData";
import SoftwareProjectCondensed from "../components/SoftwareProjectCondensed";
import SoftwareProjectExpanded from "../components/SoftwareProjectExpanded";

function SoftwareProjects() {
  const [selectedProjectKey, setSelected] = useState(null);

  const handleExpand = (key) => {
    setSelected(key);
    document.body.classList.add("modal-open");
  };

  const handleClose = () => {
    setSelected(null);
    console.log("Clicked");
    document.body.classList.remove("modal-open");
  };

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <h2>Made by Samantha Mac</h2>
      <div className="container projects px-0">
        <div className="row">
          {SoftwareProjectsData.map((element) => (
            <div key={element.key} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <SoftwareProjectCondensed
                id={element.key}
                name={element.name}
                path={element.path}
                tagline={element.tagline}
                techStack={element.techStack}
                iconURL={element.iconURL}
                onClick={handleExpand}
              />
            </div>
          ))}
        </div>

        {selectedProjectKey && (
          <div className="modal-overlay">
            <div className="modal-content">
              <SoftwareProjectExpanded
                project={SoftwareProjectsData.find(
                  (p) => p.key === selectedProjectKey
                )} // Find the selected project data
                onClose={handleClose} // Pass handleClose function to close the expanded view
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function getURL(category, desiredType) {
  const link = category.find((object) => object.type === desiredType);
  return link ? link.url : null;
}

export default SoftwareProjects;

// Social component
// Link to social media

import React from "react";
import "../styles/about.css";

const Social = ({ type, passwordProtected, url, onSocialClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onSocialClick(url, passwordProtected);
  };

  return (
    <div className="card border-0 bg-transparent" style={{ width: "18rem" }}>
      <a href={url} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
        <div className="card-body horizontal-stack py-0">
          <img className="social-icon" src={`images/icons/${type}-link-icon.png`} />
          <div className="vertical-stack">
            <p1 className="type">{type}</p1>
            <p1>{url}</p1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Social;
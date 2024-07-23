// Social component
// Link to social media

import React from "react";
import "../styles/about.css";

// const Social = ({ title, path, passwordProtected, url, onSocialClick }) => {
//   const handleClick = (e) => {
//     e.preventDefault();
//     onSocialClick(url, passwordProtected);
//   };
function Social(props) {
  return (
    <a href={props.url} target="_blank">
        <button className="link-button" key={props.key}>
          <img
            src={`images/icons/${props.type}-icon.png`}
            alt={`${props.type} icon`}
          />
          <p>{props.title}</p>
        </button>
    </a>
    // <div className="card border-0 bg-transparent" style={{ width: "18rem" }}>
    //   <a href={url} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
    //     <div className="card-body horizontal-stack py-0">
    //       <img className="social-icon" src={`images/icons/${path}-link-icon.png`} />
    //     </div>
    //   </a>
    // </div>
  );
}

export default Social;

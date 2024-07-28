// Social component
// Link to social media

import React from "react";
import "../styles/about.css";


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
  );
}

export default Social;

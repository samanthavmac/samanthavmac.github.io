import React from "react";

function EmbedFigma({ url, width = "800", height = "450" }) {
  return (
    <iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width={width}
      height={height}
      src={url}
      allowFullScreen
    ></iframe>
  );
}

export default EmbedFigma;
// About
// Brief introduction and quick links

import React, { useState } from "react";
import Social from "../components/Social";
import SocialData from "../data/SocialData";
import SpotifyPlayer from "../components/SpotifyPlayer";
import PasswordPopup from "../components/PasswordPopup";
import "../styles/about.css";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const externalSitePassword = process.env.REACT_APP_EXTERNAL_SITE_PASSWORD;

  const handleSocialClick = (url, passwordProtected) => {
    if (passwordProtected) {
      setCurrentUrl(url);
      setShowPopup(true);
    } else {
      window.open(url, "_blank");
    }
  };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  // const handlePasswordSubmit = (password) => {
  //   if (password === externalSitePassword) {
  //     window.open(currentUrl, "_blank");
  //     setShowPopup(false);
  //   }
  // };

  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="700"
    >
      <div className="container px-0">
        <div className="row">
          {/* Introduction */}
          <div className="col-12 col-md-7 vertical-stack">
            <h2>Me 🤝 Spotify</h2>
            <SpotifyPlayer
              playlistId={"603wFeklPwJEIvFTbl2Y24?si=862da7e261d74c4b"}
            />
          </div>
          {/* Socials */}
          <div className="col-12 col-md-5 vertical-stack">
            <h2>Top links this month</h2>
            {SocialData.map((element) => (
              <Social
                key={element.key}
                title={element.title}
                path={element.path}
                passwordProtected={element.passwordProtected}
                url={element.url}
                onSocialClick={handleSocialClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PasswordPopup
              onClose={handleClosePopup}
              onSubmit={handlePasswordSubmit}
            />
          </div>
        </div>
      )} */}
    </section>
  );
};

export default About;

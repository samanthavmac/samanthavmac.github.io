// About
// Brief introduction and quick links

import React, { useState } from "react";
import Social from "../components/Social";
import SocialData from "../data/SocialData";
import SpotifyPlayer from "../components/SpotifyPlayer";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about">
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
                key={element.path}
                path={element.path}
                title={element.title}
                url={element.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

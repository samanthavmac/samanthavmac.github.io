// Header
// Displays name and school

import React, { useState } from "react";
import Social from "../components/Social";
import SocialData from "../data/SocialData";
import "../styles/about.css";

function HeaderBanner() {
  return (
    <div class="header horizontal-stack row">
      <img
        class="profile-image col"
        src="images/samantha-mac-headshot.png"
        alt=""
      />
      <div class="vertical-stack pt-4 col">
        <h1>Samantha Mac</h1>
        <p2>1A Software Engineering @ University of Waterloo</p2>
        <p1>
          Interests: Software for social good, product design, & accessible
          coding education
        </p1>
        <div class="socials-container horizontal-stack">
          {SocialData.map((element) => (
            <Social
              key={element.key}
              type={element.type}
              title={element.title}
              url={element.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <section id="header">
      <HeaderBanner />
    </section>
  );
}

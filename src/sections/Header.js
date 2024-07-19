// Header
// Displays name and school

import React from "react";

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

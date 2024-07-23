// Footer
// Contact information

import React from "react";
import "../styles/footer.css";
import SpotifyPlayer from "../components/SpotifyPlayer";

function Footer() {
  return (
    <section id="footer">
      <div className="footer vertical-stack">
        <p2>Thanks for stopping by!</p2>
        <p1>
          Contact samanthavaleriemac [@] gmail.com for freelance web development
          or graphic design requests.
        </p1>
        <div className="spotify-player">
          <SpotifyPlayer
            playlistId={"603wFeklPwJEIvFTbl2Y24?si=862da7e261d74c4b"}
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;

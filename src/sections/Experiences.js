// Experiences
// Display all past employment

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExperiencesData from "../data/ExperiencesData";
import Employment from "../components/Employment";
import "../styles/experiences.css";

function Experiences() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section id="experiences">
      <h2>Recent activity</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={false}
        showDots={false}
        arrows={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        transitionDuration={300}
      >
        {ExperiencesData.map((element) => (
          <div key={element.key} className="col">
            <Employment
              id={element.key}
              position={element.position}
              company={element.company}
              path={element.path}
              range={element.range}
              links={element.links}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Experiences;

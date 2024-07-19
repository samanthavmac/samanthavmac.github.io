// Carousel component
// Displays images of project

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import '../styles/index.css';

function CarouselComponent({ path, numImages }) {
  const imageArray = Array.from({ length: numImages }, (v, i) => i + 1);
  
  return (
    <Carousel
      autoPlay
      swipable
      width={230}
      infiniteLoop
      interval={1000}
      showThumbs={true}
      showStatus={false}
      thumbWidth={40}
      showIndicators={true}
      showArrows={false}
      margin={0}
    >
      {imageArray.map((index) => (
        <div key={index}>
          <img src={`images/software-projects/${path}-${index}.png`} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;

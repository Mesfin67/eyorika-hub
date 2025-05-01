import React from 'react';
import { Carousel } from 'react-bootstrap';

const HorizontalCarousel = () => {
  return (
    <Carousel controls={false} indicators={true} interval={1000} fade>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="images/homepageimg44.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="images/hpimg47.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="images/hpimg46.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="images/img54.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HorizontalCarousel;

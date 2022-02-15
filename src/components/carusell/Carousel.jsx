import React from "react";
import Slider from "react-slick";

const Carousel = ({ children, title }) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <div>
      <h2 className="carousel-title">{title}</h2>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;

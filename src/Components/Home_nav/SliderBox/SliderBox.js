import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ProductSlide/product.css"
// Require
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderBox = () => {
  const Slides = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/bb37d39e16a778b0.jpg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/35b4ee368808a95e.jpg?q=50",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/fd1a0c94818d3359.jpg?q=50",
    },
    {
      id: 4,
      url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/0456ee09905ec903.jpg?q=50",
    },
    {
      id: 5,
      url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2b15b3e8605c6b68.jpg?q=50",
    },
    {
      id: 6,
      url: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/d0eca35da5d0d817.jpg?q=50",
    },
  ];
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {Slides.map((item, index) => {
        return (
          <div className="first_slider" key={index}>
            <img src={item.url} alt="img" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default SliderBox;

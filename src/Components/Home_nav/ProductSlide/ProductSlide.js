import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./product.css";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box varient="span">
      {hours} : {minutes} : {seconds} Left
    </Box>
  );
};

const ProductSlide = ({ products, title, timer }) => {
  return (
    <>
      <Box className="slide_header">
        <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
          {title}
        </Typography>
        {timer && (
          <Box className="timer">
            <img width={24} src={timerURL} alt="clock img" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />{" "}
            {/* 14hrs ==> miliseconds (5.04e+7)*/}
          </Box>
        )}
        <Link
          to="/products"
          style={{ marginLeft: "auto", textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
              borderRadius: "2px",
              backgroundColor: "#2874f0",
              marginLeft: "auto",
            }}
          >
            Veiw All
          </Button>
        </Link>
      </Box>

      <Box className="slider">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="offer_slide"
        >
          {products.map((product, index) => {
            return (
              <Link
                to={`product/${product.id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Box className="product" textAlign="center">
                  <img
                    className="product_img"
                    src={product.url}
                    alt="img"
                    style={{ width: "auto", height: "150px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#212121",
                      fontWeight: 550,
                      marginTop: "10px",
                      wordWrap: "nowrap",
                    }}
                  >
                    {product.title.shortTitle}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#388e3c",
                      marginTop: "10px",
                    }}
                  >
                    {product.discount}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#111",
                      opacity: "0.6",
                      marginTop: "10px",
                    }}
                  >
                    {product.tagline}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default ProductSlide;

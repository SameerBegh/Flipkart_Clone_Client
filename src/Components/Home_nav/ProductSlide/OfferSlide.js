import React from "react";
import { Box } from "@mui/material";
import ProductSlide from "./ProductSlide";

const OfferSlide = ({ products }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Box className="offer">
      <Box className="offer_slides">
        <ProductSlide
          products={products}
          title="Deal of the Day"
          timer={true}
        />
      </Box>
      <Box className="Ad_img">
        <img src={adURL} alt="ad" style={{ width: "220px" }} />
      </Box>
    </Box>
  );
};

export default OfferSlide;

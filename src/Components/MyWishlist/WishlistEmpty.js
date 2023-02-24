import React from "react";
import { Box, Typography } from "@mui/material";
import "./Wishlist.css";

const WishlistEmpty = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <>
      <Box className="wish_container">
        <Box className="empty_wish">
          <img src={imgurl} alt="empty" style={{ width: "30%" }} />
          <Typography
            sx={{
              fontSize: "22px",
              marginTop: "24px",
              fontFamily: "inherit",
              fontWeight: 600,
            }}
          >
            Empty Wishlist
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              margin: "10px 0 20px",
              fontFamily: "inherit",
            }}
          >
            You have no items in your wishlist. Start adding!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default WishlistEmpty;

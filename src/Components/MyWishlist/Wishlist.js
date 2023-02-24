import React, { useContext, useEffect, useRef } from "react";
import "./Wishlist.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import WishlistStyle from "./WishlistStyle";
import { DataContext } from "../Context/DataProvider";
import WishlistEmpty from "./WishlistEmpty";
import axios from "axios";

const Wishlist = () => {
  const { wish, setwish } = useContext(DataContext);

  const wishlistItems = useRef();

  // const URL = "http://localhost:3000";
  const URL = "https://mern-flipkart-clone-server.onrender.com";
  
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    wishlistItems.current();
  }, []);


 

  const getlist = async () => {
    const response = await axios.get(`${URL}/wishlistproduct`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
    if (response.status === 200) {
      if (response.data === null) {
        return;
      } else {
        setwish(response.data.wish);
      }
    }
  };

   wishlistItems.current = getlist;

  return (
    <>
      {wish?.length ? (
        <Box className="wish_Box">
          <Box>
            <Box className="wish_header">
              <Typography sx={{ ml: "30px" }}>
                My Wishlist ({wish?.length})
              </Typography>
            </Box>

            {wish.map((wish, index) => {
              return <WishlistStyle key={index} {...wish} />;
            })}
          </Box>
        </Box>
      ) : (
        <Box>
          <WishlistEmpty />
        </Box>
      )}
    </>
  );
};

export default Wishlist;

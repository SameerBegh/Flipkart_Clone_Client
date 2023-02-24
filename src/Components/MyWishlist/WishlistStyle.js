import React, { useState, useContext, useEffect, useRef } from "react";
import { Typography, styled, Button } from "@mui/material";
import { Box } from "@mui/system";
import "./Wishlist.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { wishlistClickFalse } from "../APIservice/api";
import { getProductDetails } from "../../Redux/Action/productAction";
import axios from "axios";
import { toast } from "react-toastify";
import { DataContext } from "../Context/DataProvider";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    fontSize: "25px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    padding: "15px 15px 0",
    alignItems: "center",
  },
}));

const WishlistStyle = ({ url, id, title, priceDiscount, cost, mrp, _id }) => {
  const dispatch = useDispatch();
  const [deleteTooltip, setdeleteTooltip] = useState(false);
  const { setwish } = useContext(DataContext);
  const wishlistItems = useRef();
  // const URL = "http://localhost:8000";
  const URL = "https://mern-flipkart-clone-server.onrender.com";


  const fkassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
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

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const deleteWishItem = async (id) => {
    let removeresponse = await wishlistClickFalse({ productId: _id });
    if (removeresponse.status === 200) {
      dispatch(getProductDetails(id));
    }
    const response = await axios.delete(`${URL}/removeWishlist/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
    if (!response) return;
    notifysuccess(response.data.message);
    getlist();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          borderTop: "1px solid #c2c2c2",
          backgroundColor: "#fff",
          padding: "24px",
          position: "reletive",
          "&:hover": {
            color: "#2455f4",
          },
        }}
      >
        <Link to={`/product/${id}`}>
          <Box>
            <img
              src={url}
              alt="img"
              style={{ objectFit: "contain", width: "112px", height: "112px" }}
            />
          </Box>
        </Link>
        <Box className="Wish_Content_box">
          <Link
            to={`/product/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: "18px",
                display: "inline-block",
                lineHeight: 1,
              }}
            >
              {title.longTitle}
            </Typography>
          </Link>
          <Typography
            sx={{
              marginTop: "8px",
              color: "#878787",
              fontFamily: "inherit",
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#111" }}>Seller</span> : SmartBigShop
            <Box component="span">
              <img
                src={fkassured}
                alt="fk"
                style={{ width: 55, marginLeft: 5 }}
              />
            </Box>
          </Typography>
          <Typography sx={{ marginTop: "18px" }}>
            <Box
              component="span"
              sx={{
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: 600,
                color: "#000",
              }}
            >
              ₹ {cost}
            </Box>
            <Box
              component="span"
              sx={{
                cursor: "pointer",
                color: "#878787",
                margin: "0px 10px",
                fontSize: 15,
              }}
            >
              <strike>{mrp}</strike>
            </Box>
            <Box
              component="span"
              sx={{
                marginLeft: "1px",
                cursor: "pointer",
                color: "green",
                fontSize: 14,
              }}
            >
              {priceDiscount} off
            </Box>
          </Typography>
        </Box>

        <LightTooltip
          placement="bottom-start"
          open={deleteTooltip}
          onClick={() => setdeleteTooltip(!deleteTooltip)}
          title={
            <Box>
              <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
                Are you sure you want to remove this product ?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "14px",
                    padding: "5px",
                    "&:hover": { backgroundColor: "#fff" },
                  }}
                  onClick={() => setdeleteTooltip(false)}
                >
                  Cancle
                </Button>
                <Button
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "14px",
                    padding: "5px",
                    "&:hover": { backgroundColor: "#fff", color: "red" },
                  }}
                  onClick={() => deleteWishItem(id)}
                >
                  Yes, Remove
                </Button>
              </Box>
            </Box>
          }
          TransitionComponent={Zoom}
        >
          <DeleteIcon
            sx={{ color: deleteTooltip ? "red" : "#c2c2c2", cursor: "pointer" }}
          />
        </LightTooltip>
      </Box>
    </>
  );
};

export default WishlistStyle;

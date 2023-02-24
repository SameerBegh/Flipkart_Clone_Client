import React, { useContext, useEffect } from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { getProducts } from "../../../Redux/Action/productAction";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import axios from "axios";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { wishlistClick } from "../../APIservice/api";
import { wishlistClickFalse } from "../../APIservice/api";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button } from "@mui/material";
import { UserContextInfo } from "../../Context/UserContext";
import { DataContext } from "../../Context/DataProvider";

const AccountInfo = {
  login: {
    open: "login",
    title: "Login",
    info: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    open: "signup",
    title: "Looks like you're new here!",
    info: "Sign up with your mobile number to get started",
  },
};

const Products = () => {
  const { products } = useSelector((state) => state.getProducts);
  const { user } = useContext(DataContext);
  const { setOpen, setAccounttoggle } = useContext(UserContextInfo);
  const dispatch = useDispatch();
  // const URL = "http://localhost:8000";
  const URL = "https://mern-flipkart-clone-server.onrender.com";

  // const URL = ""; 
  const fkassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch]);

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

  const notify = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const wishadd = async (id) => {
    if (user) {
      let responseClick = await wishlistClick({ productId: id });
      if (!responseClick) return;
      dispatch(getProducts());
    } else {
      notify("Please login for wishlisting a product");
      setOpen(true);
      setAccounttoggle(AccountInfo.login);
    }
  };

  const addWish = async (id) => {
    const response = await axios.post(
      `${URL}/wishlist`,
      { id: id },
      { headers: { Authorization: "Bearer " + localStorage.getItem("jwt") } }
    );
    notifysuccess(response.data.message);
    if (!response) return;
  };

  const removeWish = async (id) => {
    let removeresponse = await wishlistClickFalse({ productId: id });
    if (!removeresponse) return;
    dispatch(getProducts());
  };

  const remove = async (id) => {
    const response = await axios.delete(`${URL}/removeWishlist/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
    notifysuccess(response.data.message);
    if (!response) return;
  };

  const addellips = (text) => {
    if (text.length > 50) {
      return text.substring(0, 60) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="grid-container">
      {products.map((product, index) => {
        return (
          <Card sx={{ maxWidth: 345 }} className="product_card" key={index}>
            <Box sx={{ display: "flex" }}>
              {product.wishlist.includes(
                JSON.parse(localStorage.getItem("loginUser"))._id
              ) ? (
                <IconButton
                  sx={{ m: "5px 5px 0 auto  " }}
                  aria-label="add to favorites"
                  onClick={() => {
                    removeWish(product._id);
                    remove(product.id);
                  }}
                >
                  <Favorite sx={{ color: "red" }} />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ m: "5px 5px 0 auto " }}
                  aria-label="add to favorites"
                  onClick={() => {
                    addWish(product.id);
                    wishadd(product._id);
                  }}
                >
                  <FavoriteBorder />
                </IconButton>
              )}
            </Box>
            <a
              href={`product/${product.id}`}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <img
                className="card_img"
                src={product.url}
                alt="img"
                style={{ width: "auto", height: "150px" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#212121",
                    fontWeight: 550,
                    marginTop: "10px",
                    wordWrap: "nowrap",
                    textAlign: "left",
                  }}
                >
                  {addellips(product.title.longTitle)}
                </Typography>

                <Box
                  sx={{
                    margin: "5px 0px",
                    color: "#878787",
                    cursor: "pointer",
                    alignItems: "center",
                    display: "flex",
                    fontSize: "16px",
                  }}
                >
                  <Box component="span" sx={{ marginRight: "10px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        padding: "unset",
                        backgroundColor: "#388e3c",
                        borderRadius: "30px",
                        alignItems: "center",
                        fontSize: "12px",
                      }}
                    >
                      {product.star}
                      <StarIcon sx={{ fontSize: "14px" }} />
                    </Button>
                  </Box>
                  ({product.review})
                  <Box component="span">
                    <img
                      src={fkassured}
                      alt="fk"
                      style={{ width: 77, marginLeft: 10 }}
                    />
                  </Box>
                </Box>
                <Typography sx={{ textAlign: "left" }}>
                  <Box
                    component="span"
                    sx={{
                      marginLeft: "10px",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#111",
                    }}
                  >
                    ₹ {product.cost}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      marginLeft: "10px",
                      cursor: "pointer",
                      margin: "0px 10px",
                      color: "#878787",
                    }}
                  >
                    <strike>{product.mrp}</strike>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      marginLeft: "10px",
                      cursor: "pointer",
                      color: "green",
                    }}
                  >
                    {product.priceDiscount} off
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#2478f0",
                    marginTop: "20px",
                  }}
                >
                  {product.tagline}
                </Typography>
              </CardContent>
            </a>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;

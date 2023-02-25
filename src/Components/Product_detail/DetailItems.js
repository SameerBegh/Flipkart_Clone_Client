import { Button, styled, Box } from "@mui/material";
import React, { useEffect, useContext, useState, useRef } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishlistClick, wishlistClickFalse } from "../APIservice/api";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { getProductDetails } from "../../Redux/Action/productAction";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
import { UserContextInfo } from "../Context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import { addTocart } from "../APIservice/api";
import CircularProgress from "@mui/material/CircularProgress";
const LeftBox = styled(Box)`
  min-width: 40%;
  padding: 20px;
`;

const FavBtn = {
  display: "flex",
  position: "absolute",
  backgroundColor: "#fff",
  right: "10px",
  height: "40px",
  width: "40px",
  justifyContent: "center",
  borderRadius: "50%",
  alignItems: "center",
  border: "1px solid #f0f0f0",
  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 10%)",
  cursor: "pointer",
};

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

const DetailItems = () => {
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const [isloading, setLoading] = useState(false);
  const [buyisloading, setbuyLoading] = useState(false);
  const { user } = useContext(DataContext);
  const { setOpen } = useContext(UserContextInfo);
  const { setAccounttoggle } = useContext(UserContextInfo);
  const timer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = "http://localhost:8000";


  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

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

  const addWish = async (id) => {
    if (user) {
      let responseClick = await wishlistClick({ productId: product._id });
      if (responseClick.status === 200) {
        dispatch(getProductDetails(id));
      }
      const response = await axios.post(
        `${URL}/wishlist`,
        { id: id },
        { headers: { Authorization: "Bearer " + localStorage.getItem("jwt") } }
      );
      notifysuccess(response.data.message);
      if (!response) return;
    } else {
      notify("Please login for wishlisting a product");
      setOpen(true);
      setAccounttoggle(AccountInfo.login);
    }
  };

  const removeWish = async (id) => {
    let removeresponse = await wishlistClickFalse({ productId: product._id });
    if (removeresponse.status === 200) {
      dispatch(getProductDetails(id));
    }
    const response = await axios.delete(`${URL}/removeWishlist/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
    notifysuccess(response.data.message);
    if (!response) return;
  };

  // Add Item to cart
  const addToCart = async () => {
    if (user) {
      const response = await addTocart({
        url: product.url,
        id: product.id,
        title: product.title.longTitle,
        priceDiscount: product.priceDiscount,
        cost: product.cost,
        mrp: product.mrp,
        quantity: product.quantity,
        stock: product.stock,
        seller: product.seller,
        productId: product._id,
      });
      if (!response) return;

      if (!isloading) {
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setLoading(false);
          navigate("/cart");
          dispatch(getProductDetails(product.id));
        }, 2000);
      }
    } else {
      notify("Access denied. Please login");
      setOpen(true);
      setAccounttoggle(AccountInfo.login);
    }
  };

  const buyNow = async () => {
    if (user) {
      const response = await addTocart({
        url: product.url,
        id: product.id,
        title: product.title.longTitle,
        priceDiscount: product.priceDiscount,
        cost: product.cost,
        mrp: product.mrp,
        quantity: product.quantity,
        stock: product.stock,
        seller: product.seller,
        productId: product._id,
      });
      if (!response) return;

      if (!buyisloading) {
        setbuyLoading(true);
        timer.current = window.setTimeout(() => {
          setbuyLoading(false);

          navigate("/order");
        }, 2000);
      }
    } else {
      notify("Access denied. Please login");
      setOpen(true);
      setAccounttoggle(AccountInfo.login);
    }
  };

  return (
    <LeftBox>
      <Box
        sx={{
          padding: "15px",
          border: "1px solid #f0f0f0",
          position: "relative",
        }}
      >
        <Box sx={FavBtn}>
          {product.wishlist.includes(
            JSON.parse(localStorage.getItem("loginUser"))._id
          ) ? (
            <Favorite
              sx={{ color: "red" }}
              onClick={() => removeWish(product.id)}
            />
          ) : (
            <FavoriteBorder onClick={() => addWish(product.id)} />
          )}
        </Box>

        <img
          src={product.detailUrl}
          alt="img"
          style={{ objectFit: "contain", width: "90%" }}
        />
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        {product.CartBy.includes(
          JSON.parse(localStorage.getItem("loginUser"))._id
        ) ? (
          <>
            <Button
              onClick={() => navigate("/cart")}
              variant="contained"
              sx={{
                backgroundColor: "#ff9f00",
                width: "46%",
                height: "50px",
                borderRadius: "3px",
                marginRight: "4%",
              }}
            >
              {" "}
              <LocalGroceryStoreIcon sx={{ marginRight: "5px" }} /> Go to Cart
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => addToCart()}
              variant="contained"
              sx={{
                backgroundColor: "#ff9f00",
                width: "46%",
                height: "50px",
                borderRadius: "3px",
                marginRight: "4%",
              }}
              disabled={isloading}
            >
              {" "}
              <LocalGroceryStoreIcon sx={{ marginRight: "5px" }} /> Add to Cart
              {isloading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#2478f0",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Button>
          </>
        )}

        <Button
          variant="contained"
          onClick={() => buyNow()}
          sx={{
            backgroundColor: "#fb641b",
            width: "46%",
            height: "50px",
            borderRadius: "3px",
            marginLeft: "4%",
          }}
          disabled={buyisloading}
        >
          <FlashOnIcon sx={{ marginRight: "5px" }} /> Buy Now
          {buyisloading && (
            <CircularProgress
              size={24}
              sx={{
                color: "#2478f0",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Button>
      </Box>
    </LeftBox>
  );
};

export default DetailItems;

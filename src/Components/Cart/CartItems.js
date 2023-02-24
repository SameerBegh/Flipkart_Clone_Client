import React, { useState, forwardRef, useEffect, useContext, useRef } from "react";
import "./Cart.css";
import { Box, Button, Typography } from "@mui/material";
import { addellips } from "./utils/Utils";
import CartButton from "./utils/CartButton";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { DataContext } from "../Context/DataProvider";
import { addToSave, DeleteCartItem, getCart } from "../APIservice/api";
import { getProductDetails } from "../../Redux/Action/productAction";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CartItems = ({
  url,
  id,
  title,
  priceDiscount,
  cost,
  mrp,
  quantity,
  stock,
  seller,
  productId,
}) => {
  //  setDelivery Date
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const [remove, setRemove] = useState(false);
  const dispatch = useDispatch();
  const { Cart, setCart, setPrice,  setOrderAlert, Price } =
    useContext(DataContext);

  const getCartItems = useRef();
 
  const Cartlength = Cart?.length

    useEffect(() => {
      const token = localStorage.getItem("jwt");
      if (!token) return;
      getCartItems.current();

    }, [ Cartlength]);
  
    const cartItems = async () => {
      const response = await getCart();
      if (response.status === 200) {
        if (response.data === null) {
          return setCart([]);
        } else {
          setCart(response.data.Cart);
          setPrice({
            totalQuantity: response.data.totalQuantity,
            totalPrice: response.data.totalPrice,
            totalDiscount: response.data.totalDiscount,
            totalCost: response.data.totalCost,
          });
        }
      }
    };
  
    getCartItems.current = cartItems

  const fkassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  // Add Save item
  const SaveforLater = async (id) => {
    const response = await addToSave({
      url: url,
      id: id,
      title: title,
      priceDiscount: priceDiscount,
      cost: cost,
      mrp: mrp,
      quantity: quantity,
      stock: stock,
      seller: seller,
      productId: productId,
    });
    if (!response) return;
    notifysuccess(response.data.message);
    const Deleteresponse = await DeleteCartItem({
      id: id,
      quantity: quantity,
      mrp: mrp,
      cost: cost,
      title: title,
      productId: productId,
    });
    if (!Deleteresponse) return;
    dispatch(getProductDetails(id));
    cartItems();
    if (Cart?.length === 1) {
      setOrderAlert(true);
    }
  };

  const cartDelete = async (id) => {
    const Deleteresponse = await DeleteCartItem({
      id: id,
      quantity: quantity,
      mrp: mrp,
      cost: cost,
      title: title,
      productId: productId,
    });
    if (!Deleteresponse) return;
    setRemove(false);
    notifysuccess(Deleteresponse.data.message);
    if (Cart?.length === 1) {
      setOrderAlert(true);
    }
    dispatch(getProductDetails(id));
    cartItems();
  };



  const handleClose = () => {
    setRemove(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          borderTop: "1px solid #f0f0f0",
          backgroundColor: "#fff",

          padding: "24px",
        }}
      >
        <Box sx={{ display: "grid", margin: "20px" }}>
          <Link to={`/product/${id}`} style={{ color: "inherit" }}>
            <img
              src={url}
              alt="img"
              style={{ objectFit: "contain", width: "112px", height: "112px" }}
            />
          </Link>
          <CartButton
            id={id}
            quantity={quantity}
            stock={stock}
            cost={cost}
            mrp={mrp}
          />
        </Box>
        <Box className="Content_box">
          <Link to={`/product/${id}`} style={{ color: "inherit" }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: "16px",
                display: "inline-block",
                lineHeight: 1,
                "&:hover": {
                  color: "#2478f0",
                },
              }}
            >
              {addellips(title)}
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
            <span style={{ color: "#111" }}>Seller</span> : {seller}
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
              sx={{ cursor: "pointer", fontSize: "20px", fontWeight: 600 }}
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
          <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
            Delivery by {date.toDateString()}
            <span style={{ color: "#878787", marginLeft: "5px" }}>|</span>
            {Price.totalCost > 499 ? (
             <>
             <span style={{ color: "#388e3c" }}> Shipping Fee : </span>
             <strike style={{ color: "#878787" }}>₹40</strike>
             <span style={{ color: "#388e3c", marginLeft: "5px" }}>
               Free
             </span>
           </>
            ) : (
              <>
                <span style={{ color: "#388e3c", marginLeft: "5px" }}>
                  Shipping Fee
                </span>
                <span style={{ color: "#878787", marginLeft: "5px" }}>₹40</span>
              </>
            )}
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                marginRight: "25px",
                width: "160px",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
              onClick={() => SaveforLater(id)}
            >
              Save for Later
            </Button>
            <Button
              variant="contained"
              sx={{ width: "160px", "&:hover": { backgroundColor: "red" } }}
              onClick={() => setRemove(true)}
            >
              Remove
            </Button>

            <Dialog
              open={remove}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
            >
              <DialogTitle>{"Remove Item"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to remove this item?
                </DialogContentText>
              </DialogContent>
              <DialogActions sx={{ justifyContent: "space-around" }}>
                <Button
                  variant="contained"
                  sx={{ width: "150px" }}
                  onClick={handleClose}
                >
                  Cancle
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "150px", "&:hover": { backgroundColor: "red" } }}
                  onClick={() => cartDelete(id)}
                >
                  Remove
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartItems;

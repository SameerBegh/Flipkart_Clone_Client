import React, { useContext, useState } from "react";
import "../Cart.css";
import { Button, Typography, ButtonGroup, styled } from "@mui/material";
import { Box } from "@mui/system";
import { addellips } from "../utils/Utils";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addTocart, DeleteSaveItem, getCart, getSaveItem } from "../../APIservice/api";

import { getProductDetails } from "../../../Redux/Action/productAction";
import { DataContext } from "../../Context/DataProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ButtonStyle = styled(Button)`
  border-radius: 50%;
  cursor: "unset";
`;

const SaveListItem = ({
  url,
  id,
  title,
  priceDiscount,
  cost,
  mrp,
  quantity,
  seller,
  stock,
  productId,
}) => {
  const [remove, setRemove] = useState(false);
  const { setCart, setPrice, setSave } = useContext(DataContext);

  const dispatch = useDispatch();

  const fkassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


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

    const saveItems = async () => {
      const response = await getSaveItem();
      if (response.status === 200) {
        if (response.data === null) {
          return;
        } else {
          setSave(response.data.AddtoSave);
        }
      }
    };
   
  

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

  const btnBox = {
    "&:hover": {
      boxShadow: "none",
      cursor: "unset",
    },
  };

  // Move To Cart from saveItem
  const MoveToCart = async (id) => {
    const response = await addTocart({
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
    const deleteResponse = await DeleteSaveItem({ id: id, title: title });
    if (!deleteResponse) return;
    dispatch(getProductDetails(id));
    notifysuccess(`${title} has been moved to your Cart.`);
    saveItems();
    cartItems();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Move and Clear saveItem
  const deleteItem = async (id) => {
    const deleteResponse = await DeleteSaveItem({ id: id, title: title });
    setRemove(false);
    saveItems();
    cartItems();
    notifysuccess(deleteResponse.data.message);
  };

  // Close RemoveAert
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
          <Box>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{ marginTop: "18px" }}
            >
              <ButtonStyle disabled>-</ButtonStyle>

              <Button sx={btnBox} disabled>
                {quantity}
              </Button>
              <ButtonStyle disabled>+</ButtonStyle>
            </ButtonGroup>
          </Box>
        </Box>
        <Box className="Content_box">
          <Link to={`/product/${id}`} style={{ color: "inherit" }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: 600,
                fontSize: "18px",
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
          <Box sx={{ marginTop: "48px" }}>
            <Button
              variant="contained"
              sx={{
                marginRight: "25px",
                width: "160px",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
              onClick={() => MoveToCart(id)}
            >
              Move to Cart
            </Button>
            <Button
              variant="contained"
              sx={{ width: "160px", "&:hover": { backgroundColor: "red" } }}
              onClick={() => setRemove(true)}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
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
            onClick={() => deleteItem(id)}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SaveListItem;

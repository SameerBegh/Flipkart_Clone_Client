import styled from "@emotion/styled";
import { Button, ButtonGroup } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";

import { toast } from "react-toastify";

import {
  getCart,
  IncrementQuantity,
  DecrementQuantity,
} from "../../APIservice/api";
import { DataContext } from "../../Context/DataProvider";

const ButtonStyle = styled(Button)`
  border-radius: 50%;
`;
const CartButton = ({ id, stock, quantity, mrp, cost }) => {
  const { Cart, setCart, setPrice } = useContext(DataContext);
  const toastId = useRef(null);
  const getCartItems = useRef();
  const Cartlength = Cart?.length

  const notify = (message) => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error(message, {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    getCartItems.current();
  
  }, [Cartlength]);

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

  const decrement = async (id) => {
    if (quantity > 1) {
      const response = await DecrementQuantity({
        id: id,
        mrp: mrp,
        cost: cost,
      });
      if (!response) return;

      cartItems();
    } else {
      return;
    }
  };

  const increment = async (id) => {
    if (quantity === stock) {
      notify("Sorry! We don't have any more units for this item.");
    } else {
      const response = await IncrementQuantity({
        id: id,
        mrp: mrp,
        cost: cost,
      });
      if (!response) return;

      cartItems();
    }
  };

  const btnBox = {
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "none",
      cursor: "unset",
    },
  };
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{ marginTop: "18px" }}
    >
      <ButtonStyle onClick={() => decrement(id)}>-</ButtonStyle>
      <Button sx={btnBox}>{quantity}</Button>
      <ButtonStyle onClick={() => increment(id)}>+</ButtonStyle>
    </ButtonGroup>
  );
};

export default CartButton;

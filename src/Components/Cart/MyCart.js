import React, { useEffect, useContext, useState, useRef } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import SaveListItem from "./SaveProduct/SaveListItem";
import TotalPay from "./Total/TotalPay";
import { getCart, getSaveItem } from "../APIservice/api";
import EmptyCart from "./EmptyCart/EmptyCart";
import { DataContext } from "../Context/DataProvider";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Cart = () => {
  const [isloading, setLoading] = useState(false);
  const { Cart, setCart, setPrice, setSave, Save } = useContext(DataContext);

  const navigate = useNavigate();
  const timer = useRef();
  const getCartItems = useRef();
  const SaveItems = useRef();
const Cartlength = Cart?.length
const Savelength = Save?.length
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    getCartItems.current();
    SaveItems.current();
  }, [ Cartlength, Savelength]);

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
  SaveItems.current = saveItems;

  const order = () => {
    if (!isloading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
        navigate("/order");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 2000);
    }
  };

  return (
    <>
      {Cart?.length ? (
        <Grid
          container
          sx={{
            padding: "30px 150px",
            minHeight: Save?.length ? null : "100vh",
          }}
        >
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box
              sx={{
                padding: "15px 24px",
                backgroundColor: "#fff",
                width: "780px",
              }}
            >
              <Typography>Flipkart({Cart?.length})</Typography>
            </Box>

            {Cart.map((item, index) => {
              return (
                <Box sx={{ width: "780px" }} key={item._id}>
                  <CartItems key={item._id} {...item} />
                </Box>
              );
            })}
            <Box
              sx={{
                padding: "15px 24px",
                backgroundColor: "#fffb",
                boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
                borderTop: "1px solid #f0f0f0",
                width: "780px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fb641b",
                  width: "250px",
                  height: "45px",
                  borderRadius: "2px",
                  display: "flex",
                  marginLeft: "auto",
                }}
                disabled={isloading}
                onClick={() => order()}
              >
                Place Order
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
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalPay />
          </Grid>
        </Grid>
      ) : (
        <Box>
          <EmptyCart />
        </Box>
      )}
      <Box>
        {Save?.length ? (
          <Grid
            container
            sx={{
              width: Cart?.length ? "780px" : "80%",
              margin: Cart?.length ? "30px 150px " : "30px auto ",
            }}
          >
            <Grid item lg={12} md={9} sm={12} xs={12}>
              <Box
                sx={{
                  padding: "15px 24px",
                  backgroundColor: "#fff",
                }}
              >
                <Typography>Saved For Later ({Save?.length})</Typography>
              </Box>
              {Save.map((data, index) => {
                return <SaveListItem key={index} {...data} />;
              })}
            </Grid>
          </Grid>
        ) : null}
      </Box>
    </>
  );
};

export default Cart;

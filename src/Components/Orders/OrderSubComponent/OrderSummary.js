import { Button } from "@mui/material";
import React, { useContext } from "react";
import "../order.css";
import { DataContext } from "../../Context/DataProvider";
import CartItems from "../../Cart/CartItems";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const OrderSummary = ({ setorderChange, Cart, setpaymentChange, data }) => {
  const { setOrderAlert, OrderAlert } = useContext(DataContext);

  const orderContinue = () => {
    setorderChange(false);
    setpaymentChange(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClose = () => {
    setOrderAlert(false);
  };

  return (
    <>
      <div className="login_1C">
        <div className="C_number_box">3</div>
        <div className="box_header">
          <p
            style={{
              marginLeft: "13px",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Order Summary
          </p>
        </div>
      </div>

      {Cart?.length ? (
        <>
          {Cart.map((item, index) => {
            return <CartItems key={index} {...item} />;
          })}
        </>
      ) : (
        <div style={{ backgroundColor: "#fff", height: "30px" }}>
          <p>Your checkout has no items.</p>

          <div>
            <Dialog open={OrderAlert} PaperProps={{ sx: { padding: "20px" } }}>
              <DialogContent sx={{ display: "flex", fontSize: "20px" }}>
                <ErrorOutlineIcon sx={{ color: "red", mr: "10px" }} />
                Your checkout has no items.
              </DialogContent>
              <DialogActions>
                <Link
                  to={"/"}
                  style={{ margin: "auto", textDecoration: "none" }}
                >
                  <Button variant="contained" onClick={handleClose}>
                    <ShoppingCartIcon sx={{ mr: "10px" }} />
                    Shop now
                  </Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )}
      <Box
        sx={{
          padding: "15px 24px",
          backgroundColor: "#fff",
          boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
          borderTop: "1px solid #f0f0f0",
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
          onClick={() => {
            orderContinue();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          continue
        </Button>
      </Box>
    </>
  );
};

export default OrderSummary;

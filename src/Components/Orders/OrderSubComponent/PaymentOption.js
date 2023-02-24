import { Box, Button, FormControlLabel } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import "../order.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { ClearCart, paywithpaytm } from "../../APIservice/api";
import { post } from "../../Cart/utils/paytm";
import { DataContext } from "../../Context/DataProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../Redux/Action/productAction";

const PaymentOption = () => {
  const [value, setValue] = useState("");
  const { Price } = useContext(DataContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const timer = useRef();

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const ConfirmOrder = () => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(async () => {
        setLoading(false);

        if (value === "Pay Online") {
          if (Price.totalCost > 499) {
            let response = await paywithpaytm({
              amount: Price.totalCost,
              email: "flipkartdemo@gmail.com", // demo email
            });

            let info = {
              action: "https://securegw-stage.paytm.in/order/process",
              params: response.data,
            };
            post(info);
            const Cartresponse = await ClearCart();
            if (!Cartresponse) return;
          } else {
            let response = await paywithpaytm({
              amount: Price.totalCost + 40,
              email: "flipkartdemo@gmail.com",
            });

            let info = {
              action: "https://securegw-stage.paytm.in/order/process",
              params: response.data,
            };
            post(info);
            const Cartresponse = await ClearCart();
            if (!Cartresponse) return;
          }
        } else {
          const response = await ClearCart();
          if (response.status === 200) {
            navigate("/");
            dispatch(getProducts());
            notifysuccess("Order Successfully");
          } else {
            return;
          }
        }
      }, 2000);
    }
  };

  return (
    <>
      <div className="login_1C">
        <div className="C_number_box">4</div>
        <div className="box_header">
          <p
            style={{
              marginLeft: "13px",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Payment Options
          </p>
        </div>
      </div>

      <div className="Change_Box">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Pay Online"
              control={<Radio />}
              label="Pay Online"
            />
            <FormControlLabel
              value="Cash on Delivery"
              control={<Radio />}
              label="Cash on Delivery"
            />
          </RadioGroup>
        </FormControl>
      </div>
      {value && (
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
            disabled={loading}
            onClick={() => ConfirmOrder()}
          >
            Confirm order
            {loading && (
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
      )}
    </>
  );
};

export default PaymentOption;

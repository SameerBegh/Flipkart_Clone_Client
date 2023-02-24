import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "./Total.css";
import { DataContext } from "../../Context/DataProvider";

const PriceText = styled(Typography)`
  margin-bottom: 20px;
  font-family: inherit;
`;

const TotalPay = () => {
  const { Cart, Price } = useContext(DataContext);
  return (
    <Box marginLeft={-9}>
      <Box className="Price_title">
        <Typography
          sx={{ color: "#878787", fontFamily: "inherit", fontSize: "20px" }}
        >
          PRICE DETAILS
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "15px 24px",
          backgroundColor: "#ffff",
          boxShadow: " 0 1px 1px 0 rgb(0 0 0 / 20%)",
        }}
      >
        {Cart?.length > 1 ? (
          <PriceText>
            Price ({Cart?.length} items)
            <span className="Price" style={{ color: "#111" }}>
              ₹{Price.totalPrice}
            </span>
          </PriceText>
        ) : (
          <PriceText>
            Price ( 1 item)
            <span className="Price" style={{ color: "#111" }}>
              ₹{Price.totalPrice}
            </span>
          </PriceText>
        )}

        <PriceText>
          Discount
          <span className="Price" style={{ color: "#388e3c" }}>
            - ₹{Price.totalDiscount}
          </span>
        </PriceText>

        {Price.totalCost > 499 ? (
          <>
            <PriceText>
              Delivery Charges
              <span className="Price" style={{ color: "#388e3c" }}>
                FREE
              </span>
            </PriceText>
            <PriceText variant="h6">
              Total Amount <span className="Price">₹{Price.totalCost}</span>
            </PriceText>
            <Typography
              sx={{ color: "#388e3c", fontFamily: "inherit", fontWeight: 600 }}
            >
              You will save ₹{Price.totalDiscount} on this order
            </Typography>
          </>
        ) : (
          <>
            <PriceText>
              Delivery Charges
              <span className="Price" style={{ color: "#388e3c" }}>
                ₹40
              </span>
            </PriceText>
            <PriceText variant="h6">
              Total Amount{" "}
              <span className="Price">₹{Price.totalCost + 40}</span>
            </PriceText>
            <Typography
              sx={{ color: "#388e3c", fontFamily: "inherit", fontWeight: 600 }}
            >
              You will save ₹{Price.totalDiscount - 40} on this order
            </Typography>
          </>
        )}
      </Box>
      <Box sx={{ display: "flex", margin: "20px 10px", alignItems: "center" }}>
        <VerifiedUserIcon
          sx={{ fontSize: "25px", marginRight: "5px", color: "#878787" }}
        />
        <Typography
          sx={{
            fontFamily: "inherit",
            fontWeight: "500",
            color: "#878787",
            fontSize: "14px",
          }}
        >
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalPay;

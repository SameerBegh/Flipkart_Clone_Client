import {
  Button,
  TextField,
  InputAdornment,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./seller.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EastIcon from "@mui/icons-material/East";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SellOnline from "./SellerTabs/sellOnline";
import Flipkart from "./SellerTabs/Flipkart";
import Shopy from "./SellerTabs/Shopy";
import FkSeller from "./SellerTabs/FkSeller";
import SellerCard from "./SellerTabs/SellerCard";

const TabHeader = styled(Tab)`
  margin-right: 80px;
  font-size: 23px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
`;
const Seller = () => {
  const [value, setValue] = useState("2");
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="seller_box">
        <Box className="seller_nav">
          <Box className="seller_info">
            <p className="seller_title">Launch your business in 10 minutes</p>
            <TextField
              autoFocus
              placeholder="Enter Phone number here"
              type="number"
              className="Phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ margin: "20px 0px", borderRadius: "4px" }}
            />

            <Button
              variant="contained"
              sx={{
                textTransform: "Capitalize",
                backgroundColor: "#f1c40f",
                color: "#111",
                height: "48px",
                fontSize: "18px",
                "&:hover": { backgroundColor: "orange" },
              }}
            >
              Start selling <EastIcon sx={{ ml: "10px" }} />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            typography: "body1",

            backgroundColor: "#fff",
            padding: "50px 30px 30px",
          }}
        >
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} centered>
                <TabHeader label="WHY SELL ONLINE" value="1" />
                <TabHeader label="WHY FLIPKART?" value="2" />
                <TabHeader label="WHY SHOPSY?" value="3" />
                <TabHeader label="HOW TO BE A SELLER" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <SellOnline />
            </TabPanel>
            <TabPanel value="2">
              <Flipkart />
            </TabPanel>
            <TabPanel value="3">
              <Shopy />
            </TabPanel>
            <TabPanel value="4">
              <FkSeller />
            </TabPanel>
          </TabContext>
        </Box>
        <Box
          sx={{
            height: "150px",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <img
            src="https://img1a.flixcart.com/fk-sp-static/images/Shopsy_logo.png"
            width="110px"
            alt="logo"
          />
          <Typography sx={{ marginLeft: "20px" }}>
            Avail 0% Commission for Selling on Shopsy!
          </Typography>
          <span
            style={{
              color: "#2478f0",
              fontWeight: 600,
              marginLeft: "20px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            KNOW MORE
          </span>
        </Box>
        <SellerCard />
        <img
          src="https://img1a.flixcart.com/fk-sp-static/images/Ignite_WP_banner_v3.svg"
          alt="img"
        />

        <Box sx={{ padding: "30px 140px", bgcolor: "#fff", mt: "-10px" }}>
          <Typography
            sx={{ textAlign: "center", fontSize: "23px", mb: "30px" }}
          >
            SELL ON FLIPKART
          </Typography>
          <Typography sx={{ fontSize: "14px", mb: "10px" }}>
            Flipkart Marketplace is India’s leading platform for selling online.
            Be it a manufacturer, vendor or supplier, simply sell your products
            online on Flipkart and become a top e-commerce player with minimum
            investment. Through a team of experts offering exclusive seller
            workshops, training, and{" "}
            <span style={{ color: "#2478f0", cursor: "pointer" }}>
              seller support
            </span>
            , Flipkart focuses on empowering sellers across India.
          </Typography>
          <Typography sx={{ fontSize: "14px", mb: "10px" }}>
            Selling on Flipkart.com is easy and absolutely free. All you need is
            to{" "}
            <span style={{ color: "#2478f0", cursor: "pointer" }}>
              register
            </span>
            , list your catalog and start selling your products
          </Typography>
          <Typography sx={{ fontSize: "14px", mb: "10px" }}>
            What's more? We have third party ‘Ecommerce Service Providers’ who
            provide logistics,{" "}
            <span style={{ color: "#2478f0", cursor: "pointer" }}>
              cataloging support
            </span>
            , product photoshoot and packaging materials. We have a program
            called Seller Protection Fund to safeguard sellers from losses via
            compensations. We provide{" "}
            <span style={{ color: "#2478f0", cursor: "pointer" }}>
              Flipkart Fulfilment
            </span>{" "}
            services through which you can ensure faster delivery of your items,
            quality check by our experts and a delightful packaging. Combine
            these with the{" "}
            <span style={{ color: "#2478f0", cursor: "pointer" }}>
              fastest payments
            </span>
            in the industry and you get an excellent seller portal. No wonder
            Flipkart is India’s favourite place to{" "}
            <span style={{ color: "#2478f0", cursor: "pointer" }}>
              sell online
            </span>
            .
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Seller;

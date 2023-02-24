import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const FkSeller = () => {
  const flipkart = [
    {
      id: 1,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/ProductIcon.svg",
      title: "At least 1 product to sell",
      description:
        "All you need is a minimum of 1 unique product to start selling on Flipkart.",
      button: "Learn more",
    },
    {
      id: 2,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/GSTINIcon.svg",
      title: "GSTIN details",
      description:
        "You are required to furnish the details of your GSTIN to sell your products online.",
      button: "Learn more",
    },
    {
      id: 3,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/map-location-computer-1.png",
      title: "Pick-up Address",
      description:
        "Sharing your pickup address and pincode will help us pick your products to sell.",
    },
  ];

  return (
    <Box sx={{ display: "flex", mt: "20px" }}>
      <Box>
        <h3 style={{ textAlign: "center" }}>
          3 steps to register as a Flipkart Seller
        </h3>
        <ReactPlayer
          controls
          url="https://youtu.be/NzP3vmABTD0"
          width="410px"
          height="210px"
          style={{ margin: "30px 0px" }}
        />
        <p style={{ textAlign: "center" }}>
          You need just 3 things to become a Flipkart Seller, your basic details
          & GSTIN, Pick-up address, and 1 unique product to sell. Yes! this is
          all that you require to register as a seller on Flipkart.
        </p>
      </Box>
      <Box>
        <h3 style={{ textAlign: "center" }}>
          You need just 3 things to become a Flipkart Seller.
        </h3>
        <Box
          sx={{
            margin: "auto",

            display: "grid",
            gridTemplateColumns: "500px 500px",
            padding: "20px 50px",
          }}
        >
          {flipkart.map((cart) => {
            return (
              <Box sx={{ ddisplay: "grid", padding: "10px" }} key={cart.id}>
                <Card
                  sx={{
                    display: "flex",
                    maxWidth: 450,
                    padding: "15px  20px",
                    height: "190px",
                    cursor: "pointer",
                    boxShadow: "unset",
                    "&:hover": {
                      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                    },
                  }}
                >
                  <Box sx={{ mt: "20px" }}>
                    <img src={cart.logo} alt="logo" width="70px" />
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: "19px", fontWeight: 600 }}
                        component="div"
                      >
                        {cart.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {cart.description}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Typography sx={{ color: "#2478f0", fontSize: "13px" }}>
                        {cart.button}{" "}
                      </Typography>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FkSeller;

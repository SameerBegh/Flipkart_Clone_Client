import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Shopy = () => {
  const flipkart = [
    {
      id: 1,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/0_Commission_platform.png",
      title: "0% Commission platform",
      description:
        "This will be applicable to verticals listed only on Shopsy.",
    },
    {
      id: 2,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/Easy_product_listings.png",
      title: "Easy product listings",
      description:
        "Image guidelines are relaxed and easy to follow. Sellers can upload tabletop and hanger images clicked with mobile phones.",
    },
    {
      id: 3,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/No_brand_regulations_2.png",
      title: "No brand regulations",
      description: "No trademark registration required to sell your own brand.",
    },
    {
      id: 4,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/Enhanced_reach_to_millions_of_customers.png",
      title: "Enhanced reach to millions of customers",
      description:
        "You capture a huge amount of budget-friendly consumers through resellers. These resellers reach the consumer base through their social media channels.",
    },
  ];
  return (
    <Box sx={{ display: "flex", mt: "20px" }}>
      <Box>
        <h3 style={{ textAlign: "center" }}>Lowest Cost Of Doing Business</h3>
        <img
          src="https://img1a.flixcart.com/fk-sp-static/images/shopy-page-banner-410*210.png"
          alt="logo"
          style={{ marginTop: "30px" }}
        />
      </Box>
      <Box>
        <h3 style={{ textAlign: "center" }}>
          Brand New Marketplace By Flipkart
        </h3>
        <Box
          sx={{
            margin: "auto",
            // width: "72%",
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
                    height: "220px",
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

export default Shopy;

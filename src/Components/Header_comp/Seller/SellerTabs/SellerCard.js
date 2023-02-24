import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";

const SellerCard = () => {
  const SellCard = [
    {
      ud: 1,
      url: "https://img1a.flixcart.com/fk-sp-static/images/Truck.svg",
      title: "Fulfillment by Flipkart (FBF)",
      description:
        "Worried about storing, packing, shipping, and delivering your products? Let Flipkart do it all for you with FBF, a one stop solution for all your shipping needs.",
    },
    {
      id: 2,
      url: "https://img1a.flixcart.com/fk-sp-static/images/big_billion.svg",
      title: "Shopping Festivals",
      description:
        "Get access to India’s biggest shopping festivals, The Big Billion Day, Big Diwali Sale, and more. Participate in these festivals to see your business grow by up to 5X.",
    },
    {
      id: 3,
      url: "https://img1a.flixcart.com/fk-sp-static/images/flipkart_ads.svg",
      title: "Flipkart Ads",
      description:
        "Curious how your products will stand out from your competitors and gain maximum visibility? Flipkart Ads will help you achieve your online selling business goals.",
    },
    {
      id: 4,
      url: "https://img1a.flixcart.com/fk-sp-static/images/DeviceMobileCamera.svg",
      title: "Flipkart Seller Hub App",
      description:
        "Manage your online seller account 24x7 with Flipkart Seller Hub App, compatible with all iOS & Android devices.",
      button: true,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "450px" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "25px", p: "40px 0 20px" }}
      >
        More tools to grow faster
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {SellCard.map((card, index) => {
          return (
            <Box sx={{ margin: "10px" }} key={index}>
              <Card
                sx={{
                  maxWidth: 320,
                  minHeight: 260,
                  cursor: "pointer",

                  "&:hover": {
                    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                  },
                }}
              >
                <CardContent>
                  <img src={card.url} width="76px" height="36px" alt="logo" />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      margin: "20px 0px 15px",

                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 3,
                      opacity: "0.8",
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                {card.button ? (
                  <CardActions sx={{ justifyContent: "center", mt: "-20px" }}>
                    <a
                      href="https://itunes.apple.com/in/app/flipkart/id742044692"
                      className="download_link"
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#111",
                          width: "120px",
                          height: "30px",
                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#111",
                            fontWeight: "550",
                            fontFamily: "inherit",
                            border: "1px solid #111",
                          },
                          fontSize: "9px",
                          mr: "20px",
                        }}
                      >
                        <AppleIcon
                          sx={{
                            display: "flex",
                            marginRight: "2px",
                            fontSize: "16px",
                          }}
                        />
                        App Store
                      </Button>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.flipkart.android"
                      className="download_link"
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#111",
                          width: "120px",
                          height: "30px",
                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#111",
                            fontWeight: "550",
                            fontFamily: "inherit",
                            border: "1px solid #111",
                          },
                          fontSize: "9px",
                        }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/300/300218.png"
                          alt="playstore"
                          width="16px/"
                          height="16px"
                          style={{ marginRight: "5px" }}
                        />
                        Google Play
                      </Button>
                    </a>
                  </CardActions>
                ) : null}
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SellerCard;

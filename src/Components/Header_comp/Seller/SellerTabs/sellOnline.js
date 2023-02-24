import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Avatar } from "@mui/material";

const SellOnline = () => {
  const SellCard = [
    {
      number: "1",
      title: "Growth in the online retail market",
      description:
        "Witnessing tremendous growth for the past 5 years, retailers are moving towards online selling.",
      point1: " Avoid huge investments.",
      point2: " Large customer base to sell anywhere.",
    },
    {
      number: "2",
      title: "Get orders across India",
      description:
        "Receive orders from every part of the country and follow the simple steps to fulfill the orders.",
      point1: "Simple dashboard.",
      point2: "Sale events, advertising and promotions.",
    },
    {
      number: "3",
      title: "Ship with ease",
      description:
        "Enjoy easy pick-up and delivery across India with Ekart, our logistics and trusted partner.",
      point1: "Efficient pick-up network.",
      point2: "Professional packaging support.",
    },
    {
      number: "4",
      title: "Earn big",
      description:
        "Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales.",
      point1: " Fastest payment settlement.",
      point2: "Detailed reports to track your payments.",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {SellCard.map((card) => {
        return (
          <Box sx={{ margin: "10px" }} key={card.number}>
            <Card
              sx={{
                maxWidth: 350,
                minHeight: 350,
                cursor: "pointer",

                "&:hover": {
                  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                },
              }}
            >
              <CardContent>
                <Avatar sx={{ bgcolor: "#2478f0", margin: "auto" }}>
                  {card.number}
                </Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    margin: "20px 0px 15px",
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography sx={{ mb: 3, opacity: "0.8" }}>
                  {card.description}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: "17px", color: "#2478f0", mr: "6px" }}
                  />
                  <Typography variant="body2">{card.point1}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: "17px", color: "#2478f0", mr: "6px" }}
                  />
                  <Typography variant="body2">{card.point2}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
};

export default SellOnline;

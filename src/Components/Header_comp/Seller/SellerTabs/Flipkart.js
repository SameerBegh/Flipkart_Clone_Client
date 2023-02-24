import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ReactPlayer from 'react-player'

const Flipkart = () => {
  const flipkart = [
    {id:1,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/GrowthSellIcon.svg",
      title: "Growth",
      description:
        "Widen your reach to a customer base of 1 billion and grow your business further with the support of Account managers.",
    },
    {id:2,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/CostSellIcon.svg",
      title: "Lowest cost of doing business",
      description:
        "Along with the most competitive rate card in the industry you also get on-time and reliable payments.",
    },
    {id:3,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/EasySellIcon.svg",
      title: "Ease",
      description:
        "You just need 1 product and 2 documents to start selling on Flipkart.",
    },
    {id:4,
      logo: "https://img1a.flixcart.com/fk-sp-static/images/TransparencySellIcon.svg",
      title: "Transparency",
      description: "Equal opportunities for all the sellers to grow.",
    },
  ];
  return (
    <Box sx={{display:"flex", mt:"20px"}}>
   <Box >
 <h3 style={{ textAlign: "center" }}>#BachonKaKhel</h3>
  <ReactPlayer
         controls
          url='https://youtu.be/JYHYP54hO0A'
          width='410px'
          height='220px' 
          style={{marginTop:"30px"}}
        />
   </Box>
      <Box>
      <h3 style={{ textAlign: "center"}}>Advantages of Selling on Flipkart</h3>
    <Box
      sx={{
        margin: "auto",
        // width: "72%",
        display: "grid",
        gridTemplateColumns: "500px 500px",
        padding:"20px 50px"

      }}
    >
      {flipkart.map((cart) => {
        return (
          <Box sx={{ ddisplay: "grid", padding:"10px"}} key={cart.id}> 
            <Card
              sx={{
                display: "flex",
                maxWidth: 450,
                padding: "15px  20px",
                 height:"220px",
                 cursor:"pointer",
                 boxShadow:"unset",
                 "&:hover":{
                    boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"
                 }

              }}
            >
              <Box sx={{mt:"20px"}}>
                <img src={cart.logo} alt="logo" width="70px" />
              </Box>
              <Box>
                <CardContent>
                  <Typography gutterBottom  sx={{fontSize:"19px", fontWeight:600}} component="div">
                    {cart.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {cart.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
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

export default Flipkart;

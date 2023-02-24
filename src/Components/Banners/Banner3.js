import React from "react";
import { Grid } from "@mui/material";
const Banner_3 = () => {
  const imageURL = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/d4d557f0f04d338a.jpeg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/1efad69de5061d93.jpg?q=50",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/ef6914388cce2f7f.jpg?q=50",
    },

    {
      id: 4,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/13e8f188dde62eb9.jpeg?q=50",
    },

    {
      id: 5,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/451abf75db177d4d.jpeg?q=50",
    },

    {
      id: 6,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/2c9a496c90b9666e.jpg?q=50",
    },
  ];

  return (
    <Grid className="Banner3" container sx={{ marginTop: "15px" }}>
      {imageURL.map((image) => {
        return (
          <Grid
            item
            lg={4}
            sm={4}
            md={4}
            xs={12}
            sx={{ paddingRight: "5px" }}
            key={image.id}
          >
            {" "}
            <img src={image.url} alt="img" style={{ width: "100%", cursor:"pointer" }} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Banner_3;

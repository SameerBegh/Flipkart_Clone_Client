import React from "react";
import { Grid } from "@mui/material";

const Banner_2 = () => {
  const imageURL = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
    },
  ];

  return (
    <Grid className="Banner2" container sx={{ marginTop: "15px" }}>
      {imageURL.map((image, index) => {
        return (
          <Grid
            item
            lg={4}
            sm={12}
            md={4}
            xs={12}
            key={index}
            sx={{ paddingRight: "5px" }}
          >
            {" "}
            <img src={image.url} alt="img" style={{ width: "100%" , cursor:"pointer"}} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Banner_2;

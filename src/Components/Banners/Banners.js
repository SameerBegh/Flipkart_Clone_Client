import React from "react";
import { Grid, styled } from "@mui/material";

const Img = styled("img")(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "139px",
    display: "none",
  },
}));

const Banners = () => {
  const imageURL = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/78f17b2066cf4982.jpeg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/46532c2d5fa9ab37.jpeg?q=50",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/46adfc9407e14862.jpg?q=50",
    },
    {
      id: 4,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/1c8aaa1616db2daf.jpg?q=50",
    },
    {
      id: 5,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/27a523d8cf02ccf2.jpg?q=50",
    },
    {
      id: 6,
      url: "https://rukminim1.flixcart.com/fk-p-flap/960/960/image/ab05c11074b4af27.jpg?q=50",
    },
  ];

  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <Grid className="Banner" container sx={{ marginTop: "15px" }}>
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
            <img src={image.url} alt="img" style={{ width: "100%" , cursor:"pointer"}} />
          </Grid>
        );
      })}
      <Img src={url} alt="img" />
    </Grid>
  );
};

export default Banners;

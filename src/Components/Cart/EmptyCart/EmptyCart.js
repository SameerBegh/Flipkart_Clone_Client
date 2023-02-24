import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import { UserContextInfo } from "../../Context/UserContext";
import "./Emptycart.css";

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  const { user } = useContext(DataContext);
  const { setOpen } = useContext(UserContextInfo);

  return (
    <Box className="empty_container">
      <Box className="empty_box">
        <img src={imgurl} alt="empty" style={{ width: "20%" }} />
        <Typography
          sx={{ fontSize: "18px", marginTop: "24px", fontFamily: "inherit" }}
        >
          Missing Cart items?
        </Typography>

        {user ? (
          <>
            <Typography
              sx={{
                fontSize: "12px",
                margin: "10px 0 20px",
                fontFamily: "inherit",
              }}
            >
              Add items to it now.
            </Typography>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button className="Empty_Shop_btn" variant="contained">
                Shop now
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "12px",
                margin: "10px 0 20px",
                fontFamily: "inherit",
              }}
            >
              Login to see the items you added previously
            </Typography>
            <Button
              className="Empty_Log_btn"
              onClick={() => setOpen(true)}
              variant="contained"
              sx={{ background: " #fb641b" }}
            >
              Login
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default EmptyCart;

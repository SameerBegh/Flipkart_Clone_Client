import React from "react";
import { AppBar, Toolbar, styled, Typography, Box } from "@mui/material";
import Search from "../Search/Search";
import RightBar from "../Right_bar/RightBar";
import { Link } from "react-router-dom";
import "./header.css";

const Explore = styled(Typography)`
  font-size: 10px;
  font-style: Italic;
  font-weight: 600;
`;

const PlusImg = styled("img")({
  width: 10,
  height: 10,
});

const Header = () => {
  const logo =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const plus_logo =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  return (
    <AppBar className="aapbar">
      <Toolbar style={{ minHeight: 56 }}>
        <Box className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <img width="75" src={logo} alt="logo" />
            <Box
              sx={{ "&:hover": { textDecoration: "underline", color: "#fff" } }}
            >
              <Explore>
                Explore
                <Box
                  component="span"
                  style={{ color: "#ffe500", marginLeft: 3 }}
                >
                  Plus
                </Box>
                <PlusImg
                  style={{ marginLeft: 1.5 }}
                  src={plus_logo}
                  alt="logo"
                />
              </Explore>
            </Box>
          </Link>
        </Box>
        <Search />
        <RightBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

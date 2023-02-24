import React, { useContext, useEffect } from "react";
import "./LoginList.css";
import { Box, Divider, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContextInfo } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import { toast } from "react-toastify";
import axios from "axios";

// A/c object
const AccountInfo = {
  login: {
    open: "login",
    title: "Login",
    info: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    open: "signup",
    title: "Looks like you're new here!",
    info: "Sign up with your mobile number to get started",
  },
};

const signupLink = {
  fontSize: 14,
  color: "#2874f0",
  height: "20px",
  fontWeight: 500,
  "&:hover": {
    textDecoration: "underline",
  },
};

const LoginList = ({ setLoginTooltipIsOpen, logintooltipIsOpen }) => {
  const { setAccounttoggle } = useContext(UserContextInfo);
  const { setOpen } = useContext(UserContextInfo);
  const { user, wish, setwish } = useContext(DataContext);

  const URL = "";

  useEffect(() => {
    if (!user) return;
    getlist();
  });

  const getlist = async () => {
    const response = await axios.get(`${URL}/wishlistproduct`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
    if (response.status === 200) {
      if (response.data === null) {
        return;
      } else {
        setwish(response.data.wish);
      }
    }
  };

  const notify = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const signClick = () => {
    setOpen(true);
    setAccounttoggle(AccountInfo.signup);
    setLoginTooltipIsOpen(!logintooltipIsOpen);
  };

  const toolclose = () => {
    setLoginTooltipIsOpen(!logintooltipIsOpen);
  };

  const Userlogout = () => {
    localStorage.clear();
  };

  const loginClick = () => {
    setOpen(true);
    setAccounttoggle(AccountInfo.login);
    setLoginTooltipIsOpen(!logintooltipIsOpen);
    notify("Access denied. Please Login");
  };

  return (
    <>
      {user ? (
        <Box>
          <Box className="Login_box" onClick={() => toolclose()}>
            <Link className="link" to={"account/profile"}>
              <AccountCircleIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span> My Profile</span>
            </Link>
            <Divider />

            <Link className="link" to={"account/wishlist"}>
              <FavoriteIcon
                style={{
                  fontSize: 18,
                  marginRight: "15px",
                  color: wish.length ? "red" : "#2874f0",
                }}
              />
              {wish.length ? (
                <span> Wishlist ({wish.length}) </span>
              ) : (
                <span> Wishlist </span>
              )}
            </Link>
            <Divider />
            <Link className="link">
              <AutoAwesomeIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span> Flipkart Plus Zone </span>
            </Link>
            <Divider />
            <Link className="link">
              <ShoppingCartCheckoutIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span> Orders </span>
            </Link>
            <Divider />
            <Link className="link">
              <CardMembershipIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span> Rewards </span>
            </Link>
            <Divider />
            <Link className="link">
              <CardGiftcardIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span> Gift Cards </span>
            </Link>
            <Divider />
            <Link className="link">
              <NotificationsIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span> Notification </span>
            </Link>
            <Divider />
            <Link className="link">
              <OfflineBoltIcon
                style={{ fontSize: 18, marginRight: "15px" }}
                color="primary"
              />
              <span>SuperCoin Zone</span>
            </Link>
            <Divider />
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography className="link" onClick={() => Userlogout()}>
                <PowerSettingsNewIcon
                  style={{ fontSize: 18, marginRight: "15px" }}
                  color="primary"
                />
                <span> Logout </span>
              </Typography>
            </a>
          </Box>
        </Box>
      ) : (
        <>
          <Box className="Login_box">
            <Box>
              <Box className="sign_box">
                <Typography sx={{ fontSize: "15px" }}>New Customer?</Typography>
                <Typography sx={signupLink} onClick={() => signClick()}>
                  Sign Up
                </Typography>
              </Box>
              <Divider />
              <Box onClick={() => loginClick()}>
                <Link className="link">
                  <AccountCircleIcon
                    style={{ fontSize: 18, marginRight: "15px" }}
                    color="primary"
                  />
                  <span> My Profile</span>
                </Link>
                <Divider />

                <Link className="link">
                  <FavoriteIcon
                    style={{
                      fontSize: 18,
                      marginRight: "15px",
                      color: wish.length ? "red" : "#2874f0",
                    }}
                  />
                  {wish.length ? (
                    <span> Wishlist ({wish.length}) </span>
                  ) : (
                    <span> Wishlist </span>
                  )}
                </Link>
                <Divider />
                <Link className="link">
                  <AutoAwesomeIcon
                    style={{ fontSize: 18, marginRight: "15px" }}
                    color="primary"
                  />
                  <span> Flipkart Plus Zone </span>
                </Link>
                <Divider />
                <Link className="link">
                  <ShoppingCartCheckoutIcon
                    style={{ fontSize: 18, marginRight: "15px" }}
                    color="primary"
                  />
                  <span> Orders </span>
                </Link>
                <Divider />
                <Link className="link">
                  <CardMembershipIcon
                    style={{ fontSize: 18, marginRight: "15px" }}
                    color="primary"
                  />
                  <span> Rewards </span>
                </Link>
                <Divider />
                <Link className="link">
                  <CardGiftcardIcon
                    style={{ fontSize: 18, marginRight: "15px" }}
                    color="primary"
                  />
                  <span> Gift Cards </span>
                </Link>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default LoginList;

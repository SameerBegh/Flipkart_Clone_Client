import { Button } from "@mui/material";
import React, { useContext } from "react";
import "../order.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StarIcon from "@mui/icons-material/Star";
import { DataContext } from "../../Context/DataProvider";
import { ClearCart } from "../../APIservice/api";

const LoginChange = ({ setloginChange, setaddressChange }) => {
  const { user } = useContext(DataContext);
  const logout = async () => {
    const Cartresponse = await ClearCart();
    localStorage.clear();
    if (!Cartresponse) return;
  };
  return (
    <>
      <div className="login_1C">
        <div className="C_number_box">1</div>
        <div className="box_header">
          <p style={{ marginLeft: "13px", fontSize: "18px" }}>LOGIN</p>
        </div>
      </div>

      <div className="Change_Box">
        <div className="Login_Detail">
          <div className="div_user">
            <p>
              Name
              <span
                style={{
                  marginLeft: "12px",
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {user.Name}
              </span>
            </p>
            <p>
              Phone
              <span
                style={{
                  marginLeft: "12px",
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {user.Mobile}
              </span>
            </p>
            <a
              href="/"
              style={{
                color: "#2478f0",
                fontWeight: 600,
                textDecoration: "none",
              }}
              onClick={() => logout()}
            >
              Logout & Sign in to another account
            </a>
            <Button
              variant="contained"
              sx={{
                m: "10px 0px",
                width: "240px",
                bgcolor: "#fb641b",
                height: "45px",
              }}
              onClick={() => {
                setloginChange(false);
                setaddressChange(true);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Continue Checkout
            </Button>
          </div>

          <div className="div">
            <p>Advantages of our secure login</p>
            <p>
              <LocalShippingIcon color="primary" sx={{ mr: "12px" }} /> Easily
              Track Orders, Hassel free Returns
            </p>
            <p>
              <NotificationsIcon color="primary" sx={{ mr: "12px" }} /> Get
              Relevant Alerts and Recommendation
            </p>
            <p>
              <StarIcon color="primary" sx={{ mr: "12px" }} /> Wishlist,
              Reviews, Ratings and more.
            </p>
          </div>
        </div>

        <div className="note">
          <p>
            Please note that upon clicking "Logout" you will lose all items in
            cart and will be redirected to Flipkart home page.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginChange;

import React from "react";
import "./footer.css";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";
import logo from "./footerImg/payment.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const CurrentYear = date.getFullYear();
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_box">
          <div className="about">
            <p className="footer_header">ABOUT</p>
            <a className="footer_link" href="/">
              Contact Us
            </a>
            <a className="footer_link" href="/">
              About Us
            </a>
            <a className="footer_link" href="/">
              Careers
            </a>
            <a className="footer_link" href="/">
              Flipkart Stories
            </a>
            <a className="footer_link" href="/">
              Press
            </a>
            <a className="footer_link" href="/">
              Flipkart Wholesale
            </a>
            <a href="/" className="footer_link">
              Corporate Information
            </a>
          </div>
          <div className="help">
            <p className="footer_header">HELP</p>
            <a className="footer_link" href="/">
              Payments
            </a>
            <a className="footer_link" href="/">
              Shipping
            </a>
            <a className="footer_link" href="/">
              Cancellation & Returns
            </a>
            <a className="footer_link" href="/">
              FAQ
            </a>
            <a className="footer_link" href="/">
              Report Infringement
            </a>
          </div>
          <div className="policy">
            <p className="footer_header">POLICY</p>
            <a className="footer_link" href="/">
              Return Policy
            </a>
            <a className="footer_link" href="/">
              Terms Of Use
            </a>
            <a className="footer_link" href="/">
              Security
            </a>
            <a className="footer_link" href="/">
              Privacy
            </a>
            <a className="footer_link" href="/">
              Sitemap
            </a>
          </div>
          <div className="social">
            <p className="footer_header">SOCIAL</p>
            <a className="footer_link" href="https://www.facebook.com/flipkart">
              Facebook
            </a>
            <a className="footer_link" href="https://twitter.com/flipkart">
              Twitter
            </a>
            <a className="footer_link" href="https://www.youtube.com/flipkart">
              YouTube
            </a>
          </div>
          <div className="vl"></div>
          <div className="mail">
            <div className="mail_box">
              <p
                style={{
                  color: "#878787",
                  fontSize: "13px",
                  marginBottom: "10px",
                  fontWeight: "500",
                }}
              >
                Mail Us:
              </p>
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div className="office">
            <div className="office_box">
              <p
                style={{
                  color: "#878787",
                  fontSize: "13px",
                  marginBottom: "10px",
                  fontWeight: "500",
                }}
              >
                Registered Office Address:
              </p>
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
              <p>CIN : U51109KA2012PTC066107</p>
              <p>
                Telephone:
                <span
                  style={{
                    color: "#2478f0",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  044-45614700
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <Link
            className="fb_text"
            to={"/seller"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <WorkIcon
              sx={{
                color: " #ffe11b",
                fontSize: "20px",
                mr: "5px",
                justifyContent: "center",
              }}
            />
            Become A Seller
          </Link>
          <p className="fb_text">
            <StarsIcon
              sx={{ color: " #ffe11b", fontSize: "20px", mr: "5px" }}
            />
            Advertise
          </p>
          <p className="fb_text">
            <CardGiftcardIcon
              sx={{ color: " #ffe11b", fontSize: "20px", mr: "5px" }}
            />
            Gift Cards
          </p>
          <p className="fb_text">
            <HelpIcon sx={{ color: " #ffe11b", fontSize: "20px", mr: "5px" }} />
            Help Center
          </p>
          <p className="fb_text" style={{ cursor: "unset" }}>
            ©2007 - {CurrentYear} Flipkart.com
          </p>
          <img src={logo} height="40px" width="400px" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

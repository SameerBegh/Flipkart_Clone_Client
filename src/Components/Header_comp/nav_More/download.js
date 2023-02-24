import React from "react";
import "./more.css";
import { Button } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

const DownloadApp = () => {

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      <div className="downloadApp">
        <div className="downloadApp_inner">
          <div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-logo_f64bb3.png"
              alt="logo"
              className="fk_Logo"
            />

            <div className="download_title1">
              <span>INDIA'S MOST POPULAR!</span>
              <div className="download_title2">
                <span>SHOPPING APP</span>
              </div>
            </div>
          </div>
          <div className="DA_flex_box">
            <div style={{ display: "inline-block" }}>
              <img
                className="DA_img"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/genuine-products_9b0a2f.png"
                alt="logo"
              />
              <span style={{ marginLeft: "12px" }}>Genuine Products</span>
            </div>
            <div style={{ display: "inline-block", marginLeft: "40px" }}>
              <img
                className="DA_img"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/secure-shopping_817688.png"
                alt="logo"
              />
              <span style={{ marginLeft: "12px" }}>Secure Shopping</span>
            </div>
            <div style={{ display: "inline-block", marginLeft: "40px" }}>
              <img
                className="DA_img"
                src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/Hassle-free_be7c77.png"
                alt="logo"
              />
              <span style={{ marginLeft: "12px" }}>Hassle - free Returns</span>
            </div>
          </div>

          <div className="download_btn">
            <a
              href="https://itunes.apple.com/in/app/flipkart/id742044692"
              className="download_link"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#111",
                  width: "200px",
                  height: "50px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#111",
                    fontWeight: "550",
                    fontFamily: "inherit",
                    border: "1px solid #111",
                  },
                  fontSize: "18px",
                  mr: "50px",
                }}
              >
                <AppleIcon
                  sx={{
                    display: "flex",
                    marginRight: "12px",
                    fontSize: "30px",
                  }}
                />
                App Store
              </Button>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.flipkart.android"
              className="download_link"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#111",
                  width: "200px",
                  height: "50px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#111",
                    fontWeight: "550",
                    fontFamily: "inherit",
                    border: "1px solid #111",
                  },
                  fontSize: "18px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/300/300218.png"
                  alt="playstore"
                  width="25px/"
                  height="25px"
                  style={{ marginRight: "5px" }}
                />
                Google Play
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;

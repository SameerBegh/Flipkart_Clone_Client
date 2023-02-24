import React from "react";
import "./more.css";
import { Box, Divider } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";

const Morelist = ({ setTooltipIsOpen, tooltipIsOpen }) => {
  return (
    <>
      <Box
        className="more_box"
        onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
      >
        <Link
          to={"/mobile-app"}
          className="more-list"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <DownloadIcon
            sx={{ fontSize: 20, marginRight: "15px" }}
            color="primary"
          />
          <span>Download App</span>
        </Link>
        <Divider />
        <Link
          className="more-list"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <NotificationsIcon
            sx={{ fontSize: 18, marginRight: "15px" }}
            color="primary"
          />
          <span>Notification Preferences</span>{" "}
        </Link>
        <Divider />
        <Link
          className="more-list"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <LiveHelpIcon
            sx={{ fontSize: 18, marginRight: "15px" }}
            color="primary"
          />
          <span>24x7 Customer Care</span>
        </Link>
        <Divider />
        <Link
          className="more-list"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <TrendingUpIcon
            sx={{ fontSize: 20, marginRight: "15px" }}
            color="primary"
          />
          <span>Advertise</span>
        </Link>
      </Box>
    </>
  );
};

export default Morelist;

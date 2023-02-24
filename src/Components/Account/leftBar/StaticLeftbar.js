import { Box, ListItemText, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import "./static.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import OutboxIcon from "@mui/icons-material/Outbox";
import PersonIcon from "@mui/icons-material/Person";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Outlet, NavLink } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";

const OptionList = styled(Typography)`
  font-size: 14px;
  margin-left: 56px;
`;
const StaticLeftbar = () => {
  const { user, wish } = useContext(DataContext);

  const logout = () => {
    
    localStorage.clear();
  };

  return (
    <Box className="static_body">
      <div>
        <Box className="staticProfileBar">
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <Box>
                <Typography sx={{ fontSize: "14px" }}>Hello,</Typography>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {user.Name}
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
        <Box className="staticBar">
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              padding: "unset",
              margin: "unset",
            }}
          >
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton>
                <ListItemIcon>
                  <OutboxIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="MY ORDERS" />
              </ListItemButton>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PersonIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="ACCOUNT SETTING" />
              </ListItem>
              <List
                component="nav"
                aria-label="secondary mailbox folder"
                sx={{ margin: "auto" }}
              >
                <NavLink className="navlink" to={"profile"}>
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>
                      Profile Information
                    </OptionList>
                  </ListItemButton>
                </NavLink>
                <NavLink to={"address"} className="navlink">
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>
                      Manage Addresses
                    </OptionList>
                  </ListItemButton>
                </NavLink>
                <NavLink className="navlink" to={"Pancard Information"}>
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>
                      PAN Card Information
                    </OptionList>
                  </ListItemButton>
                </NavLink>
              </List>
              <Divider />

              <ListItem>
                <ListItemIcon>
                  <FolderSharedIcon color="primary" sx={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary="MY STUFF" />
              </ListItem>
              <List component="nav" aria-label="secondary mailbox folder">
                <NavLink className="navlink" to={"wishlist"}>
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>
                      {wish.length ? (
                        <span> My Wishlist ({wish.length}) </span>
                      ) : (
                        <span>My Wishlist</span>
                      )}
                    </OptionList>
                  </ListItemButton>
                </NavLink>
                <NavLink className="navlink">
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>My Coupons</OptionList>
                  </ListItemButton>
                </NavLink>
                <NavLink className="navlink">
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>
                      My Reviews & Ratings
                    </OptionList>
                  </ListItemButton>
                </NavLink>
                <NavLink className="navlink">
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>
                      All Notification
                    </OptionList>
                  </ListItemButton>
                </NavLink>
              </List>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <AccountBalanceWalletIcon
                    color="primary"
                    sx={{ fontSize: "25px" }}
                  />
                </ListItemIcon>
                <ListItemText primary="PAYMENTS" />
              </ListItem>
              <List component="nav" aria-label="secondary mailbox folder">
                <NavLink className="navlink">
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>Gift Cards</OptionList>
                  </ListItemButton>
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>Saved UPI</OptionList>
                  </ListItemButton>
                </NavLink>
                <NavLink className="navlink">
                  <ListItemButton>
                    <OptionList sx={{ ml: "56px" }}>Saved Cards</OptionList>
                  </ListItemButton>
                </NavLink>
              </List>
              <Divider />
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton onClick={() => logout()}>
                  <ListItemIcon>
                    <PowerSettingsNewIcon
                      color="primary"
                      sx={{ fontSize: "25px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </a>
            </List>
          </List>
        </Box>
        <Box className="BaseBar">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Frequently Visited:
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              marginTop: "10px",
              fontWeight: 500,
              color: "#878787",
              fontFamily: "inherit",
              textDecoration: "none",
            }}
          >
            Track Order <span style={{ margin: "10px" }}>Help Center</span>
          </Typography>
        </Box>
      </div>
      <Outlet />
    </Box>
  );
};

export default StaticLeftbar;

import React, { useState, useContext, useRef, useEffect } from "react";
import { Button, Box, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Login from "../LoginForm/Login";
import { DataContext } from "../../Context/DataProvider";
import "./right.css";
import Morelist from "../nav_More/Morelist";
import LoginList from "../LoginForm/LoginList";
import { Link, useNavigate } from "react-router-dom";
import StyledBadge from "@mui/material/Badge";
import { UserContextInfo } from "../../Context/UserContext";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { getCart } from "../../APIservice/api";

const Rightbar = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0px 3% 0px;
  & > Button,
  & > p,
  & > div {
    margin-right: 37px;
    font-size: 16px;
    letter-spacing: 0.1px;
    font-weight: 550;
    cursor: pointer;
    font-family: inherit;
  }
`;

const LoginBtn = styled(Button)`
  background-color: #fff;
  color: #2874f0;
  border-radius: 2px;
  text-transform: none;
  padding: 3px 42px;
  box-shadow: none;
  height: 32px;
`;

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    fontSize: "20px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: "unset",
  },
}));

const RightBar = () => {
  const { user, Cart, Price, setCart, setPrice } = useContext(DataContext);
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  const [logintooltipIsOpen, setLoginTooltipIsOpen] = useState(false);
  const { Open, setOpen } = useContext(UserContextInfo);
  const navigate = useNavigate();

  const getCartItems = useRef();
  const Cartlength = Cart?.length;
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCartItems.current();
    }else{
      return;
    }
  }, [Cartlength]);

  const cartItems = async () => {
    const response = await getCart();
    if (response.status === 200) {
      if (response.data === null) {
        return setCart([]);
      } else {
        setCart(response.data.Cart);
        setPrice({
          totalQuantity: response.data.totalQuantity,
          totalPrice: response.data.totalPrice,
          totalDiscount: response.data.totalDiscount,
          totalCost: response.data.totalCost,
        });
      }
    }
  };

  getCartItems.current = cartItems;

  const Btnhover = {
    "&:hover": {
      backgroundColor: "#fff",
    },
  };

  const handleopen = () => {
    setOpen(true);
    setLoginTooltipIsOpen(!logintooltipIsOpen);
  };

  return (
    <>
      <div className="rightbar">
        <Rightbar>
          {user ? (
            <>
              <LightTooltip
                title={
                  <LoginList
                    setLoginTooltipIsOpen={setLoginTooltipIsOpen}
                    logintooltipIsOpen={logintooltipIsOpen}
                  />
                }
                TransitionComponent={Zoom}
                open={logintooltipIsOpen}
                onOpen={() => setLoginTooltipIsOpen(true)}
                onClose={() => setLoginTooltipIsOpen(false)}
              >
                <Box
                  className="more"
                  onClick={() => setLoginTooltipIsOpen(!logintooltipIsOpen)}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: "inherit",
                      fontWeight: 550,
                      cursor: "pointer",
                      textTransform: "Capitalizecase",
                      ml: "10px",
                    }}
                  >
                    {user.Name}
                  </Typography>
                  {logintooltipIsOpen ? (
                    <ExpandLessIcon style={{ fontSize: 17, marginLeft: 2 }} />
                  ) : (
                    <ExpandMoreIcon style={{ fontSize: 17, marginLeft: 2 }} />
                  )}
                </Box>
              </LightTooltip>
            </>
          ) : (
            <>
              <LightTooltip
                title={
                  <LoginList
                    setLoginTooltipIsOpen={setLoginTooltipIsOpen}
                    logintooltipIsOpen={logintooltipIsOpen}
                  />
                }
                TransitionComponent={Zoom}
                open={logintooltipIsOpen}
                onOpen={() => setLoginTooltipIsOpen(true)}
                onClose={() => setLoginTooltipIsOpen(false)}
              >
                <LoginBtn
                  className="toolLogin"
                  sx={Btnhover}
                  onClick={() => handleopen()}
                >
                  Login
                </LoginBtn>
              </LightTooltip>
            </>
          )}

          <Typography
            style={{ width: 150 }}
            onClick={() => navigate("/seller")}
          >
            Become a Seller
          </Typography>
          <LightTooltip
            title={
              <Morelist
                setTooltipIsOpen={setTooltipIsOpen}
                tooltipIsOpen={tooltipIsOpen}
              />
            }
            TransitionComponent={Zoom}
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
          >
            <Box
              className="more"
              onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
            >
              <Typography style={{ fontFamily: "inherit", fontWeight: "550" }}>
                More
              </Typography>
              {tooltipIsOpen ? (
                <ExpandLessIcon style={{ fontSize: 17, marginLeft: 2 }} />
              ) : (
                <ExpandMoreIcon style={{ fontSize: 17, marginLeft: 2 }} />
              )}
            </Box>
          </LightTooltip>
          <Box
            onClick={() => {
              navigate("/cart");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
            }}
          >
            <StyledBadge
              badgeContent={Cart?.length ? Price.totalQuantity : null}
              color="warning"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <ShoppingCartIcon style={{ fontSize: 20, marginRight: 5 }} />
            </StyledBadge>
            <Typography
              style={{ fontSize: 16, fontFamily: "inherit", fontWeight: 550 }}
            >
              Cart
            </Typography>
          </Box>
          <Login Open={Open} setOpen={setOpen} />
        </Rightbar>
      </div>
      <div className="cart">
        <Link
          to="/cart"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <StyledBadge
            badgeContent={Cart?.length ? Price.totalQuantity : null}
            color="warning"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <ShoppingCartIcon style={{ fontSize: 20 }} />
          </StyledBadge>
        </Link>
      </div>
    </>
  );
};

export default RightBar;

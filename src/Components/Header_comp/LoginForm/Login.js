import React, { useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { getCart, signupAuthentication } from "../../APIservice/api";
import { DataContext } from "../../Context/DataProvider";
import { loginAuthentication } from "../../APIservice/api";
import { UserContextInfo } from "../../Context/UserContext";
import { toast } from "react-toastify";
import "./LoginList.css";

const Component = styled(Box)`
  display: flex;
  height: 528px;
  width: 675px;
`;
const Rightbox = styled(Box)`
  background: #2370f4
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  padding: 45px 33px;
  color: #fff;
`;
const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 56px 35px 16px;
`;


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

const Login = ({ Open, setOpen }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [LoginName, setLoginName] = useState("");
  const { Accounttoggle, setAccounttoggle } = useContext(UserContextInfo);
  const { setuser } = useContext(DataContext);
  const { setCart, setPrice } = useContext(DataContext);

  const navigate = useNavigate();

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

  // Toastify for error and success msgs alert
  const notifysuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyError = (message) =>
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

  // validating an email/Phone/password with Regex
  const emailRegex =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  const PasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{6,})/;
  const mobileregex = /^(?:(?:\+|0{0,2})91(\s*[/-]\s*)?|[0]?)?[6789]\d{9}$/;

  const signupUser = async (e) => {
    if (Name === "") {
      notifyError("Please enter valid input for field");
      return;
    } else if (Name === " ") {
      notifyError("Please enter valid User name");
      return;
    } else if (!emailRegex.test(Email)) {
      notifyError("Please enter a valid email address");
      return;
    } else if (!mobileregex.test(Mobile)) {
      notifyError("Please enter valid Mobile number");
      return;
    } else if (!PasswordRegex.test(Password)) {
      notifyError(
        "Password must have at least 6 & one special characters including both Upper & lowercase and at least one number"
      );
      return;
    }
    e.preventDefault();
    let response = await signupAuthentication({
      Name: Name,
      Email: Email,
      Mobile: Mobile,
      Password: Password,
    });

    if (!response) return;

    notifysuccess(response.data.message);
    setAccounttoggle(AccountInfo.login);
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
  };

  const loginUser = async () => {
    let response = await loginAuthentication({
      Name: LoginName,
      Password: LoginPassword,
    });

    if (!response) return; 
      notifysuccess(response.data.message);
      setAccounttoggle(AccountInfo.login);
      localStorage.setItem("jwt", response.data.token);
      setuser(response.data.USER);
      setLoginName("");
      setLoginPassword("");
      setOpen(false);
      cartItems();
      navigate("/");
  
  };

  const CreateAccount = () => {
    setAccounttoggle(AccountInfo.signup);
    setLoginName("");
    setLoginPassword("");
  };

  const ExistingUser = () => {
    setAccounttoggle(AccountInfo.login);
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
  };
  return (
    <>
      <Dialog
        open={Open}
        onClose={() => {
          setOpen(false);
          setName("");
          setEmail("");
          setPassword("");
          setMobile("");
          setLoginName("");
          setLoginPassword("");
          setAccounttoggle(AccountInfo.login);
        }}
        PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}
      >
        <CloseIcon
          onClick={() => {
            setOpen(false);
            setAccounttoggle(AccountInfo.login);
          }}
          sx={{
            position: "absolute",
            right: 10,
            marginTop: 1,
            cursor: "pointer",
            "&:hover": {
              color: "#2478f0",
            },
          }}
        />
        <Component>
          <Rightbox>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 26,
                fontWeight: 500,
              }}
            >
              {Accounttoggle.title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 18,
                marginTop: 3,
                width: "auto",
                lineHeight: "150%",
                color: "#dbdbdb",
                fontFamily: "inherit",
              }}
            >
              {Accounttoggle.info}
            </Typography>
          </Rightbox>
          {Accounttoggle.open === "login" ? (
            <LeftBox>
              <TextField
                autoFocus
                label="Enter Username"
                onChange={(e) => setLoginName(e.target.value)}
                value={LoginName}
                variant="standard"
                sx={{ width: "100%", marginTop: 2, height: "48px" }}
              />
              <TextField
                label="Enter Password"
                type="password"
                value={LoginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                variant="standard"
                sx={{ width: "100%", marginTop: 3, height: "48px" }}
              />
              <Box sx={{ lineHeight: 1.5 , width:"100%"}}>
                <p style={{width:"335px", fontSize:"12px", marginTop:"20px"}}>
                  By continuing, you agree to Flipkart's
                  <span style={{ color: "#2478f0", cursor: "pointer", }}>
                    Terms of Use
                  </span>
                  <span style={{ margin: "0 5px" }}>and</span>
                  <span style={{ color: "#2478f0", cursor: "pointer" }}>
                    Privacy Policy
                  </span>
                  .
                </p>
              </Box>
              <Button
                sx={{
                  width: "100%",
                  height: 45,
                  textTransform: "none",
                  backgroundColor: "#fb641b",
                  fontSize: 17,
                  marginTop: 2,
                }}
                variant="contained"
                onClick={(e) => loginUser(e)}
              >
                Login
              </Button>
              <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                Or
              </Typography>
              <Button
                sx={{
                  width: "100%",
                  height: 45,
                  textTransform: "none",
                  backgroundColor: "#fb641b",
                  fontSize: 17,
                  marginTop: 2,
                }}
                variant="contained"
              >
                Request OTP
              </Button>
              <Typography
                onClick={() => CreateAccount()}
                sx={{
                  textAlign: "center",
                  color: " #2370f4",
                  marginTop: 7,
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 550,
                  fontFamily: "inherit",
                }}
              >
                New to Flipkart? Create an account
              </Typography>
            </LeftBox>
          ) : (
            <LeftBox>
              <TextField
                autoFocus
                id="standard-basic"
                label="Enter Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
                sx={{ width: "100%", height: "45px" }}
              />
              <TextField
                label="Enter Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
                sx={{ width: "100%", marginTop: 3, height: "45px" }}
              />
              <TextField
                label="Enter Mobile number"
                value={Mobile}
                onChange={(e) => setMobile(e.target.value)}
                variant="standard"
                sx={{ width: "100%", marginTop: 3, height: "45px" }}
                type="number"
                className="number"
              />

              <TextField
                label="Set Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                variant="standard"
                sx={{ width: "100%", marginTop: 3, height: "45px" }}
              />

<p style={{width:"335px", fontSize:"12px", marginTop:"20px"}}>
                <span>By continuing, you agree to Flipkart's</span>
                <span style={{ color: "#2478f0", cursor: "pointer" }}>
                  Terms of Use
                </span>
                <span style={{ margin: "0 5px" }}>and</span>
                <span style={{ color: "#2478f0", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>

              <Button
                sx={{
                  width: "100%",
                  height: 45,
                  textTransform: "none",
                  backgroundColor: "#fb641b",
                  fontSize: 17,
                  marginTop: 3,
                }}
                variant="contained"
                onClick={(e) => signupUser(e)}
              >
                SignUp
              </Button>
              <Typography
                onClick={() => ExistingUser()}
                sx={{
                  textAlign: "center",
                  color: " #2370f4",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 550,
                  fontFamily: "inherit",
                  marginTop: 4,
                }}
              >
                Existing User? Login
              </Typography>
            </LeftBox>
          )}
        </Component>
      </Dialog>
    </>
  );
};

export default Login;

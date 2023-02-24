import { Box, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import "./account.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DataContext } from "../../Context/DataProvider";
import { UpdateProfile } from "../../APIservice/api";
import { toast } from "react-toastify";
import Deactivate from "../DeactivateAccount/Deactivate";

const Account = () => {
  const { user, setuser } = useContext(DataContext);
  const [UpdateName, setUpdateName] = useState(user.Name);
  const [UpdateEmail, setUpdateEmail] = useState(user.Email);
  const [UpdateMobile, setUpdateMobile] = useState(user.Mobile);
  const [UpdateGender, setUpdateGender] = useState(user.Gender);
  const [Edit, setEdit] = useState(false);
  const [open, setopen] = useState(false);
  

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const Save = async () => {
    const response = await UpdateProfile({
      Name: UpdateName,
      Email: UpdateEmail,
      Mobile: UpdateMobile,
      Gender: UpdateGender,
    });
    if (!response) return;
    notifysuccess(response.data.message);
    setuser(response.data.Profile);
    setEdit(false);
  };

  return (
    <>
      <Box className="account_Box">
        <Box className="form">
          <form className={Edit ? "form-Box" : null}>
            <Box className="header" sx={{ mt: !Edit ? "25px" : null }}>
              <p>Personal Information</p>
              {Edit ? null : (
                <Button onClick={() => setEdit(!Edit)}>EDIT</Button>
              )}
            </Box>
            <Box>
              <TextField
                className="Name"
                sx={{
                  mt: "20px",
                  width: "250px",
                  opacity: Edit ? null : "0.6",
                  bgcolor: "#fff",
                }}
                id="outlined-read-only-input"
                label="Username"
                value={UpdateName}
                onChange={(e) => setUpdateName(e.target.value)}
                size="small"
                InputProps={Edit ? { readOnly: false } : { readOnly: true }}
              />
            </Box>
            <FormControl sx={{ mt: "25px" }}>
            <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"  
                value={UpdateGender}
                onChange={(e) => setUpdateGender(e.target.value)}
              >
                {Edit ? (
                  <Box>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      checked={UpdateGender === "female"}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      checked={UpdateGender === "male"} 
                      
                    />
                  </Box>
                ) : (
                  <Box>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      disabled
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      disabled
                    />
                  </Box>
                )}
              </RadioGroup>
            </FormControl>
            <Box>
              <Box className="header" sx={{ mt: "25px" }}>
                <p>Email Address</p>
              </Box>
              <Box className="email_box">
                <TextField
                  sx={{
                    mt: "20px",
                    width: "250px",
                    opacity: Edit ? null : "0.6",
                    bgcolor: "#fff",
                  }}
                  id="outlined-read-only-input"
                  label="Email"
                  value={UpdateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                  size="small"
                  InputProps={Edit ? { readOnly: false } : { readOnly: true }}
                />
              </Box>
            </Box>
            <Box>
              <Box className="header" sx={{ mt: "25px" }}>
                <p>Mobile Number</p>
              </Box>
              <Box>
                <TextField
                  sx={{
                    mt: "20px",
                    width: "250px",
                    opacity: Edit ? null : "0.6",
                    bgcolor: "#fff",
                  }}
                  id="outlined-read-only-input"
                  label="Mobile number"
                  value={UpdateMobile}
                  onChange={(e) => setUpdateMobile(e.target.value)}
                  size="small"
                  InputProps={Edit ? { readOnly: false } : { readOnly: true }}
                />
              </Box>
              <Box sx={{ mt: "25px" }}>
                {Edit ? (
                  <>
                    {" "}
                    <Button
                      variant="contained"
                      sx={{
                        width: "115px",
                        mr: "20px",
                        "&:hover": { backgroundColor: "#26a541" },
                      }}
                      onClick={() => Save()}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ width: "115px" }}
                      onClick={() => setEdit(false)}
                    >
                      Cancle
                    </Button>{" "}
                  </>
                ) : null}
              </Box>
            </Box>
          </form>

          <Button sx={{ mt: "15%" }} onClick={() => setopen(!open)}>
            Deactivate Account
          </Button>
        </Box>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
          alt="img"
          width={"100%"}
          style={{ position: "absolute", bottom: "0px" }}
        />
      </Box>
      <Deactivate setopen={setopen} open={open} />
    </>
  );
};

export default Account;

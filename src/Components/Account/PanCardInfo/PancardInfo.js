import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Pancard.css";
import { Link } from "react-router-dom";

const PancardInfo = () => {
  return (
    <>
      <Box className="Pancard_Box">
        <form className="form_box">
          <Typography>PAN Card Information</Typography>
          <TextField
            id="outlined-basic"
            label="PAN Card Number"
            value=""
            sx={{ width: "300px", margin: "25px 0px" }}
          />
          <TextField
            id="outlined-basic"
            label="Full Name"
            value=""
            sx={{ width: "300px", margin: "15px 0px" }}
          />

          <Box className="PAN_file">
            <input type="file"></input>
          </Box>

          <Box className="PAN_checkbox">
            <input type="checkbox" className="pancheck" />
            <p>
              I do hereby declare that PAN furnished/stated above is correct and
              belongs to me, registered as an account holder with
              www.flipkart.com. I further declare that I shall solely be held
              responsible for the consequences, in case of any false PAN
              declaration.
            </p>
          </Box>

          <Button variant="contained" className="Pan_Btn">
            Upload
          </Button>
        </form>

        <Link className="panlink">
          Read Terms & Conditions of PAN Card Information
        </Link>
      </Box>
    </>
  );
};

export default PancardInfo;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
  Slide,
} from "@mui/material";
import { DataContext } from "../../Context/DataProvider";
import "./logout.css";

const Logout = () => {
  const { setdisplayAccount } = useContext(DataContext);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const navigate = useNavigate();

  const Userlogout = () => {
    setdisplayAccount("");
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box className="logout_Box">
      <Dialog
        open={logout}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setlogout(false)}
      >
        <DialogTitle>{"Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to Logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-around" }}>
          <Button
            variant="contained"
            sx={{ width: "150px" }}
            onClick={() => setlogout(false)}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            sx={{ width: "150px", "&:hover": { backgroundColor: "red" } }}
            onClick={() => Userlogout()}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Logout;

import React, { useContext, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { DataContext } from "../../Context/DataProvider";
import { deactivate } from "../../APIservice/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Deactivate = ({ setopen, open }) => {
  const [Password, setPassword] = useState("");
  const { user, setuser } = useContext(DataContext);
  const navigate = useNavigate();
  const [isloading, setLoading] = useState(false);
  const timer = useRef();

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const Deactivate = () => {
    if (!isloading) {
      setLoading(true);
      timer.current = window.setTimeout(async () => {
        setLoading(false);
        const response = await deactivate(Password);
        if (!response) return notifysuccess(response.data.message);
        notifysuccess(response.data.message);
        setuser("");
        localStorage.clear();
        setopen(false);
        navigate("/");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 2000);
    }
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}
      >
        <DialogTitle>Are you sure you want to leave?</DialogTitle>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ width: "100%", display: "grid", cursor: "not-allowed" }}>
            <TextField
              label="Mobile Number"
              id="outlined-size-small"
              value={user.Mobile}
              size="small"
              disabled
            />

            <TextField
              autoFocus
              id="outlined-size-small"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              label="Password"
              type="password"
              sx={{ mt: "20px" }}
            />
          </Box>
          <Box sx={{ width: "100%", display: "grid", mt: "20px" }}>
            <Button
              variant="contained"
              onClick={() => Deactivate()}
              sx={{
                mb: "20px",
              }}
              disabled={isloading}
            >
              Confirm Deactivation
              {isloading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#2478f0",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Button>
            <Button onClick={handleClose}>No, Let Me Stay!</Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default Deactivate;

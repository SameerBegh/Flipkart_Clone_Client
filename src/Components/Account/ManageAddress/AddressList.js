import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { deleteAddress } from "../../APIservice/api";
import { toast } from "react-toastify";

const AddressList = ({ newdata, Addressdata }) => {
  const [open, setOpen] = useState(false);

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleClose = () => {
    setOpen(false);
  };

  const Delete = async (id) => {
    const response = await deleteAddress(id);
    if(!response)return
    Addressdata();
    notifysuccess("Your address has been deleted successfully!");
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              marginRight: " 15px",
              backgroundColor: "#f0f0f0",
              color: "#878787",
              verticalAlign: "middle",
              textTransform: "uppercase",
              fontSize: "11px",
              padding: "4px 7px",
              fontWeight: 500,
              borderRadius: "3px",
            }}
          >
            {newdata.AddressType}
          </Typography>

          <DeleteIcon
            onClick={() => setOpen(!open)}
            sx={{
              color: "#878787",
              cursor: "pointer",
              "&:hover": { color: "red" },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", mt: "10px" }}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {newdata.Name}
          </Typography>
          <span>
            <Typography
              sx={{ fontFamily: "inherit", fontWeight: 600, ml: "10px" }}
            >
              {newdata.Mobile}
            </Typography>
          </span>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontFamily: "inherit", fontSize: "14px" }}>
            {newdata.Address}
          </Typography>
          <Typography
            sx={{ fontFamily: "inherit", ml: "5px", fontSize: "14px" }}
          >
            {newdata.Landmark},
          </Typography>
          <Typography
            sx={{ fontFamily: "inherit", ml: "5px", fontSize: "14px" }}
          >
            {newdata.Locality},
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              ml: "5px",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            {newdata.City},
          </Typography>
          <Typography
            sx={{ fontFamily: "inherit", ml: "5px", fontSize: "14px" }}
          >
            {newdata.State} -
          </Typography>

          <Typography
            sx={{
              fontFamily: "inherit",
              ml: "5px",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            {newdata.Pincode}
          </Typography>
        </Box>
      </Box>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{ sx: { padding: "10px" } }}
        >
          <DialogContent sx={{ display: "flex", fontSize: "20px" }}>
            Are you sure you want to delete this address?
          </DialogContent>
          <DialogActions sx={{ justifyContent: "space-around" }}>
            <Button
              variant="contained"
              sx={{ width: "150px", "&:hover": { bgcolor: "red" } }}
              onClick={() => Delete(newdata._id)}
            >
              Yes, Delete
            </Button>
            <Button
              variant="contained"
              sx={{ width: "150px" }}
              onClick={handleClose}
            >
              Cancle
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AddressList;

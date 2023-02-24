import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../../Redux/Reducer/CartReducer/CartFunction";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const RemoveAlert = ({ removeItem, setRemoveItem, id, title }) => {
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(deleteCart(id));
    setRemoveItem(false);
    notifysuccess(title.longTitle + " " + " has been moved to your Cart.");
  };

  const handleClose = () => {
    setRemoveItem(false);
  };

  return (
    <div>
      <Dialog
        open={removeItem}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Remove Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-around" }}>
          <Button
            variant="contained"
            sx={{ width: "150px" }}
            onClick={handleClose}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            sx={{ width: "150px", "&:hover": { backgroundColor: "red" } }}
            onClick={() => remove(id)}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default RemoveAlert;

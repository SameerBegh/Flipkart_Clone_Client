import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { toast } from "react-toastify";

import { address, getaddress } from "../../APIservice/api";

import { DataContext } from "../../Context/DataProvider";

const AddressEditform = ({ setEdit }) => {
  const GetAddress = useRef();

  const { newdata, setnewdata } = useContext(DataContext);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
     GetAddress.current();
  }, []);

  const Addressdata = async () => {
    const response = await getaddress();
    if (response.status === 200) {
      if (response.data === null) {
        return;
      } else {
        setnewdata(response.data.addAddress);
      }
    }
  };
  GetAddress.current = Addressdata;

  const data = newdata.findLast((data) => data);

  const [Name, setName] = useState(data.Name);
  const [Mobile, setMobile] = useState(data.Mobile);
  const [Pincode, setPincode] = useState(data.Pincode);
  const [Locality, setLocality] = useState(data.Locality);
  const [Address, setAddress] = useState(data.Address);
  const [City, setCity] = useState(data.City);
  const [Landmark, setLandmark] = useState(data.Landmark);
  const [Phone, setPhone] = useState(data.Phone);
  const [AddressType, setAddressType] = useState(data.AddressType);
  const [State, setState] = useState(data.State);
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 220,
      },
    },
  };

  // States Name (India)
  const StateName = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "UttaraKhand",
    "West Bengal",
  ];

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const mobileregex = /^(?:(?:\+|0{0,2})91(\s*[/-]\s*)?|[0]?)?[6789]\d{9}$/;

  const Save = async () => {
    if (
      !Name ||
      !Mobile ||
      !Pincode ||
      !City ||
      !State ||
      !Address ||
      !AddressType ||
      !Locality
    ) {
      notifyError("Please enter valid input for field");
      return;
    } else if (Name === " ") {
      notifyError("Please enter valid Name");
      return;
    } else if (!mobileregex.test(Mobile)) {
      notifyError("Please enter valid Mobile number");
      return;
    }

    const response = await address({
      Name: Name,
      Mobile: Mobile,
      Pincode: Pincode,
      Landmark: Landmark,
      City: City,
      Address: Address,
      AddressType: AddressType,
      Locality: Locality,
      State: State,
      Phone: Phone,
    });

    if (!response) return;

    Addressdata();
    setEdit(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <form className="Edit_addressForm">
        <Typography
          sx={{
            color: "#2478f0",
            fontFamily: "inherit",
            fontSize: "17px",
            fontWeight: 500,
          }}
        >
          ADD A NEW ADDRESS
        </Typography>

        <Button
          variant="contained"
          className="location"
          sx={{
            textTransform: "capitalize",
            margin: "20px 0",
            fontSize: "14px",
            width: "220px",
            height: "40px",
          }}
        >
          <MyLocationIcon sx={{ fontSize: "17px", mr: "5px" }} />
          Use my current location
        </Button>
        <Box className="txt">
          <TextField
            autoFocus
            id="outlined-basic"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
            type="number"
            className="number"
          />
        </Box>
        <Box className="txt">
          <TextField
            id="outlined-basic"
            label="Pincode"
            type="number"
            value={Pincode}
            onChange={(e) => setPincode(e.target.value)}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
            className="number"
          />

          <TextField
            id="outlined-basic"
            label="Locality"
            value={Locality}
            onChange={(e) => setLocality(e.target.value)}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
          />
        </Box>
        <Box className="txt">
          <TextField
            id="outlined-textarea"
            label="Address"
            value={Address}
            placeholder="Address (Area and Street)"
            multiline
            minRows={2}
            sx={{ width: "61%", bgcolor: "#fff" }}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
        <Box className="txt">
          <TextField
            id="outlined-basic"
            label="City/District/town"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
          />

          <FormControl sx={{ minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small">State</InputLabel>

            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="State"
              MenuProps={MenuProps}
              value={State}
              onChange={(e) => setState(e.target.value)}
              sx={{ bgcolor: "#fff" }}
            >
              {StateName.map((stateSelect) => (
                <MenuItem
                  key={stateSelect}
                  value={stateSelect}
                  style={{ maxHeight: "50px" }}
                >
                  {stateSelect}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="txt">
          <TextField
            id="outlined-basic"
            label="Landmark (Optional)"
            value={Landmark}
            onChange={(e) => setLandmark(e.target.value)}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
          />
          <TextField
            id="outlined-basic"
            label="Alternate Phone (Optional)"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            size="small"
            sx={{ mr: "20px", bgcolor: "#fff" }}
            type="number"
            className="number"
          />
        </Box>

        <Box sx={{ mt: "20px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Address Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setAddressType(e.target.value)}
          >
            <FormControlLabel
              value="Home"
              name="addressType"
              control={<Radio />}
              label="Home"
              checked={AddressType === "Home"}
            />
            <FormControlLabel
              value="Work"
              name="addressType"
              control={<Radio />}
              label="Work"
              checked={AddressType === "Work"}
            />
          </RadioGroup>
        </Box>

        <Box sx={{ mt: "20px" }}>
          <Button
            variant="contained"
            className="saveBtn"
            onClick={() => Save()}
            sx={{ bgcolor: "#fb641b" }}
          >
            Save & Deliver here
          </Button>
          <Button
            variant="contained"
            className="saveBtn"
            sx={{ bgcolor: "#2478f0", ml: "22px" }}
            onClick={() => {setEdit(false);  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddressEditform;

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
import "./address.css";
import AddIcon from "@mui/icons-material/Add";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddressList from "./AddressList";
import { toast } from "react-toastify";
import "./address.css";
import { address, getaddress } from "../../APIservice/api";
import { DataContext } from "../../Context/DataProvider";

const Address = () => {
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Locality, setLocality] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [Phone, setPhone] = useState("");
  const [AddressType, setAddressType] = useState("");
  const [State, setState] = useState("");
  const [AddressClick, setAddressClick] = useState(false);
  const { newdata, setnewdata } = useContext(DataContext);
  const GetAddress = useRef();
  // select-State MenuItem prop style
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

  const handlechange = () => {
    setAddressClick(true);
  };

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
    setAddressClick(false);
    setAddress("");
    setName("");
    setAddressType("");
    setPhone("");
    setLandmark("");
    setLocality("");
    setCity("");
    setMobile("");
    setState("");
    setPincode("");
  };

  return (
    <>
      <Box className="address_Box">
        <Box className="address">
          {AddressClick ? (
            <form className="addressForm">
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
                  />
                  <FormControlLabel
                    value="Work"
                    name="addressType"
                    control={<Radio />}
                    label="Work"
                  />
                </RadioGroup>
              </Box>

              <Box sx={{ mt: "20px" }}>
                <Button
                  variant="contained"
                  className="saveBtn"
                  onClick={() => Save()}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  className="saveBtn"
                  sx={{ bgcolor: "#fb641b", ml: "22px" }}
                  onClick={() => setAddressClick(false)}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          ) : (
            <>
              {newdata?.length ? (
                <>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      fontFamily: "inherit",
                      mb: "20px",
                    }}
                  >
                    Manage Addresses
                  </Typography>
                  <Button
                    onClick={() => handlechange()}
                    className="addBtn"
                    sx={{
                      border: "1px solid #e0e0e0",
                      justifyContent: "left",
                      padding: "10px",
                      fontSize: "17px",
                      fontWeight: 500,
                      fontFamily: "inherit",
                    }}
                  >
                    <AddIcon sx={{ mr: "10px" }} />
                    Add a new address
                  </Button>{" "}
                </>
              ) : (
                <Box className="empty_address">
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myaddresses-empty_3b40af.png"
                    alt="img"
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      m: "30px 0 10px",
                      fontWeight: 600,
                      fontFamily: "inherit",
                    }}
                  >
                    No Addresses found in your account!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      m: "0 0 20px",
                    }}
                  >
                    Add a delivery address.
                  </Typography>
                  <Button
                    onClick={() => handlechange()}
                    className="addBtn"
                    variant="contained"
                    sx={{
                      justifyContent: "left",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: 500,
                      fontFamily: "inherit",
                    }}
                  >
                    Add a new address
                  </Button>
                </Box>
              )}
            </>
          )}
        </Box>
        {newdata?.map((newdata) => {
          return (
            <Box
              key={newdata._id}
              sx={{
                border: "1px solid #e0e0e0",
                padding: "20px",
                borderRadius: "4px",
                margin: "10px 37px ",
              }}
            >
              <AddressList
                newdata={newdata}
                id={newdata._id}
                Addressdata={Addressdata}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Address;

import { Button } from "@mui/material";
import React, { useState } from "react";

import AddressEditform from "./AddressEditform";

const AddressChange = ({ setaddressChange, setorderChange, data }) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {data ? (
        <div className="change_address">
          <div className="login_1C">
            <div className="C_number_box">2</div>
            <div className="box_header">
              <p
                style={{
                  marginLeft: "13px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                Delivery Address
              </p>
            </div>
          </div>

          {edit ? (
            <>
              <div className="Address_edit">
                <AddressEditform setEdit={setEdit} data={data} />
              </div>
            </>
          ) : (
            <div className="Address_Box">
              <div className="Address_Detail">
                <div className="div_address">
                  <p>
                    <span>
                      <input type="radio" checked={true} readOnly />
                    </span>
                    <span
                      style={{
                        marginLeft: "12px",
                        fontWeight: 500,
                      }}
                      className="home"
                    >
                      {data.AddressType}
                    </span>
                  </p>
                  <div>
                    <span
                      style={{
                        marginLeft: "25px",
                        textTransform: "capitalize",
                        fontWeight: 600,
                      }}
                    >
                      {data.Name}
                    </span>
                    <span
                      style={{
                        marginLeft: "12px",
                        textTransform: "capitalize",
                        fontWeight: 500,
                      }}
                    >
                      {data.Mobile}
                    </span>
                  </div>
                  <div style={{ margin: "5px 25px" }}>
                    <span>{data.Address}</span>
                    <span>{data.Locality} </span>
                    <span className="address_span">{data.Landmark}</span>
                    <span className="address_span">{data.City}</span>
                  </div>
                  <p style={{ marginLeft: "25px" }}>
                    {data.State}
                    <span style={{ fontWeight: 600 }}> - {data.Pincode}</span>
                  </p>
                  <Button
                    variant="contained"
                    sx={{
                      m: "10px 0px",
                      width: "240px",
                      bgcolor: "#fb641b",
                      height: "45px",
                      ml: "20px",
                    }}
                    onClick={() => {
                      setaddressChange(false);
                      setorderChange(true);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Deliver here
                  </Button>
                </div>
              </div>
              <div className="">
                <Button
                  variant="contained"
                  onClick={() => {
                    setEdit(!edit);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  EDIT
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="Address_edit">
          <AddressEditform setEdit={setEdit} />
        </div>
      )}
    </>
  );
};

export default AddressChange;

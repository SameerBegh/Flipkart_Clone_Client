import React, { useContext, useEffect, useRef, useState } from "react";
import TotalPay from "../Cart/Total/TotalPay";
import "./order.css";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";
import LoginChange from "./OrderSubComponent/LoginChange";
import { getaddress, getCart } from "../APIservice/api";
import { DataContext } from "../Context/DataProvider";
import AddressChange from "./OrderSubComponent/AddressChange";
import OrderSummary from "./OrderSubComponent/OrderSummary";
import PaymentOption from "./OrderSubComponent/PaymentOption";
import Editform from "./OrderSubComponent/Editform";

const Order = () => {
  const [loginChange, setloginChange] = useState(false);
  const [addressChange, setaddressChange] = useState(false);
  const [orderChange, setorderChange] = useState(true);
  const [paymentChange, setpaymentChange] = useState(false);

  const { user, Cart, setCart, setPrice } = useContext(DataContext);
  const { newdata, setnewdata } = useContext(DataContext);
  const CartItems = useRef();
  const Address = useRef();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    Address.current();
  }, []);

 

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    CartItems.current();
  }, [Cart]);

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

  CartItems.current = cartItems

 

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

  Address.current = Addressdata;

  const data = newdata.findLast((newdata) => newdata);

  return (
    <>
      <div className="Order_Container">
        <div className="Order_detail">
          {loginChange ? null : (
            <div className="login_order">
              <div className="login_detail">
                <div className="login_1">
                  <div className="number_box">1</div>
                  <div className="box_header">
                    <p
                      style={{
                        marginLeft: "13px",
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                    >
                      Login
                    </p>
                  </div>
                  <div className="tick">
                    <DoneIcon color="primary" sx={{ ml: "5px" }} />
                  </div>
                </div>
                <div className="login_2">
                  <p>
                    {user.Name}
                    <span style={{ marginLeft: "5px" }}>{user.Mobile}</span>
                  </p>
                </div>
              </div>
              <div className="login_change">
                <Button
                  variant="contained"
                  onClick={() => {
                    setloginChange(!loginChange);
                    setpaymentChange(false);
                    setaddressChange(false);
                    setorderChange(false);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Change
                </Button>
              </div>
            </div>
          )}
          <div>
            {loginChange && (
              <LoginChange
                setloginChange={setloginChange}
                setaddressChange={setaddressChange}
              />
            )}
          </div>

          {/* Address Box */}
          <div className="Address_Container">
            {data ? (
              <>
                {addressChange ? null : (
                  <div className="login_order">
                    <div className="login_detail">
                      <div className="login_1">
                        <div className="number_box">2</div>
                        <div className="box_header">
                          <p
                            style={{
                              marginLeft: "13px",
                              fontSize: "16px",
                              textTransform: "uppercase",
                            }}
                          >
                            Delivery Address
                          </p>
                        </div>
                        <div className="tick">
                          <DoneIcon color="primary" sx={{ ml: "5px" }} />
                        </div>
                      </div>
                      <div className="login_2">
                        {/* {data && ( */}
                        <div style={{ fontSize: "14px" }}>
                          <span style={{ color: "#111", fontWeight: 500 }}>
                            {data.Name}
                          </span>
                          <span> {data.Address}</span>
                          <span>{data.Landmark}</span>
                          <span style={{ marginLeft: "8px" }}>
                            {data.Locality}
                          </span>
                          <span>{data.City}</span>
                          <span style={{ marginLeft: "8px" }}>
                            {data.State}
                          </span>
                          <span style={{ color: "#111", fontWeight: 500 }}>
                            - {data.Pincode}
                          </span>
                        </div>
                        {/* )} */}
                      </div>
                    </div>
                    <div
                      className="login_change"
                      style={{ marginLeft: "10px" }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => {
                          setaddressChange(!addressChange);
                          setpaymentChange(false);
                          setloginChange(false);
                          setorderChange(false);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Change
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
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
                <Editform
                  setaddressChange={setaddressChange}
                  setorderChange={setorderChange}
                />
              </>
            )}
            <div>
              {addressChange && (
                <AddressChange
                  setaddressChange={setaddressChange}
                  setorderChange={setorderChange}
                  data={data}
                />
              )}
            </div>
          </div>

          {/* Order_Box */}
          {data ? (
            <div className="Order_summary">
              {orderChange ? null : (
                <div className="login_order">
                  <div className="login_detail">
                    <div className="login_1">
                      <div className="number_box">3</div>
                      <div className="box_header">
                        <p
                          style={{
                            marginLeft: "13px",
                            fontSize: "16px",
                            textTransform: "uppercase",
                          }}
                        >
                          Order Summary
                        </p>
                      </div>
                      <div className="tick">
                        <DoneIcon color="primary" sx={{ ml: "5px" }} />
                      </div>
                    </div>
                    <div className="login_2">
                      {Cart && (
                        <div style={{ fontSize: "14px" }}>
                          {Cart?.length > 1 ? (
                            <p>{Cart?.length} items </p>
                          ) : (
                            <p>1 item </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="login_change" style={{ marginLeft: "10px" }}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setorderChange(!orderChange);
                        setpaymentChange(false);
                        setloginChange(false);
                        setaddressChange(false);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              )}
              <div>
                {orderChange && (
                  <OrderSummary
                    setorderChange={setorderChange}
                    Cart={Cart}
                    setpaymentChange={setpaymentChange}
                  />
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="login_order" style={{ marginTop: "10px" }}>
                <div className="login_detail">
                  <div className="login_1">
                    <div className="number_box">3</div>
                    <div className="box_header">
                      <p
                        style={{
                          marginLeft: "13px",
                          fontSize: "16px",
                          textTransform: "uppercase",
                        }}
                      >
                        Order Summary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Payment option */}

          <div className="Order_summary">
            {paymentChange ? null : (
              <div className="login_order">
                <div className="login_detail">
                  <div className="login_1">
                    <div className="number_box">4</div>
                    <div className="box_header">
                      <p
                        style={{
                          marginLeft: "13px",
                          fontSize: "16px",
                          textTransform: "uppercase",
                        }}
                      >
                        Payment Options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>{paymentChange && <PaymentOption />}</div>
          </div>
        </div>
        <div className="Order_payment">
          {Cart?.length ? <TotalPay /> : null}
        </div>
      </div>
    </>
  );
};

export default Order;

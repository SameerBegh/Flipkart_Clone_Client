import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const loginuser = () => {
    let user = localStorage.getItem("loginUser");
    if (user === null) {
      return "";
    } else {
      return JSON.parse(user);
    }
  };

  const [user, setuser] = useState(loginuser());
  const [wish, setwish] = useState([]);
  const [Cart, setCart] = useState([]);
  const [Save, setSave] = useState([]);
  const [newdata, setnewdata] = useState([]);
  const [OrderAlert, setOrderAlert] = useState(false);

  const [Price, setPrice] = useState({
    totalQuantity: "",
    totalPrice: "",
    totalDiscount: "",
    totalCost: "",
  });

  useEffect(() => {
    localStorage.setItem("loginUser", JSON.stringify(user));
  }, [user]);

  return (
    <DataContext.Provider
      value={{
        user,
        setuser,
        wish,
        setwish,
        Cart,
        setCart,
        Price,
        setPrice,
        Save,
        setSave,
        newdata,
        setnewdata,
        OrderAlert,
        setOrderAlert,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

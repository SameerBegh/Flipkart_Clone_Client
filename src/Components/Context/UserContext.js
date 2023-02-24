import React, { createContext, useState } from "react";

export const UserContextInfo = createContext(null);

//  A/c object
const AccountInfo = {
  login: {
    open: "login",
    title: "Login",
    info: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    open: "signup",
    title: "Looks like you're new here!",
    info: "Sign up with your mobile number to get started",
  },
};

const UserContext = ({ children }) => {
  const [Accounttoggle, setAccounttoggle] = useState(AccountInfo.login);
  const [Open, setOpen] = useState(false);
  return (
    <UserContextInfo.Provider
      value={{
        Accounttoggle,
        setAccounttoggle,
        Open,
        setOpen,
      }}
    >
      {children}
    </UserContextInfo.Provider>
  );
};

export default UserContext;

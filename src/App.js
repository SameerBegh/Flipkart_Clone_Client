import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import Header from "./Components/Header_comp/Header/Header";
import HomeBar from "./Components/Home_nav/HomeBar";
import { Route, Routes } from "react-router-dom";
import Detail from "./Components/Product_detail/Detail";
import MyCart from "./Components/Cart/MyCart";
import Wishlist from "./Components/MyWishlist/Wishlist";
import StaticLeftbar from "./Components/Account/leftBar/StaticLeftbar";
import Account from "./Components/Account/accountProfile/Account";
import Address from "./Components/Account/ManageAddress/Address";
import PancardInfo from "./Components/Account/PanCardInfo/PancardInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import Order from "./Components/Orders/Order";
import DownloadApp from "./Components/Header_comp/nav_More/download";
import Seller from "./Components/Header_comp/Seller/Seller";
import Products from "./Components/Product_detail/Products/Products";
import UserContext from "./Components/Context/UserContext";
import DataProvider from "./Components/Context/DataProvider";

function App() {
  return (
    <DataProvider>
      <UserContext>
        <>
          <Header />
          <Box style={{ marginTop: 56 }}>
            <Routes>
              <Route path="/" exact element={<HomeBar />} />
              <Route path="/product/:id" element={<Detail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<MyCart />} />
              <Route path="/account/" element={<StaticLeftbar />}>
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="profile" element={<Account />} />
                <Route path="address" element={<Address />} />
                <Route path="Pancard Information" element={<PancardInfo />} />
              </Route>
              <Route path="/order" element={<Order />} />
              <Route path="/mobile-app" element={<DownloadApp />} />
              <Route path="/seller" element={<Seller />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Box>
          <ToastContainer style={{ width: "400px" }} />

          <Footer />
        </>
      </UserContext>
    </DataProvider>
  );
}

export default App;

import React, { useContext, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Box, styled } from "@mui/material";
import SliderBox from "./SliderBox/SliderBox";
import { getProducts } from "../../Redux/Action/productAction";
import ProductSlide from "./ProductSlide/ProductSlide";
import OfferSlide from "./ProductSlide/OfferSlide";
import Banners from "../Banners/Banners";
import Banner2 from "../Banners/Banner2";
import Banner3 from "../Banners/Banner3";
import { useDispatch, useSelector } from "react-redux";
import ReverseSlide from "./ProductSlide/ReverseSlide";
import { DataContext } from "../Context/DataProvider";
import { getCart } from "../APIservice/api";

const Nav = styled(Box)`
  background-color: #fff;
`;
const Slide = styled(Box)`
  padding: 20px 10px;
`;
const HomeBar = () => {
  const { Cart, setCart, setPrice, } =
  useContext(DataContext);
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  const getCartItems = useRef();

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo({top:0, left:0, behavior:"smooth"});
  }, [dispatch]);



const Cartlength = Cart?.length

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    getCartItems.current();
  }, [ Cartlength]);

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
 
  getCartItems.current = cartItems

  return (
    <>
      <Nav>
        <Navbar />
      </Nav>
      <Slide>
        <SliderBox />
        <OfferSlide products={products} title="Deal of the Day" timer={true} />
        <Banners />
        <ProductSlide
          products={products}
          title="Best of Electronics"
          timer={false}
        />
        <ReverseSlide
          products={products}
          title="Don't Miss These!"
          timer={false}
        />
        <Banner2 />
        <ProductSlide
          products={products}
          title="Suggested for You"
          timer={false}
        />
        <ReverseSlide products={products} title="Top Selection" timer={false} />
        <Banner3 />
        <ProductSlide
          products={products}
          title="Recently Viewed"
          timer={false}
        />
      </Slide>
    </>
  );
};

export default HomeBar;

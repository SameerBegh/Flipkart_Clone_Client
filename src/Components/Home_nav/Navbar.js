import React from "react";
import { styled, Typography } from "@mui/material";
import "./Navbar.css";

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 550;
  font-family: inherit;
`;

const Navbar = () => {
  const NavItem = [
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      text: "Top Offers",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      text: "Grocery",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
      text: "Mobile",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
      text: "Fashion",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      text: "Electronics",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
      text: "Home",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      text: "Appliances",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      text: "Travel",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      text: "Beauty,Toys & More",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/05d708653beff580.png?q=100",
      text: "Two Wheelers",
    },
  ];

  return (
    <div className="container">
      {NavItem.map((Item, i) => {
        return (
          <div className="Nav_item" key={i}>
            <img src={Item.url} width="64" alt={Item.text} />
            <Text>{Item.text}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

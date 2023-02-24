import React from "react";
import {
  Typography,
  Box,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StarIcon from "@mui/icons-material/Star";

const OfferIcon = styled(LocalOfferIcon)`
  font-size: 17px;
  color: #00cc00;
  margin-right: 10px;
`;
const OfferList = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
`;
const Morelink = styled(Box)`
  margin-left: 3px;
  color: blue;
  cursor: pointer;
`;

const Offer = styled(Box)`
  margin-right: 5px;
  font-weight: 600;
  color: #111;
  font-family: inherit;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  & > td {
    font-size: 14px;
    border: none;
    vertical-align: baseline;
  }
`;
const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const fkassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  return (
    <>
      <Typography sx={{ fontSize: 22, marginTop: "10px" }}>
        {product.title.longTitle}
      </Typography>

      <Typography
        sx={{
          margin: "10px 0px",
          color: "#878787",
          cursor: "pointer",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box component="span" sx={{ marginRight: "10px" }}>
          <Button
            variant="contained"
            sx={{
              padding: "unset",
              backgroundColor: "#388e3c",
              borderRadius: "30px",
              alignItems: "center",
            }}
          >
            {product.star}
            <StarIcon sx={{ fontSize: "18px" }} />
          </Button>
        </Box>
        {product.ratings}
        <Box component="span">
          <img src={fkassured} alt="fk" style={{ width: 77, marginLeft: 10 }} />
        </Box>
      </Typography>

      <Typography>
        <Box
          component="span"
          sx={{
            marginLeft: "10px",
            cursor: "pointer",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          ₹ {product.cost}
        </Box>
        <Box
          component="span"
          sx={{
            marginLeft: "10px",
            cursor: "pointer",
            margin: "0px 10px",
            color: "#878787",
          }}
        >
          <strike>{product.mrp}</strike>
        </Box>
        <Box
          component="span"
          sx={{ marginLeft: "10px", cursor: "pointer", color: "green" }}
        >
          {product.priceDiscount} off
        </Box>
      </Typography>
      <Typography sx={{ marginTop: "10px", fontWeight: 600, color: "#212121" }}>
        Available offers
      </Typography>

      <Box sx={{ fontSize: "34px" }}>
        <OfferList>
          <OfferIcon />
          <Offer component="span">Special Price </Offer>Get extra 8% off (price
          inclusive of cashback/coupon)
          <Morelink component="span"> T&C</Morelink>
        </OfferList>
        <OfferList>
          <OfferIcon /> <Offer component="span"> Bank Offer </Offer>10% off on
          Yes Bank Credit Card and EMI Transactions, up to ₹1,500. On orders of
          ₹10,000 and above<Morelink component="span"> T&C</Morelink>
        </OfferList>
        <OfferList>
          <OfferIcon />
          <Offer component="span"> Bank Offer </Offer> 5% Cashback on Flipkart
          Axis Bank Card<Morelink component="span"> T&C</Morelink>
        </OfferList>
        <OfferList>
          <OfferIcon />
          <Offer component="span"> Bank Offer </Offer> ₹3000 Instant Cashback on
          HDFC Credit card Full Swipe Transactions on orders above ₹7000
          <Morelink component="span"> T&C</Morelink>
        </OfferList>
        <OfferList>
          <OfferIcon />
          <Offer component="span"> No cost EMI ₹5,082/month.</Offer> Standard
          EMI also available<Morelink component="span">View Plans</Morelink>
        </OfferList>
        <OfferList>
          <OfferIcon />
          <Offer component="span"> Partner Offer</Offer> Purchase now & get a
          surprise cashback coupon for January / February 2023
          <Morelink component="span">Know More</Morelink>
        </OfferList>
        <OfferList>
          <OfferIcon />
          <Offer component="span"> Partner Offer</Offer> Buy this product and
          get upto ₹500 off on Flipkart Furniture
          <Morelink component="span">Know More</Morelink>
        </OfferList>
      </Box>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell>Delivery</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()}
              <span style={{ color: "#878787", marginLeft: "5px" }}>|</span>
              {product.cost > 499 ? (
                <>
                  <span style={{ color: "#388e3c" }}> Shipping Fee : </span>
                  <strike style={{ color: "#878787" }}>₹40</strike>
                  <span style={{ color: "#388e3c", marginLeft: "5px" }}>
                    Free
                  </span>
                </>
              ) : (
                <>
                  <span style={{ color: "#388e3c", marginLeft: "5px" }}>
                    Shipping Fee :
                  </span>
                  <span style={{ color: "#878787", marginLeft: "5px" }}>
                    ₹40
                  </span>
                </>
              )}
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell>Warrenty</TableCell>
            <TableCell>{product.warranty}</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell>Seller</TableCell>
            <TableCell>
              <Typography sx={{ color: "blue", cursor: "pointer" }}>
                {product.seller}
              </Typography>
              <ul>
                <li>Cash On Delivery available</li>
                <li>7 Days Replacement Policy</li>
              </ul>
              <Typography sx={{ color: "blue", cursor: "pointer" }}>
                See other sellers
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="img" style={{ width: "300px" }} />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;

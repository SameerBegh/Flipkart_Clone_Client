import React, { useState, useEffect } from "react";
import { InputBase, Box, styled, ListItem, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../Redux/Action/productAction";
import { Link } from "react-router-dom";
import '../Header/header.css'

// const Searchbox = styled(Box)`
//   display: flex;
//   width: 570px;
//   height: 36px;
//   background-color: #fff;
//   margin-left: 12px;
//   border-radius: 2px;
// `;
const Inputfield = styled(InputBase)`
  width: 100%;
  font-size: 15px;
  height: 100%;
  padding: 10px;
  font-family: inherit;
  font-weight: 550;
`;
const SearchList = styled(List)`
  position: absolute;
  margin-top: 35px;
  width: 570px;
  background-color: #fff;
  color: #111;
  border-top: 2px solid #f0f0f0;
`;
const Search = () => {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getsearch = (search) => {
    setsearch(search);
  };

  return (
    <Box className="search">
      1
      <Inputfield
        placeholder="Search for products, brands and more"
        value={search}
        onChange={(e) => getsearch(e.target.value)}
        onClick={() => setsearch("")}
      />
      <SearchIcon
        style={{
          color: "#2874f0",
          cursor: "pointer",
          margin: "5px 10px",
          fontSize: "26px",
        }}
      />
      {search && (
        <SearchList>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((product) => {
              return (
                <ListItem sx={{ "&:hover": { color: "#2478f0" } }}>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setsearch("")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              );
            })}
        </SearchList>
      )}
    </Box>
  );
};

export default Search;

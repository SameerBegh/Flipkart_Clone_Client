import axios from "axios";
import * as actionType from "../Constant/productConstant";
// Redux

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionType.Get_product_Success, payload: data });
  } catch (error) {
    dispatch({ type: actionType.Get_product_Fail, value: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.Get_product_Detail_Request });

    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.Get_product_Detail_Success, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.Get_product_Detail_Fail,
      value: error.message,
    });
  }
};



export const updateproduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.Get_product_UPDATE, payload: id });
  } catch (error) {
    dispatch({
      type: actionType.Get_product_UPDATE_fail,
      value: error.message,
    });
  }
};

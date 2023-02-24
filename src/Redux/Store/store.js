import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  getProductsreducer,
  getProductDetailsreducer,
} from "../Reducer/productreducer";


const reducer = combineReducers({
  getProducts: getProductsreducer,
  getProductDetails: getProductDetailsreducer,
});

const midleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;

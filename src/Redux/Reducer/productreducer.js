import * as actionType from"../Constant/productConstant";
export const getProductsreducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.Get_product_Success:
      return { products: action.payload };

    case actionType.Get_product_Fail:
      return { error: action.payload };

    case actionType.Get_product_UPDATE:
      let item = action.payload;

      const newProduct = state.products.map((data) => {
        if (data._id === item._id) {
          return {
            item,
          };
        } else {
          return data;
        }
      });
      return { ...state, products: newProduct };

    default:
      return state;
  }
};

export const getProductDetailsreducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.Get_product_Detail_Request:
      return { loading: true };
    case actionType.Get_product_Detail_Success:
      return { loading: false, product: action.payload };
    case actionType.Get_product_Detail_Fail:
      return { loading: false, error: action.payload };
    case actionType.Get_product_Detail_Reset:
      return { product: {} };

    default:
      return state;
  }
};

import { GET_DATA_PRODUCT, GET_PRODUCT_BY_ID, GET_FAVORTE_PRODUCTS } from "../types/user";

let initialState = {
  products: [],
  product: {},
  favorites: [],
};

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_DATA_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
      };
    case GET_FAVORTE_PRODUCTS:
      return {
        ...state,
        favorites: payload,
      };
    default:
      return state;
  }
};

export default productReducer;

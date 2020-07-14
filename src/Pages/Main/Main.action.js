import axios from "axios";
export const PRODUCTLIST_REQUEST = "PRODUCTLIST_REQUEST";
export const PRODUCTLIST_SUCCESS = "PRODUCTLIST_SUCCESS";
export const PRODUCTLIST_FAIL = "PRODUCTLIST_FAIL";

export function productsListRequestAction() {
  return {
    type: PRODUCTLIST_REQUEST,
  };
}
export function productsListSuccessAction(data) {
  return {
    type: PRODUCTLIST_SUCCESS,
    data,
  };
}
export function productsListFailAction(err) {
  return {
    type: PRODUCTLIST_FAIL,
    err,
  };
}
export function getProductList() {
  return async (dispatch) => {
    dispatch(productsListRequestAction());
    try {
      const resutl = await axios({
        method: "GET",
        url: "https://min-shop.herokuapp.com/rest/product",
      });
      dispatch(productsListSuccessAction(resutl.data.data));
      
    } catch (err) {
      dispatch(productsListFailAction(err));
    }
  };
}

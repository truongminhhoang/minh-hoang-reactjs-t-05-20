import * as actionTypes from "./ProductItem.action";

const initState = {
  productInCart: [],
  loading: false,
  error: null,
};
function ProductInCartReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
      const newCart = [...state.productInCart];
      const index = newCart.findIndex(
        (product) => product.id === action.product.id
      );
      if (index >= 0) {
        newCart[index] = {
          ...state.productInCart,
          quantity: newCart[index].quantity + 1,
        };
      } else {
        newCart.push({
          id: newCart.id,
        });
      }
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}

export default ProductInCartReducer;

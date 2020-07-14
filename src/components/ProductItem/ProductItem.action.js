export const ADD_PRODUCT_TO_CART_REQUEST = "ADD_PRODUCT_TO_CART_REQUEST";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_FAIL = "ADD_PRODUCT_TO_CART_FAIL";


export function addProductToCartSuccesstAction(cartProduct) {
    return {
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        data: cartProduct
    };
}

export function addProductToCart(product) {
    return (dispatch) => {
        dispatch(addProductToCartSuccesstAction(product));

    };

}
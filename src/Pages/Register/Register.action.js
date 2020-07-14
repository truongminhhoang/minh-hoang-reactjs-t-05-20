import axios from "axios";
import swal from "sweetalert";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FULLNAME = " REGISTER_FULLNAME";
export const REGISTER_FAIL = "REGISTER_FAIL";

export function registerRequestAction() {
  return {
    type: REGISTER_REQUEST,
  };
}
export function registerSuccessAction(token) {
  return {
    type: REGISTER_SUCCESS,
    token,
  };
}
export function registerGetFullNameAction(name) {
  return {
    type: REGISTER_FULLNAME,
    name,
  };
}
export function registerFailAction(err) {
  return {
    type: REGISTER_FAIL,
    err,
  };
}
export function registerAccountAction(data, history) {
  return async (dispatch) => {
    dispatch(registerRequestAction());
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signUp",
        // luon luon la data
        data,
      });

      dispatch(registerSuccessAction(result));
      dispatch(registerGetFullNameAction(data.username));
      history.push("./login");
      swal({
        title: "Register successfully",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
    } catch (err) {
      console.log(err.response.data.message);

      dispatch(registerFailAction(err.response.data.message));
    }
  };
}

import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_GETEMAIL = "LOGIN_GETEMAIL";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST,
  };
}
export function loginSuccessAction(token, name) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}
export function loginGetInfoAccAction(email) {
  return {
    type: LOGIN_GETEMAIL,
    email,
  };
}
export function loginFailAction(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}
export default function loginAccountAction(data, history) {
  return async (dispatch) => {
    dispatch(loginRequestAction());
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signIn",
        data,
      });
      localStorage.setItem("token", result.data.accessToken);
      dispatch(loginSuccessAction(result.data.accessToken));
      dispatch(loginGetInfoAccAction(data.email));
      if (history.location.state.from.pathname) {
        history.push(history.location.state.from.pathname);
        
      }
     
    } catch (err) {
      console.log("err", err.response.message);

      dispatch(loginFailAction(err.response.message));
    }
  };
}

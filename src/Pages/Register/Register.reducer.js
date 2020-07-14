import * as actionTypes from "./Register.action";
const initialState = {
  name: null,
  data: null,
  loading: false,
  error: null,
};

function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.token,
      };
    case actionTypes.REGISTER_FULLNAME:
      return {
        ...state,
        name: action.name,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.err,
      };

    default:
      return state;
  }
}
export default RegisterReducer;

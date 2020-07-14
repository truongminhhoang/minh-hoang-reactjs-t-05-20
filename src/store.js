import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productsReducer from "./Pages/Main/Main.reducer";
import loginReducer from "./Pages/Login/Login.reducer";
import productDetailReducer from "./Pages/ProductDetail/ProductDetai.reducer";
import registerReducer from "./Pages/Register/Register.reducer";
import productInCartReducer from "./components/ProductItem/ProductItem.reducer"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// const composedEnhancers = compose(applyMiddleware(...[thunk]),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
  combineReducers({
    productsReducer,
    loginReducer,
    productDetailReducer,
    registerReducer,
    productInCartReducer
  }),
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

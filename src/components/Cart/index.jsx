import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Cart(props) {
  console.log(props)
  return (
    <li className="d-shop-cart">
    
        <i className="fas fa-shopping-cart" />
        <span className="cart-count">{props.data.length}</span>
    
      <ul className="minicart">
        {props.data.map((element) => (
          <li key={element.id}>
            <div className="cart-img">
              <a href="#">
                <img src={element.imageURL} alt="" />
              </a>
            </div>
            <div className="cart-content">
              <h3>
                <a href="#">{element.name}</a>
              </h3>
              <div className="cart-price">
                <span className="new">Price: {element.price}</span>
                <span className="ml-4">
                  <del>{element.priceMax}</del>
                </span>
                <span className="ml-5">x{element.quantity}</span>
              </div>
            </div>
            <div className="del-icon">
              <a>
                <i
                  className="far fa-trash-alt"
                  onClick={() => {
                    props.onDelete(element.id);
                  }}
                />
              </a>
            </div>
          </li>
        ))}

        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            <span className="f-right">
              {props.data.reduce((totalPrice, product) => {
                return (totalPrice += product.price * product.quantity);
              }, 0)}
            </span>
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <Link to='/shopping-cart'>Shopping Cart</Link>
            <a className="red-color" href="#">
              Checkout
            </a>
          </div>
        </li>
      </ul>
    </li>
  );
}
const mapStateToProps = (state) => {
  return {
    productCart: state.productInCartReducer.productInCart,
  };
};
export default connect(mapStateToProps, null)(Cart);

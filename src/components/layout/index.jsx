import React from "react";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const logOut = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

function Layout(props) {
  return (
    <>
      <header>
        <div id="header-sticky" className="header-area box-90 sticky-header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                <div className="logo">
                  <Link to={`/`}>
                    <img src="/assets/logo_shop.png" alt="" />
                  </Link>
                </div>
                <div className="category-menu">
                  <h4>Category</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Table lamp
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Furniture
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Chair
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Men
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Women
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Cloth
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Trend
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                <div className="main-menu text-center">
                  <nav id="mobile-menu" style={{ display: "block" }}>
                    <ul>
                      <li>
                        <Link to={`/`}>Home</Link>
                      </li>
                      <li>
                        <Link to={``}>Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to={`/product-detail`}>Product Detail</Link>
                          </li>
                          <li>
                            <Link to={`/login`}>login</Link>
                          </li>
                          <li>
                            <Link to={`/register`}>Register</Link>
                          </li>
                          <li>
                            <Link to={`/cart`}>Shoping Cart</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                <div className="header-right f-right">
                  <ul>
                    {props.getEmail ? (
                      <li className="login-btn">
                        {props.getEmail}
                        <ul className="subaccount">
                          <li>
                            <a onClick={logOut}>Log Out</a>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li className="login-btn">
                        <Link to={`/login`}>
                          <i className="far fa-user" />
                        </Link>
                      </li>
                    )}

                    <Cart
                      data={props.productsInCart}
                      onDelete={props.onDelete}
                    />
                  </ul>
                </div>
              </div>
              <div className="col-12 d-xl-none">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Body */}
      {props.children}

      <footer className="footer-area pl-100 pr-100">
        <div
          className="footer-area box-90 pt-100 pb-60"
          data-background="img/bg/footer.jpg"
          style={{ backgroundImage: 'url("img/bg/footer.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-6 ">
                <div className="footer-widget mb-40 pr-70">
                  <div className="footer-logo">
                    <a href="#">
                      <img src="./assets/logo_shop.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore mag na
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="footer-time d-flex mt-30">
                    <div className="time-icon">
                      <img src="./assets/time.png" alt="" />
                    </div>
                    <div className="time-text">
                      <span>Got Questions ? Call us 24/7!</span>
                      <h2>(0600) 874 548</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3">
                <div className="footer-widget mb-40">
                  <h3>Social Media</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li>
                      <a href="twitter.com">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Behance</a>
                    </li>
                    <li>
                      <a href="#"> Dribbble</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                    <li>
                      <a href="www.youtube.com">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
                <div className="footer-widget pl-50 mb-40">
                  <h3>Location</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <a href="#">Tokyo</a>
                    </li>
                    <li>
                      <a href="#">Dhaka</a>
                    </li>
                    <li>
                      <a href="#">Chittagong</a>
                    </li>
                    <li>
                      <a href="#">China</a>
                    </li>
                    <li>
                      <a href="#">Japan</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3">
                <div className="footer-widget mb-40">
                  <h3>About</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#"> Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Wholesale</a>
                    </li>
                    <li>
                      <a href="#">Direction</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    getEmail: state.loginReducer.email,
  };
};
export default connect(mapStateToProps)(Layout);
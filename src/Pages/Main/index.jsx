import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "../../components/content";
import Layout from "../../components/layout";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/Sidebar";
import { ThemeContext } from "../../index";
import data from "../../product.json";
import LoadingWaitGetData from "../LoadingWaitGetData";
import { getProductList } from "./Main.action";
import BackToTop from "react-back-to-top-button";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import "./Main.css";

function App(props) {
  const value = useContext(ThemeContext);

  // state products
  const [productList, setProductsList] = useState([]);
  //add cart
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    if (props.productsList) {
      setProductsList(props.productsList);
    }
  }, [props.productsList]);

  useEffect(() => {
    props.getProductList();
  }, []);

  const AddProductToCart = (newProduct) => {
    let productCart = {
      id: newProduct.id,
      name: newProduct.name,
      type: newProduct.type,
      price: newProduct.price,
      imageURL: newProduct.imageURL,
      quantity: 1,
    };
    let productUpdate = [...productsInCart];
    let index = productUpdate.findIndex((pd) => pd.id === productCart.id);
    if (index !== -1) {
      productUpdate[index].quantity += 1;
    } else {
      productUpdate.push(productCart);
    }
    setProductsInCart(productUpdate);
  };
  const onHightToLow = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => product2.price - product1.price);
    console.log(newProducts);

    setProductsList(newProducts);
  };
  const onLowToHigh = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => {
      return product1.price - product2.price;
    });
    console.log(newProducts);

    setProductsList(newProducts);
  };
  const onSortAZ = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => {
      return product1.name
        .toLowerCase()
        .localeCompare(product2.name.toLowerCase());
    });
    console.log(newProducts);

    setProductsList([...newProducts]);
  };
  const onSortZA = () => {
    let newProducts = [...productList];
    newProducts.sort((product1, product2) => {
      return product2.name
        .toLowerCase()
        .localeCompare(product1.name.toLowerCase());
    });
    console.log(newProducts);

    setProductsList(newProducts);
  };
  const onDelete = (productId) => {
    const deleteProduct = [...productsInCart].filter(
      (product) => product.id !== productId
    );
    setProductsInCart(deleteProduct);
  };
  const onSearch = (value) => {

    const newProducts = [...data.data].filter((product) => {
      const regex = new RegExp(`.*${value}*.`,'i');
      return product.name.match(regex);
    });
    setProductsList(newProducts);
  };
  // chat box
  useEffect(() => {
    addResponseMessage("Welcome to Light Shop");
    addResponseMessage("This feature has not developed yet :)");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  return (
    <Layout productsInCart={productsInCart} onDelete={onDelete}>
      <main>
        <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
              <BackToTop
                showOnScrollUp
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
              >
                <img className="back-to-top" src="./assets/up-arrow.png" />
              </BackToTop>
              <Widget
                handleNewUserMessage={handleNewUserMessage}
                handleNewUserMessage={handleNewUserMessage}
                title="Client consultant"
                subtitle="Customer support"
              />
              <Content count={productList.length}>
                {productList.map((elm) => {
                  return (
                    <ProductItem
                      {...elm}
                      imageURL={elm.image}
                      onAddProduct={AddProductToCart}
                    />
                  );
                })}
                <LoadingWaitGetData />
              </Content>
              <SideBar
                onSort={onHightToLow}
                onSortLow={onLowToHigh}
                onSortAZ={onSortAZ}
                onSortZa={onSortZA}
                onSearch={onSearch}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    productsList: state.productsReducer.products,
  };
};
const mapDispatchToProps = {
  getProductList,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

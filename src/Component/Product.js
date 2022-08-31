import React, { Component } from "react";
import Header from "./HomePage/Header";
import Footer from "./HomePage/Footer";
import Line from "./Line/Line";
import InforProduct from "./Product/InforProduct";
import OneProduct from "./Product/OneProduct";
import ModalProduct from "./Product/ModalProduct";
import Bonus from "./Product/Bonus";

class Product extends Component {
  render() {
    return (
      <div>
        <Header />
        <Line />
        <p>{"hello1"}</p>
        <div>
          <OneProduct />
          <InforProduct />
          <ModalProduct />
          <Bonus />
        </div>
        <div className="footer_pro" style={{ marginTop: "160%" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Product;

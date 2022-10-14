import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>product info</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>*</p>
        </div>
      </div>

      <img src="https://m.media-amazon.com/images/I/31cseZ+N-8L._AC_SY230_.jpg" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

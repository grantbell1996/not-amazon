import React from "react";
import "./Home.css";
import amazonBanner from "../images/amazon_banner.png";
import Product from "../Product/Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://m.media-amazon.com/images/I/71yDTwYjJAL._SX3000_.jpg"
          />

          <div className="home_row">
            <Product 
            title='Amazon Echo' 
            price={19.99} 
            image="https://m.media-amazon.com/images/I/31cseZ+N-8L._AC_SY230_.jpg" 
            rating={5}/>
            <Product />
          </div>

          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home_row"></div>
          <Product />
        
        </div>
      </div>
    </>
  );
}
export default Home;

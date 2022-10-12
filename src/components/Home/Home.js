import React from 'react'
import "./Home.css"
import amazonBanner from "../images/amazon_banner.png"
import Product from '../Product/Product'

function Home() {
  return (
    <>
    <div className='home'>
        <div className='home_container'>
          <img className='home_image' src={amazonBanner}/>
          <div className='home_row'>
            <Product />
            <Product />
          </div>
          <div className='home_row'>

          </div>
          <div className='home_row'>

          </div>
        </div>
    </div>
    </>
  )
}
export default Home
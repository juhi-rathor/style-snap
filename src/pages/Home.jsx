// React
import React from "react";

// Product Component
import Product from "../pages/Product";

// About Component
import About from "../pages/About";

// Home Component


const Home = () => {
  return (
    <>
      <div className='container-fluid p-0'>
        <div className='row background-1'>
          <div className='col d-flex justify-content-center align-items-start flex-column px-5 custom-flex-1'>
            <div className='text-container'>
              <h1>
                <span className="heading-1">10% off</span>
                <br />
                On Top Brands
              </h1>
              <p className="para-1">
                If you would like to experience the best of online shopping for
                men, women and kids in India, you are at the right place. Style
                Snap is the ultimate destination for fashion and lifestyle, being
                host to a wide array of merchandise including clothing,
                footwear,and more.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <About />
        <Product />
      </div> 
    </>
  )
}

export default Home

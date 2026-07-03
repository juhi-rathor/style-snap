// React and Hooks
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// Products Component
const Product = () => {

  let navigate = useNavigate()
  // State Variables
  const [products, setProducts] = useState([]);


  // Fetch Products from API
  const getProducts = async () => {

    // Try Block
    try {
      const product = await fetch("https://fakestoreapi.com/products");
      let response = await product.json();
      console.log(response);
      setProducts(response);
    }
    // Catch Block
     catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row background-2">
          <h1 className="heading-2 mt-4 mb-4 text-center">All Products</h1>
          {products.map((value) => {
            return (
              <div
              className="col-lg-3 gap-2 d-flex justify-content-center align-items-center"
              key={value.id}
              >
                <div className="card product-card mb-4">
                  <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <img
                      src={value.image}
                      alt="product"
                      height="150px"
                      width="70%"
                    />
                    <h5 className="card-title">{value.category}</h5>
                    <p className="card-price">{value.price}</p>
                    <div className="d-flex flex-column">
                      <button className="seemorebtn" onClick={() => navigate(`/product/${value.id}`)}>See More</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Product

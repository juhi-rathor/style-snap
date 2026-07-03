import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const singleData = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const res = await data.json()
        setProduct(res)
      } catch (err) {
        console.log(err)
      }
    }

    if (id) singleData()
  }, [id])

  if (!product) {
    return (
      <div className="container mt-5">
        <p>Loading product details...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <div>
                    <img src={product.image} height="300px" width="300px" alt='product'/>
                  </div>
                  <div>
                    <h3>{product.title}</h3>
                    <h5>{product.description}</h5>
                    <h5>Category: {product.category}</h5>
                    <h5>Price: {product.price}</h5>
                    <button className="btn btn-primary m-3">Buy Now</button>
                    <button className="btn btn-warning">Add to Cart </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>

    </div>
  )
}

export default SingleProduct

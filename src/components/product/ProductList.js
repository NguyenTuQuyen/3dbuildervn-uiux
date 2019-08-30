import React from 'react'
import ProductSummary from './ProductSummary'
import { Link } from 'react-router-dom'

const ProductList = ({ products }) => {
  return (
    <div className="product-container" >
      <h3>Products</h3>
      {products && products.map(product => {
        return (
          <Link to={'/product/' + product.id} key={product.id}>
            <ProductSummary product={product} />
          </Link>
        )
      })}
    </div>
  )
}
export default ProductList
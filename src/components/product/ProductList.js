import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
  return (
    <div className="product-container" >
      <h3>Products</h3>
      {products && products.map(product => {
        return(
          <ProductItem product={product} key={product.id}/>
        )
      })}
    </div>
  )
}
export default ProductList
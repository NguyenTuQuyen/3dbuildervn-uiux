import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const ProductItem = ({ product }) => {
  return (
    <div className="product-list ">
      <div className="product-item col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card-item">
          <img className="product-image" src='../../images/Item1.jpg' alt={product.title} />
          <span className="product-title">{product.title}</span>
          <span className="product-price">$ {product.price}</span>
          <button to="/" className="btn btn-primary" onClick={() => { this.handleAddProduct(product.id) }}><FontAwesomeIcon icon={faPlus} />Add</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem

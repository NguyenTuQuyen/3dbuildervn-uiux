import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = (props) => {
  const { product } = props
  if (product) {
    return (
      <div>
        <div className="product-item col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card-item">
          <img className="product-image" src='../../images/Item1.jpg' alt={product.title} />
          <span className="product-title">{product.title}</span>
          <span className="product-price">$ {product.price}</span>
          <span className="product-description">{product.description}</span>
          <button to="/" className="btn btn-primary" onClick={() => { this.handleAddProduct(product.id) }}><FontAwesomeIcon icon={faPlus} />Add</button>
        </div>
      </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading product...</p>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null
  return {
    product: product
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'products'
  }])
)(ProductDetail) 
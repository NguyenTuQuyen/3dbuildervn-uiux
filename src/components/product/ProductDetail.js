import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import CreateComment from './CreateComment'
import { addToCart } from '../../store/actions/cartAction';

class ProductDetail extends Component {
  handleAddProduct = (product) => {
    this.props.addToCart(product);
  }
  render() {
    const { product } = this.props
    if (product) {
      return (
        <div>
          <div className="product-item col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="card-item">
              <img className="product-image" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
              <span className="product-title">{product.title}</span>
              <span className="product-price">$ {product.price}</span>
              <span className="product-description">{product.description}</span>
              <button to="/" className="btn btn-primary btn-add-product" onClick={() => { this.handleAddProduct(product) }}><FontAwesomeIcon icon={faPlus} />Add</button>
            </div>
            <CreateComment />
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
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => { dispatch(addToCart(product)) }
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'products'
  }])
)(ProductDetail) 

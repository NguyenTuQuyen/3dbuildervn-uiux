import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class Product extends Component {
  handleAddProduct = (id) => {
    this.props.addToCart(id)
  }
  render() {
    const products = this.props.products

    return (
      <div className="product-container" >
        <h3>Products</h3>
        <div className="product-list ">
          {
            products && products.map(item => {
              return (
                <div className="product-item col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <div className="card-item">
                    <img className="product-image" src={item.img} alt={item.title} />
                    <span className="product-title">{item.title}</span>
                    <span className="product-price">$ {item.price}</span>
                    <button to="/" className="btn btn-primary" onClick={() => { this.handleAddProduct(item.id) }}><FontAwesomeIcon icon={faPlus} />Add</button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
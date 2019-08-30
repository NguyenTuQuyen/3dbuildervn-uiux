import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToCart } from '../../store/actions/cartAction';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'

class ProductSummary extends Component {
  handleAddProduct = (id) => {
    this.props.addToCart(id); 
  }
  render() {
    const product = this.props.product
    return (
      <div className="product-list ">
        <div className="product-item col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="card-item">
            <img className="product-image" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
            <span className="product-title">{product.title}</span>
            <span className="product-price">$ {product.price}</span>
            <button to="/" className="btn btn-primary" onClick={() => { this.handleAddProduct(product.id) }}><FontAwesomeIcon icon={faPlus} />Add</button>
          </div>
        </div>
      </div>
    )
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id)=>{dispatch(addToCart(id))}
  }  
}
export default connect(null,mapDispatchToProps)(ProductSummary)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
class ProductSummary extends Component {
  render() {
    const product = this.props.product
    return (
      <div className="card-item ">
        <Link to={'/product/' + product.id} key={product.id} className="detail-group">
          <div className="product-item">
            <img className="product-image" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
            <span className="product-title">{product.title}</span>
            <div className="price-box">
              <div className="price-sale">
                <h5 className="product-price"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></h5>
                <span>-20%</span>
              </div>
              <span className="price-normal"><CurrencyFormat value={parseInt(product.price) + 500000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
            </div>
            <div className="star-box">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon className="star-last" icon={faStar} />
              <span>5 nhận xét </span>
            </div>
          </div>
        </Link>
      </div>

    )
  }
}
export default ProductSummary

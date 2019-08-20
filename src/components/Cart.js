import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends Component {
  render() {
    let addedItems = this.props.products.length ?
      (
        this.props.items.map(item => {
          return (
            <li className="product-item" key={item.id}>
              <div className="card-item">
                <img className="product-image" src={item.img} alt={item.title} />
                <span className="product-title">{item.title}</span>
                <span className="product-desc">{item.desc}</span>
                <span className="product-price">$ {item.price}</span>
                <span className="product-quantity">{item.quantity}</span>
              </div>
            </li>
          )
        })
      ) : (
        <p>Không có sản phẩm nào trong giỏ hàng</p>
      )
    return (
      <div className="cart-container">
        <div className="cart">
          <h5>Bạn đã chọn các sản phẩm:</h5>
          <ul className="cart-collection">
            {addedItems}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.addedItems
  }
}
export default connect(mapStateToProps)(Cart)
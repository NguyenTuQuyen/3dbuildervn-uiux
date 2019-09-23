import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addQuantity, subtractQuantity, removeItem } from '../../store/actions/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Cart extends Component {
  handleAddQuantity = (id) => {
    this.props.addQuantity(id)
  }
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }
  handleRemoveProduct = (id) => {
    this.props.removeItem(id)
  }
  render() {
    console.log(this.props.products);
    
    let addedItems = this.props.products.length ?
      (
        this.props.products.map(item => {
          return (
            <li className="product-item" key={item.id}>
              <div className="card-item">
                <img className="product-image" src={item.img} alt={item.title} />
                <span className="product-title">{item.title}</span>
                <span className="product-desc">{item.desc}</span>
                <span className="product-price">$ {item.price}</span>
                <span className="product-quantity">{item.quantity}</span>
                <div className="add-remove">
                  <Link to="/cart"><FontAwesomeIcon icon={faArrowUp} onClick={() => { this.handleAddQuantity(item.id) }} /></Link>
                  <Link to="/cart"><FontAwesomeIcon icon={faArrowDown} onClick={() => { this.handleSubtractQuantity(item.id) }} /></Link>
                </div>
                <div className="btn-remove-product btn btn-danger" onClick={() => { this.handleRemoveProduct(item.id) }}>Xóa</div>
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
        <div className="cart-total">
          <h5>Tổng tiền: {this.props.total}</h5>

          {this.props.total !== 0 ? (
            <span>Phí ship: 15 $ <h5>Tổng tiền trả: {this.props.total + 15}</h5></span>
          ) : (
              <span />
            )}

        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.cart.addedItems,
    total: state.cart.total
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
    removeItem: (id) => { dispatch(removeItem(id)) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addQuantity, subtractQuantity, removeItem } from '../../store/actions/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Subcribe from '../layout/Subcribe'


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
    console.log(this.props.products.length);

    // let addedItems = this.props.products.length ?
    //   (
    let addedItems = (this.props.products.map(item => {
      return (
        <div className="added-item" key={item.id}>
          <img className="added-item-image" src="https://3dbuilder.vn/images/home-var-2-650x495.jpg" alt={item.title} />
          <div className="added-item-detail-price">
            <div className="added-item-detail">
              <div className="added-item-title">{item.title}</div>
              <div className="added-item-supplier">Cung cấp bởi <span style={{ color: "var(--primary)" }}>{item.supplier}</span></div>
              <div className="added-item-edit-group">
                <div className="btn-remove-product" style={{ color: "var(--primary)" }} onClick={() => { this.handleRemoveProduct(item.id) }}>Xóa</div>
                <span style={{ color: "var(--primary)" }} >Mua sau</span>
              </div>
            </div>
            <div className="added-item-price">
              <span className="added-desc">{item.desc}</span>
              <span className="added-item-price">$ {item.price}</span>
              <span className="added-item-quantity">{item.quantity}</span>
              <div className="add-item-remove">
                <Link to="/cart"><FontAwesomeIcon icon={faArrowUp} onClick={() => { this.handleAddQuantity(item.id) }} /></Link>
                <Link to="/cart"><FontAwesomeIcon icon={faArrowDown} onClick={() => { this.handleSubtractQuantity(item.id) }} /></Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
    )
    // ) : (
    //   <p>Không có sản phẩm nào trong giỏ hàng</p>
    // )
    return (
      <div className="cart-container">
        <div className="cart-centered">
          <div className="cart-content">
            <div className="cart-list-group">
              <div className="cart-title">
                <h4>Giỏ hàng</h4> <span>({this.props.products.length} sản phẩm)</span>
              </div>
              <div className="cart-list">
                {addedItems}
              </div>
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
        </div>
        <Subcribe />
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addQuantity, subtractQuantity, removeItem } from '../../store/actions/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Subcribe from '../layout/Subcribe'
import CurrencyFormat from 'react-currency-format';
import {BreadcrumbCart} from '../layout/Breadcrumb'

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

    let addedItems = this.props.products.length ?
      (this.props.products.map(item => {
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
              <div className="added-item-price-box">
                <div className="added-item-price">
                  <span className="added-item-price-sale"><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                  <div className="price-normal-group">
                    <span className="price-normal"><CurrencyFormat value={parseInt(item.price) + 500000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                    <span>-20%</span>
                  </div>
                </div>
                <div className="added-item-quantity-group">
                  <Link to="/cart"><FontAwesomeIcon icon={faPlus} onClick={() => { this.handleAddQuantity(item.id) }} /></Link>
                  <span className="added-item-quantity">{item.quantity}</span>
                  <Link to="/cart"><FontAwesomeIcon icon={faMinus} onClick={() => { this.handleSubtractQuantity(item.id) }} /></Link>
                </div>
              </div>
            </div>
          </div>
        )
      })
      ) : (
        <p>Không có sản phẩm nào trong giỏ hàng</p>
      )
    return (
      <div className="cart-container">
        <div className="cart-centered">
          <BreadcrumbCart />
          <div className="cart-content">
            <div className="cart-list-group">
              <div className="cart-title">
                <h4>Giỏ hàng</h4> <span>({this.props.products.length} sản phẩm)</span>
              </div>
              <div className="cart-list">
                {addedItems}
              </div>
            </div>
            <div className="cart-total-box">
              <div className="cart-total">
                <div className="user-info">
                  <div className="user-info-edit-group">
                    <span>Thông tin giao hàng</span>
                    <button>Chỉnh sửa</button>
                  </div>
                  <span><b>Lê Văn Chiêu</b></span>
                  <span>421 Tái Ông Mất Ngựa, P12, Q3, HCM</span>
                  <span>Điện thoại: 0368636145</span>
                  <div className="predict-shipping">Dự kiến giao hàng: 2/10/2019</div>
                </div>
                <div className="total-shipping">
                  <div className="total-no-shipping">
                    <span>Tạm tính:</span>
                    <span><CurrencyFormat value={this.props.total} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                  </div>
                  <div className="total-shipping-fee">
                    <span>Phí vận chuyển:</span>
                    <span><CurrencyFormat value={15000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                  </div>
                </div>
                <div className="grand-total">
                  <span>Thành tiền:</span>
                  {this.props.total !== 0 ? (
                    <div className="grand-total-group">
                      <span><CurrencyFormat value={parseInt(this.props.total) + 15000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                      <span>Đã bao gồm VAT nếu có</span>
                    </div>
                  ) : (
                      <span>0 <span>&#8363;</span></span>
                    )}
                </div>
              </div>
              <div>
                <Link to="/checkout">
                <button className="btn btn-primary btn-checkout">Thanh toán</button>
                </Link>
              </div>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addQuantity, subtractQuantity, removeItem } from '../../store/actions/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Subcribe from '../layout/Subcribe'
import CurrencyFormat from 'react-currency-format';
import { BreadcrumbCart } from '../layout/Breadcrumb'
import {withRouter} from 'react-router-dom';

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
  handleCheckout = () => {
    console.log(this.props.products.length);
    if (this.props.products.length === 0) {
      alert("Bạn chưa thêm sản phẩm nào vào giỏ hàng!")
    }else{
      return this.props.history.push('/checkout')
    }
  }
  render() {
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
                  <div className="button-remove-product" style={{ color: "var(--primary)" }} onClick={() => { this.handleRemoveProduct(item.id) }}>Xóa</div>
                  <span style={{ color: "var(--primary)" }} >Mua sau</span>
                </div>
              </div>
              <div className="added-item-price-box">
                <div className="added-item-price">
                  <span className="added-item-price-sale"><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                  <div className="price-normal-group">
                    <span className="price-normal"><CurrencyFormat value={parseInt(item.price) + 500000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                    <span >-20%</span>
                  </div>
                </div>
                <div className="added-item-quantity-group">
                  <div className="added-item-quantity-box">
                    <Link to="/cart"><FontAwesomeIcon icon={faPlus} onClick={() => { this.handleAddQuantity(item.id) }} /></Link>
                    <span className="added-item-quantity">{item.quantity}</span>
                    <Link to="/cart"><FontAwesomeIcon icon={faMinus} onClick={() => { this.handleSubtractQuantity(item.id) }} /></Link>
                  </div>
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
                <span className="sub-title">Giỏ hàng</span> <span className="cart-product-count">({this.props.products.length} sản phẩm)</span>
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
                    <button className="button-unfill">Chỉnh sửa</button>
                  </div>
                  <span><b>Lê Văn Chiêu</b></span>
                  <span className="user-address">421 Tái Ông Mất Ngựa, P12, Q3, HCM</span>
                  <span className="user-phone">Điện thoại: 0368636145</span>
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
                  <span className="grand-total-title">Thành tiền:</span>
                  {this.props.total !== 0 ? (
                    <div className="grand-total-group">
                      <h5 style={{ color: "red" }}><CurrencyFormat value={parseInt(this.props.total) + 15000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></h5>
                      <div className="grand-total-note">(Đã bao gồm VAT nếu có)</div>
                    </div>
                  ) : (
                      <span>0 <span>&#8363;</span></span>
                    )}
                </div>
              </div>
              <div>
                <button className="button-default" onClick={() => { this.handleCheckout() }}>Thanh toán</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))
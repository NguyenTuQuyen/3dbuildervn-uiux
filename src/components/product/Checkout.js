import React, { Component } from 'react'
import { connect } from 'react-redux'
import Subcribe from '../layout/Subcribe'
import CurrencyFormat from 'react-currency-format';
import { BreadcrumbCheckout } from '../layout/Breadcrumb'
import cash from '../../images/payment/cash.png'
import visa from '../../images/payment/visa.png'
import internetbk from '../../images/payment/internetbk.png'
import momo from '../../images/payment/momo.png'

class Checkout extends Component {
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
              <div className="added-item-title"><span>{item.quantity} x </span><span style={{ color: "var(--primary)" }}>{item.title}</span></div>
              <span className="added-item-price-sale"><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} &#8363;</div>} /></span>
            </div>
          </div>
        )
      })
      ) : (
        <p><b>Không có sản phẩm nào trong giỏ hàng</b></p>
      )
    return (
      <div className="checkout-container">
        <div className="cart-centered">
          <BreadcrumbCheckout />
          <div className="cart-list-group">
            <h4>Chọn phương thức thanh toán</h4>
          </div>
          <div className="cart-content">
            <div className="cart-list-group">
              <div className="payment-item">
                <div className="pay-method-list">
                  <img className="pay-method-image" src={cash} alt="cash" />
                  <div className="pay-method-detail">
                    <span>Thanh toán tiền mặt khi nhận hàng</span>
                    <span className="pay-method-description">Được xem hàng trước</span>
                  </div>
                </div>
                <div className="pay-method-cb-box">
                  <input className="pay-methor-cb" type="radio" name="pay-method" value="cash" />
                </div>
              </div>
              <div className="payment-item">
                <div className="pay-method-list">
                  <img className="pay-method-image" src={internetbk} alt="internet banking" />
                  <div className="pay-method-detail">
                    <span>Thẻ ATM nội địa/Internet Banking</span>
                    <span className="pay-method-description">Miễn phí thanh toán</span>
                  </div>
                </div>
                <div className="pay-method-cb-box">
                  <input className="pay-methor-cb" type="radio" name="pay-method" value="internetbk" />
                </div>
              </div>
              <div className="payment-item">
                <div className="pay-method-list">
                  <img className="pay-method-image" src={visa} alt="internet banking" />
                  <div className="pay-method-detail">
                    <span>Thanh toán bằng thẻ quốc tế Visa, Master, JCB</span>
                  </div>
                </div>
                <div className="pay-method-cb-box">
                  <input className="pay-methor-cb" type="radio" name="pay-method" value="visa" />
                </div>
              </div>
              <div className="payment-item">
                <div className="pay-method-list">
                  <img className="pay-method-image" src={momo} alt="internet banking" />
                  <div className="pay-method-detail">
                    <span>Thanh toán qua Momo</span>
                    <span className="pay-method-description">Hoàn tiền 1%</span>
                  </div>
                </div>
                <div className="pay-method-cb-box">
                  <input className="pay-methor-cb" type="radio" name="pay-method" value="momo" />
                </div>
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
                <div className="cart-list">
                  {addedItems}
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
                <button className="btn btn-danger btn-checkout">ĐẶT MUA</button>
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

export default connect(mapStateToProps)(Checkout)
import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import facebook from '../../images/icon-social/facebook_logo.png'
import youtube from '../../images/icon-social/youtube_logo.png'
import cash from '../../images/payment/cash.png'
import visa from '../../images/payment/visa.png'
import internetbk from '../../images/payment/internetbk.png'
import momo from '../../images/payment/momo.png'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-content">
            <div className="logo-group-footer">
              <Link to="/" className="brand-logo-footer">
                <img src={logo} alt="logo" />
              </Link>
              <div className="description-box">
                <span className="logo-text-footer">3dbuilder.vn</span>
                <div className="footer-description">
                  <span>Địa chỉ: 4562 CMT8, P12, Q10, HCM</span><br />
                  <span>SĐT: 0365436256</span><br />
                  <span>Email: contact@3dbuilder.vn</span><br />
                </div>
                <div className="social-box">
                  <img src={facebook} alt="facebook" />
                  <img src={youtube} alt="youtube" />
                </div>
              </div>

            </div>
            <div className="customer-support">
              <div className="footer-title">HỖ TRỢ KHÁCH HÀNG</div>
              <div className="footer-link-group">
                <div className="footer-link-item">Các câu hỏi thường gặp</div>
                <div className="footer-link-item">Phương thức vận chuyển</div>
                <div className="footer-link-item">Chính sách đổi trả</div>
              </div>
            </div>
            <div className="footer-link">
              <div className="footer-title">LIÊN KẾT</div>
              <div className="footer-link-group">
                <div className="footer-link-item">Sản phẩm</div>
                <div className="footer-link-item">Dịch vụ</div>
                <div className="footer-link-item">Danh mục</div>
                <div className="footer-link-item">Chính sách bảo mật</div>
                <div className="footer-link-item">Điều khoản sử dụng</div>
              </div>
            </div>
            <div className="payment-group">
              <div className="footer-title">PHƯƠNG THỨC THANH TOÁN</div>
              <div className="payment-img-group">
                <img className="payment-img-item" src={visa} alt="cash" />
                <img className="payment-img-item" src={momo} alt="cash" />
                <img className="payment-img-item" src={cash} alt="cash" />
                <img className="payment-img-item" src={internetbk} alt="cash" />
              </div>
            </div>
          </div>
        </div>
        <div className="copy-rignt">
          <span>3dbuilder.vn © 2019. All Rights Reserved. Design by 3dbuilder.vn</span>
        </div>
      </div>
    )
  }
}

export default Footer

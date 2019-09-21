import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo-group">
            <Link to="/" className="brand-logo">
              <img src={logo} className="logo" alt="logo" />3dbuilder.vn </Link>
            <div className="description">

            </div>
            <div className="social-box">
              <img src="" alt="facebook" />
              <img src="" alt="youtube" />
            </div>
          </div>
          <div className="customer-support">
            <div className="footer-title">HỖ TRỢ KHÁCH HÀNG</div>
            <div className="footer-link-group">
              <div className="footer-link-item">Các câu hỏi thường gặp</div>
              <div className="footer-link-item">Các câu hỏi thường gặp</div>
              <div className="footer-link-item">Các câu hỏi thường gặp</div>
            </div>
          </div>
          <div className="nav-link">
            <div className="footer-title">LIÊN KẾT</div>
            <div className="footer-link-group">
              <div className="footer-link-item">Các câu hỏi thường gặp</div>
              <div className="footer-link-item">Các câu hỏi thường gặp</div>
              <div className="footer-link-item">Các câu hỏi thường gặp</div>
            </div>
          </div>
          <div className="payment-group">
            <div className="footer-title">PHƯƠNG THỨC THANH TOÁN</div>
            <div className="payment-img-group">
              <div className="payment-img-item">
                <img src="" alt="visa" />
              </div>
            </div>
          </div>
        </div>
        <div className="copy-rignt">
          <p>3dbuilder.vn 2019. All Rights Reserved. Design by 3dbuilder.vn</p>
        </div>
      </div>
    )
  }
}

export default Footer

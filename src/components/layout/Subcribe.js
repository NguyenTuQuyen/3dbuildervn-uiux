import React from 'react'
import emailSubcribe from '../../images/email-subcribe.png'

const Subcribe = () => {
  return (
    <div>
      <div className="banner-bottom-subcribe">
        <div className="subcribe-img-box">
          <img src={emailSubcribe} alt="email subcribe" />
        </div>
        <div className="subcribe-description-box">
          <div className="subcribe-description-text">
            <h4>Đăng ký nhận bản tin 3dbuilder.vn</h4>
            <div>Nhận thông báo, giảm giá và chương trình khuyến mãi qua Email của bạn, đừng bỏ lỡ!</div>
          </div>
          <div className="email-box">
            <input type="text" placeholder="Nhập email của bạn..." />
            <button className="button-default">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subcribe

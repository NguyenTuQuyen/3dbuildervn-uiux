import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import imgSlider1 from '../images/slider/3dprint1.jpg'
import imgSlider2 from '../images/slider/3dprint2.jpg'
import imgSlider3 from '../images/slider/3dprint3.jpg'
import imgSlider4 from '../images/slider/3dprint4.jpg'
import imgSlider5 from '../images/slider/3dprint5.jpg'
import iconBenefit1 from '../images/icon-benefit/product.png'
import iconBenefit2 from '../images/icon-benefit/quality.png'
import iconBenefit3 from '../images/icon-benefit/tool.png'
import iconBenefit4 from '../images/icon-benefit/screen.png'

class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="home-container" >
        <div className="intro-box">
          <div className="intro-slide">
            <Slider {...settings}>
              <div >
                <img className="slide-img" src={imgSlider1} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider2} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider3} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider4} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider5} alt="3dprint" />
              </div>
            </Slider>
          </div>
          <div className="intro-text">
            <span className="intro-text-title"><span>Khám phá <br /></span> hàng ngàn sản phẩm 3D</span><br />
            <span className="intro-text-description">3D print | 3D template | VR/AR </span><br />
            <Link to="/products"><button className="button-primary">Xem ngay</button></Link>
          </div>
        </div>
        <div className="home-centered">
          <div className="video-intro">
            <div className="video-frame"><iframe width="100%" height="300px" src="https://www.youtube.com/embed/3Gu2TLHLkvI?controls=0" frameborder="0" allow=""></iframe></div>
            <div className="video-description">
              <div className="title"><span style={{ color: "#4a4a4a" }}>Sản phẩm tại </span>3dbuilder.vn</div>
              <div className="description">No importa tu profesión: ya seas un fotógrafo, músico, tengas un restaurante o un hotel o te dediques a cualquier otra cosa, puedes administrar tu página web y negocio online en un solo lugar. ¡Con Wix, las posibilidades son realmente infinitas! Ofrecemos 200 aplicaciones y servicios para optimizar el crecimiento de tu negocio y explotar su presencia online.</div>
              <Link to="/products"><button className="button-default">Xem thêm</button></Link>
            </div>
          </div>
          <div className="feature-group">
            <div className="card-group-home">
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D print</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <Link to="/products"><a href="#"> Xem thêm</a></Link>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider2} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <Link to="/products"><a href="#"> Xem thêm</a></Link>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider3} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">VR/AR</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <Link to="/products"><a href="#"> Xem thêm</a></Link>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider4} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <Link to="/products"><a href="#"> Xem thêm</a></Link>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider5} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <Link to="/products"><a href="#"> Xem thêm</a></Link>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <Link to="/products"><a href="#"> Xem thêm</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-group">
            <div className="benefit-box">
              <div className="benefit-item">
                <img src={iconBenefit1} alt="icon-benefit" />
                <div className="benefit-text">
                  <div className="sub-title">Sản phẩm đa dạng</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
              <div className="benefit-item">
                <img src={iconBenefit2} alt="icon-benefit" />
                <div className="benefit-text">
                  <div className="sub-title">Cam kết chất lượng</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
              <div className="benefit-item">
                <img src={iconBenefit3} alt="icon-benefit" />
                <div className="benefit-text">
                  <div className="sub-title">Đội ngũ uy tín</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
              <div className="benefit-item">
                <img src={iconBenefit4} alt="icon-benefit" />
                <div className="benefit-text">
                  <div className="sub-title">Công nghệ tiên tiến</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
            </div>
            <div>
              <button className="button-default">Xem sản phẩm</button>
            </div>
          </div>
        </div>
        <div class="parallax">
          <div className="parallax-text-group">
            <div className="title">3dbuilder.vn <span style={{color: "white"}}>cung cấp dịch vụ thiết kế và in các sản phẩm 3D</span></div>
            <div className="description">No importa tu profesión: ya seas un fotógrafo, músico, tengas un restaurante o un hotel o te dediques a cualquier otra cosa, puedes administrar tu página web y negocio online en un solo lugar. </div>
            <button className="button-default">Liên hệ</button>
          </div>
        </div>
        <div className="customer-group">
          <div className="title">Khách khàng của chúng tôi</div>
          <div className="description">Xuất phát từ công nghệ 3D đang phát triển nhảy vọt và tiến xa trong tương lai, đội ngũ của chúng tôi tự hào là nhà cung cấp các sản phẩm 3D mới nhất và hiện đại nhất cho thị trường Việt Nam</div>
          <div className="customer-img-group">
            <div className="customer-img customer-img-1" />
            <div className="customer-img customer-img-2" />
            <div className="customer-img customer-img-3" />
            <div className="customer-img customer-img-4" />
            <div className="customer-img customer-img-5" />
          </div>
        </div>
        <Link to="/products">
        <div className="banner-bottom-home">
          <span className="sub-title-banner">Có hơn 50+ sản phẩm đang giảm giá</span>
          <div className="button-banner-box"><button  className="button-default button-primary-white">Xem ngay</button></div>
        </div>
        </Link>
      </div>
    )
  }
}
export default Home
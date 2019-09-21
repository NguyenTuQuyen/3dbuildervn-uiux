import React, { Component } from 'react'
import Slider from "react-slick";
import imgSlider1 from '../images/slider/3dprint.jpg'
import iconBenefit1 from '../images/icon-benefit/product.png'
import customerIcon1 from '../images/customer-logo/Gulf_logo.png'

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
                <img className="slide-img" src={imgSlider1} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider1} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider1} alt="3dprint" />
              </div>
              <div >
                <img className="slide-img" src={imgSlider1} alt="3dprint" />
              </div>
            </Slider>
          </div>
          <div className="intro-text">
            <h1>Khám phá hàng ngàn sản phẩm 3D</h1><br />
            <div>3D print | 3D template | VR/AR </div>
            <button>Xem ngay</button>
          </div>
        </div>
        <div className="home-content">
          <div className="video-intro">
            <div className="video-frame"><iframe src="https://www.youtube.com/embed/3Gu2TLHLkvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="video-description">
              <div className="title">Sản phẩm tại <p className="logo-text">3dbuilder.vn</p></div>
              <div className="description">No importa tu profesión: ya seas un fotógrafo, músico, tengas un restaurante o un hotel o te dediques a cualquier otra cosa, puedes administrar tu página web y negocio online en un solo lugar. ¡Con Wix, las posibilidades son realmente infinitas! Ofrecemos 200 aplicaciones y servicios para optimizar el crecimiento de tu negocio y explotar su presencia online.</div>
            </div>
          </div>
          <div className="feature-group">
            <div className="card-group-home">
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <a href="#"> Xem thêm</a>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <a href="#"> Xem thêm</a>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <a href="#"> Xem thêm</a>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <a href="#"> Xem thêm</a>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <a href="#"> Xem thêm</a>
                </div>
              </div>
              <div className="card-item">
                <div className="card-image">
                  <img src={imgSlider1} alt="3dprint" />
                </div>
                <div className="card-text">
                  <div className="title">3D template</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                  <a href="#"> Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-group">
            <div className="benefit-box">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src={iconBenefit1} alt="icon-benefit" />
                </div>
                <div className="benefit-text">
                  <div className="sub-title">Sản phẩm đa dạng</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src={iconBenefit1} alt="icon-benefit" />
                </div>
                <div className="benefit-text">
                  <div className="sub-title">Sản phẩm đa dạng</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src={iconBenefit1} alt="icon-benefit" />
                </div>
                <div className="benefit-text">
                  <div className="sub-title">Sản phẩm đa dạng</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src={iconBenefit1} alt="icon-benefit" />
                </div>
                <div className="benefit-text">
                  <div className="sub-title">Sản phẩm đa dạng</div>
                  <div className="description">3dbuilder.vn cung cấp công cụ và mẫu hỗ trợ cho việc in 3D các loại mô hình, đồ chơi...</div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-primary btn-see-product">Xem sản phẩm</button>
            </div>
          </div>
          <div class="parallax">
            <div className="parallax-text-group">
              <div className="title"><p className="logo-text">3dbuilder.vn</p> cung cấp dịch vụ thiết kế và in các sản phẩm 3D</div>
              <div className="description">No importa tu profesión: ya seas un fotógrafo, músico, tengas un restaurante o un hotel o te dediques a cualquier otra cosa, puedes administrar tu página web y negocio online en un solo lugar. ¡Con Wix, las posibilidades son realmente infinitas! Ofrecemos 200 aplicaciones y servicios para optimizar el crecimiento de tu negocio y explotar su presencia online.</div>
              <div className="btn btn-primary">Liên hệ</div>
            </div>
          </div>
          <div className="customer-group">
            <div className="title">Khách khàng của chúng tôi</div>
            <div className="description">Xuất phát từ công nghệ 3D đang phát triển nhảy vọt và tiến xa trong tương lai, đội ngũ của chúng tôi tự hào là nhà cung cấp các sản phẩm 3D</div>
            <div className="customer-img-group">
              <div className="customer-img">
                <img src={customerIcon1} alt="customer" />
              </div>
              <div className="customer-img">
                <img src={customerIcon1} alt="customer" />
              </div>
              <div className="customer-img">
                <img src={customerIcon1} alt="customer" />
              </div>
              <div className="customer-img">
                <img src={customerIcon1} alt="customer" />
              </div>
              <div className="customer-img">
                <img src={customerIcon1} alt="customer" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-bottom-home">
          <h4>Có hơn 50+ sản phẩm đang giảm giá</h4>
          <button>Xem ngay</button>
        </div>
      </div>
    )
  }
}
export default Home
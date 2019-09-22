import React, { Component } from 'react'
import { ProductList, ProductListSlider } from '../components/product/ProductList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Slider from "react-slick";
import imgSlider1 from '../images/banner/product-slider/banner1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import adBanner from '../images/banner/ad-banner-product.jpg'
import Subcribe from '../components/layout/Subcribe'

export class ProductContainer extends Component {
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
    const { products } = this.props
    console.log(products);
    
    return (
      <div className="product-container">
        <div className="product-slider">
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
        <div className="product-centered">
          <div className="product-box">
            <div className="product-left">
              <div className="search-box">
                <input type="text" placeholder="Nhập nội dung cần tìm..." />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="category-box">
                <div className="category-title">Danh mục</div>
                <div className="category-list">
                  <div style={{ color: "var(--primary)" }}>3D PRINT (203)</div>
                  <div>3D TEMPLATE (104)</div>
                  <div>VR/AR (50)</div>
                </div>
              </div>
              <div className="tag-box">
                <div className="tag-title">Tag</div>
                <div className="tag-list">
                  <button className="tag-item">máy in 3D</button>
                  <button className="tag-item">máy in 3D</button>
                  <button className="tag-item">máy in 3D</button>
                  <button className="tag-item">máy in 3D</button>
                  <button className="tag-item">máy in 3D</button>
                </div>
              </div>
              <div className="ad-banner">
                <img src={adBanner} alt="ad banner" />
              </div>
            </div>
            <div className="product-right">
              <div className="product-list-top">
                <div className="category-title-group">
                  <h4>3D print</h4>
                  <span>203 sản phẩm</span>
                </div>
                <div className="filter-box">
                  <span>Sắp xếp theo</span>
                  <div className="filter-bar">
                    <div>Mới nhất</div>
                    <FontAwesomeIcon icon={faSortDown} />
                  </div>
                </div>
              </div>
              <ProductList products={products} />
            </div>
          </div>
          <div className="product-viewed">
            <h4>Sản phẩm bạn đã xem</h4>
            <ProductListSlider products={products} />
          </div>
        </div>
        <Subcribe />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(ProductContainer)

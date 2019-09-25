import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart, faShoppingCart, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../../store/actions/cartAction'
import {BreadcrumbProducts} from '../layout/Breadcrumb'
import { Link } from 'react-router-dom'
import { ProductListSlider } from '../product/ProductList'
import Subcribe from '../layout/Subcribe'
import CurrencyFormat from 'react-currency-format';
import adBanner from '../../images/banner/ad-banner-product-detail.png'
import boxOpened from '../../images/icon-product-detail/box-opened.png'
import awardBadge from '../../images/icon-product-detail/award-badge.png'
import giftBox from '../../images/icon-product-detail/gift-box.png'
import phone from '../../images/icon-product-detail/phone.png'
import email from '../../images/icon-product-detail/email.png'
import peter from '../../images/avatar/peter.png'
import commentImg1 from '../../images/comment-img/comment-img1.png'
import commentImg2 from '../../images/comment-img/comment-img2.png'


class ProductDetail extends Component {
  handleAddProduct = (id) => {
    console.log(id);
    this.props.addToCart(id);
  }
  render() {
    const { productsArray, product, id } = this.props
    if (product) {
      return (
        <div className="product-detail-container">
          <div className="product-detail-centered">
            <BreadcrumbProducts id={id} title={product.title} />
            <div className="product-detail-content">
              <div className="product-detail-left">
                <div className="product-detail-item">
                  <div className="product-detail-image-box">
                    <div className="product-detail-image-lg-box">
                      <img className="product-detail-image-lg" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
                    </div>
                    <div className="product-detail-image-sm-box">
                      <img className="product-detail-image-sm" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
                      <img className="product-detail-image-sm" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
                      <img className="product-detail-image-sm" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
                      <img className="product-detail-image-sm" src='https://3dbuilder.vn/images/home-var-2-650x495.jpg' alt={product.title} />
                    </div>
                  </div>
                  <div className="product-detail-info">
                    <h4 className="product-detail-title">{product.title}Máy in 3D MakerBot Replicator 2</h4>
                    <div className="star-brand-box">
                      <div className="star-box">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className="star-last" icon={faStar} />
                        <span>5 nhận xét </span>
                      </div>
                      <span>Thương hiệu: MakerBot</span>
                    </div>
                    <div className="price-box">
                      <div className="price-sale">
                        <h5 className="product-price"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></h5>
                        <span>-20%</span>
                      </div>
                      <span className="price-normal"><CurrencyFormat value={parseInt(product.price) + 500000} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} <span>&#8363;</span></div>} /></span>
                    </div>
                    <span className="product-detail-short-description">
                      <ul className="short-description-list">
                        <li className="short-description-item">Linh kiện đồng bộ, không phải mất thời gian tìm mua từng linh kiện.</li>
                        <li className="short-description-item">Dễ dàng lắp ráp và hoàn thiện máy qua từng mẫu in test.</li>
                        <li className="short-description-item">Thương hiệu nổi tiếng trên thế giới.</li>
                        <li className="short-description-item">Hàng nhập khẩu chính hãng.</li>
                        <li className="short-description-item">Máy in 3D MakerBot Replicator 2 là lựa chọn đúng đắn của Quý khách!</li>
                      </ul>
                    </span>
                    <div className="button-add-product-group">
                      <Link to="/cart" >
                        <button className="btn btn-primary btn-add-product" onClick={() => { this.handleAddProduct(id) }}><FontAwesomeIcon icon={faShoppingCart} />Chọn mua</button>
                      </Link>
                      <button className="btn btn-favorite"><FontAwesomeIcon icon={faHeart} />Thêm vào yêu thích</button>
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
                  </div>
                </div>
                <div className="product-detail-feature">
                  <h4>Thông tin chi tiết</h4>
                  <table className="product-feature-table">
                    <tbody>
                      <tr>
                        <td className="feature-label">Thương hiệu</td>
                        <td className="feature-detail">MakerBot</td>
                      </tr>
                      <tr>
                        <td className="feature-label">Kích thước</td>
                        <td className="feature-detail">
                          <span>Kích thước thùng chứa: 53x38x20cm</span><br />
                          <span>Kích thước máy: 44x41x46,5cm</span><br />
                          <span>Khối lượng: 9kg</span><br />
                        </td>
                      </tr>
                      <tr>
                        <td className="feature-label">Model</td>
                        <td className="feature-detail">Replicator 2</td>
                      </tr>
                      <tr>
                        <td className="feature-label">SKU</td>
                        <td className="feature-detail">4163204721334</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className="product-detail-long-description">
                  <h4>Thông tin chi tiết</h4>
                  <div>{product.description}
                    <span>
                      * Xuất xứ:

                      * Lắp ráp dễ dàng theo từng cụm bộ phận. Sử dụng thanh nhôm định hình và hệ thống trượt mới. Máy êm và ổn định.

                      * Chức năng in tiếp tục: Máy có chức năng in tiếp tục khi mất điện, tạm dừng để thay mực hoặc tạm dừng khi không muốn máy làm việc mà không có người quản lý. Quý khách có thể tắt máy và sáng hôm sau in trở lại tiếp tục!

                      * Khổ mô hình lớn: 220x220x250mm

                      * Dùng mực in 3D: PLA, TPU hoặc ABS, PETG…

                      * Độ phân giải: Tùy chỉnh theo phần mềm Cura, Simplify 3d … lên đến 0,06mm

                      * : 0,4mm

                      * Màn hình LCD điều khiển. Khe cắm thẻ nhớ SD. Cáp kết nối máy tính để điều khiển.

                      Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ..
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-detail-right">
                <div className="promotion-contact-box">
                  <div className="promotion-added">
                    <div className="promotion-box">
                      <img src={boxOpened} alt="promotion added" />
                      <div className="promotion-info">
                        <span className="promotion-title">Sản phẩm bao gồm</span>
                        <span className="promotion-description">Thùng chứa, cáp nối,nguyên liệu mẫu, phụ tùng</span>
                      </div>
                    </div>
                    <div className="promotion-box">
                      <img src={awardBadge} alt="award" />
                      <div className="promotion-info">
                        <span className="promotion-title">Bảo hành chính hãng 3 năm</span>
                      </div>
                    </div>
                    <div className="promotion-box">
                      <img src={giftBox} alt="gift" />
                      <div className="promotion-info">
                        <span className="promotion-title">Quà tặng <span style={{ color: "var(--primary)" }}>vật liệu đi kèm</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="promotion-added">
                    <div className="promotion-box">
                      <img src={phone} alt="promotion added" />
                      <div className="promotion-info">
                        <span className="promotion-title">Liên hệ đặt hàng</span>
                        <span className="promotion-description">
                          <span>0368636154</span><br />
                          <span>(Miễn phí, kể cả T7, CN)</span>
                        </span>
                      </div>
                    </div>
                    <div className="promotion-box">
                      <img src={email} alt="gift" />
                      <div className="promotion-info">
                        <span className="promotion-title"><span style={{ color: "var(--primary)" }}>ex@gmail.com</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sharing-button-group">sharing button</div>
                <div className="product-detail-ad-banner">
                  <img src={adBanner} alt={product.title} />
                </div>
              </div>
            </div>
            <div className="product-viewed">
              <h4>Sản phẩm tương tự</h4>
              <ProductListSlider products={productsArray} />
            </div>
            <div className="product-comment">
              <h4>Nhận xét về sản phẩm</h4>
              <div className="comment-container">
                <div className="create-comment-box">
                  <span>Đánh giá trung bình</span>
                  <h4>4/5</h4>
                  <div className="star-box">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon className="star-last" icon={faStar} />
                    <br /><span>5 nhận xét </span>
                  </div>
                  <button className="btn btn-primary btn-create-comment">Viết nhận xét</button>
                </div>
                <div className="show-comment-box">
                  <div className="filter-box">
                    <span>Sắp xếp theo</span>
                    <div className="filter-bar">
                      <div>Mới nhất</div>
                      <FontAwesomeIcon icon={faSortDown} />
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="avatar-group">
                      <img src={peter} alt="peter" />
                      <div className="name-group">
                        <span>Nguyễn Thanh Chiêu</span>
                        <span className="comment-timestamp">3 tháng trước</span>
                      </div>
                    </div>
                    <div className="comment-detail-box">
                      <div className="star-box">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className="star-last" icon={faStar} />
                        <span>Sản phẩm chất lượng</span>
                      </div>
                      <div className="comment-detail">Dòng máy in 3d desktop cho người mới tim hiểu về in 3d. Chất lượng máy ổn. Vận hành in ổn tuy nhiên lắp ráp khá khó vi phần hướng dẫn không hoàn toàn từng bước.</div>
                      <div className="comment-image-box">
                        <img src={commentImg1} alt="comment 1" />
                        <img src={commentImg2} alt="comment 1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Subcribe />
        </div>
      )
    } else {
      return (
        <div className="container center">
          <p>Loading product...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const productsArray = state.firestore.ordered.products
  const product = products ? products[id] : null
  return {
    productsArray: productsArray,
    product: product,
    id: id
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'products'
  }])
)(ProductDetail) 

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/actions/productAction'

class CreateProduct extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
    image: "",
    quantity: 0,
    supplier: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProduct(this.state)
  }
  render() {
    return (
      <div className="sign-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h5>Tạo sản phẩm mới</h5>
          <div className="input-field title">
            <label htmlFor="title">Tên sản phẩm</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field category">
            <label htmlFor="category">Danh mục sản phẩm</label>
            <input type="text" id="category" onChange={this.handleChange} />
          </div>
          <div className="input-field desc">
            <label htmlFor="description">Mô tả sản phẩm</label>
            <textarea id="description" onChange={this.handleChange} />
          </div>
          <div className="input-field price">
            <label htmlFor="price">Gía sản phẩm</label>
            <input type="number" id="price" onChange={this.handleChange} />
          </div>
          <div className="input-field quantity">
            <label htmlFor="quantity">Số lượng sản phẩm</label>
            <input type="number" id="quantity" onChange={this.handleChange} />
          </div>
          <div className="input-field supplier">
            <label htmlFor="supplier">Nhà cung cấp</label>
            <input type="text" id="supplier" onChange={this.handleChange} />
          </div>
          <div className="input-field image">
            <label htmlFor="image">Ảnh sản phẩm</label>
            <input type="file" id="image" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-primary">Tạo</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product))
  }
}
export default connect(null,mapDispatchToProps)(CreateProduct)

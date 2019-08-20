import React, { Component } from 'react'

export class CreateProduct extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
    image: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
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
          <div className="input-field desc">
            <label htmlFor="desc">Mô tả sản phẩm</label>
            <textarea id="desc" onChange={this.handleChange} />
          </div>
          <div className="input-field price">
            <label htmlFor="price">Gía sản phẩm</label>
            <input type="number" id="price" onChange={this.handleChange} />
          </div>
          <div className="input-field img">
            <label htmlFor="img">Ảnh sản phẩm</label>
            <input type="file" id="img" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-primary">Tạo</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProduct

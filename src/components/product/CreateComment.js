import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../store/actions/commentAction'

class CreateComment extends Component {
  state = {
    title: "",
    description: "",
    star: 0,
    image: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createComment(this.state)
  }
  render() {
    return (
      <div className="sign-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h5>Viết đánh giá mới</h5>
          <div className="input-field title">
            <label htmlFor="title">Tiêu đề đánh giá</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field desc">
            <label htmlFor="description">Mô tả đánh giá</label>
            <textarea id="description" onChange={this.handleChange} />
          </div>
          <div className="input-field star">
            <label htmlFor="star">Đánh giá</label>
            <input type="number" id="star" onChange={this.handleChange} />
          </div>
          <div className="input-field image">
            <label htmlFor="image">Thêm ảnh</label>
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
    createComment: (comment) => dispatch(createComment(comment))
  }
}
export default connect(null,mapDispatchToProps)(CreateComment)

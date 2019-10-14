import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
import { Redirect, Link } from 'react-router-dom'

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="signin-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h5>Đăng nhập</h5>
          <div className="input-field email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field btn-login">
            <button className="button-default">Đăng nhập</button>
          </div>
          <div className="text-danger">
            {authError ? <p>{authError}</p> : null}
          </div>
          <div style={{ marginTop: "25px" }}><span>Tài khoản test:</span>
            <br />
            <span>Tên đăng nhập: test@gmail.com</span><br />
            <span>Mật khẩu: 123456</span>
          </div>
          <div style={{ marginTop: "25px" }}><span>Nếu chưa có tài khoản: <Link to="/signup">Đăng ký</Link> </span>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

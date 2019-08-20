import React, { Component } from 'react'

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
  }
  render() {
    return (
      <div className="sign-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h5>Signin</h5>
          <div className="input-field email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn

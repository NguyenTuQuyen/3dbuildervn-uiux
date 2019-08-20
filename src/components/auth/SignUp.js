import React, { Component } from 'react'

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
          <div className="input-field first-name">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field last-name">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp

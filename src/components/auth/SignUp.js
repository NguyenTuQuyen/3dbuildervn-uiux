import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {signUp} from '../../store/actions/authAction'

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    birthDay: "",
    address: "",
    genre: "",
    receiveNewsletter: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)

  }
  render() {
    const {auth, authError} = this.props
    if(auth.uid) return <Redirect to='/'/>
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
          <div className="input-field user-name">
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" onChange={this.handleChange} />
          </div>
          <div className="input-field birth-day">
            <label htmlFor="birthDay">Birth Day</label>
            <input type="date" id="birthDay" onChange={this.handleChange} />
          </div>
          <div className="input-field user-name">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={this.handleChange} />
          </div>
          <div className="input-field user-name">
            <label htmlFor="genre">Genre</label>
            <input type="text" id="genre" onChange={this.handleChange} />
          </div>
          <div className="input-field user-name">
            <label htmlFor="receiveNewsletter">ReceiveNewsletter</label>
            <input type="text" id="receiveNewsletter" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-primary">Signup</button>
          </div>
          <div className="text-danger">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser)) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class SignedOutLinks extends Component {
  render() {
    return (
      <div className="login-group">
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
      </div>

    )
  }
}

export default SignedOutLinks

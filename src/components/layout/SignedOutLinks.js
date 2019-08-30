import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class SignedOutLinks extends Component {
  render() {
    return (
        <li><NavLink to="/login">Login</NavLink></li>
    )
  }
}

export default SignedOutLinks

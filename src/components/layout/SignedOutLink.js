import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class SignedOutLink extends Component {
  render() {
    return (
        <li><NavLink to="/signin">Login</NavLink></li>
    )
  }
}

export default SignedOutLink

import React, { Component } from 'react'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
class NavBar extends Component {
  state = {
    menu_class: ""
  }
  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
    }
  }
  render() {
    const { auth } = this.props
    const links = auth.uid ? <SignedInLink /> : <SignedOutLink />
    return (
      <header className="app-header">
        <div className={`nav-container ${this.state.menu_class}`} >
          <div className="toggle-icon" ><FontAwesomeIcon icon={faBars} onClick={this.setToggleTopMenuClass} /></div>
          <div className="logo-box">
            <Link to="/" className="brand-logo">
              <img src={logo} className="logo" alt="logo" />
              <span>3dbuilder.vn</span>
            </Link>
          </div>
          <div className="left">
            <li><Link to="/products">3D print</Link></li>
            <li><Link to="/products">3D template</Link></li>
            <li><Link to="/products">VR/AR</Link></li>
            <li><Link to="/products">Blog</Link></li>
          </div>
          <div className="right">
            <li><Link to="/search" className="search-icon"><FontAwesomeIcon icon={faSearch} /></Link></li>
            <li><Link to="/cart" className="cart-icon" ><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
            <li><Link to="/notification"><FontAwesomeIcon icon={faBell} /></Link></li>
            <li>{links}</li>
          </div>
          <div className="search-cart-box">
            <li><Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link></li>
            <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
          </div>
        </div>
      </header >
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(NavBar)
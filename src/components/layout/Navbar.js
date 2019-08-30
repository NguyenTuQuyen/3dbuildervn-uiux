import React from 'react'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
      <header className="app-header">
        <nav className="nav-wrapper" >
          <div className="nav-container">
            <div className="left">
              <div className="logo-box">
                <Link to="/" className="brand-logo">
                  <img src={logo} className="logo" alt="logo" />3dbuilder.vn </Link>
              </div>
              <div className="nav-menu">
                <li><Link to="/products">Sản phẩm</Link></li>
                <li><Link to="/cart">Giỏ hàng</Link></li>
              </div>
            </div>
            <div className="right">
              <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
              <SignedOutLink />
              <SignedInLink />
            </div>
          </div>
        </nav>
      </header>
  )
}
export default NavBar
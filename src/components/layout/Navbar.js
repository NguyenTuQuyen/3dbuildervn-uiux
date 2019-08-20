import React, { Component } from 'react'
import Home from '../Home'
import Products from '../products/ProductList'
import CreateProduct from '../products/CreateProduct'
import Cart from '../products/Cart'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
  render() {
    return (
      <Router>
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
                <SignedOutLink/>
                <SignedInLink/>
              </div>
            </div>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create-product" component={CreateProduct} />
      </Router>
    )
  }
}
export default NavBar
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="nav-wrapper" >
            <div className="nav-container">
                <BrowserRouter>
                    <div className="left">
                        <div class="logo-box">
                            <Link to="/" className="brand-logo">
                                <img src={logo} className="logo" alt="logo" />                            3dbuilder.vn </Link>
                        </div>
                        <div class="nav-menu">
                            <li><Link to="/products">Sản phẩm</Link></li>
                            <li><Link to="/car">Giỏ hàng</Link></li>
                        </div>
                    </div>
                    <div className="right">
                        <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                        <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link></li>
                    </div>
                </BrowserRouter>
            </div>
        </nav>
    )
}
export default Navbar
import React from 'react'
import {BrowserRouter, Link } from 'react-router-dom'
import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="nav-wrapper" >
            <div className="nav-container">
                <BrowserRouter>
                <Link to="/" className="brand-logo">
                <img src={logo} className="logo" alt="logo" /> 
                    3dbuilder.vn
                    </Link>
                <ul className="left">
                    <li><Link to="/products">Sản phẩm</Link></li>
                    <li><Link to="/car">Giỏ hàng</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                </ul>
                </BrowserRouter>
            </div>
        </nav>
    )
}
export default Navbar
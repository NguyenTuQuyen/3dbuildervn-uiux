import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './components/home'
import Products from './components/products'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import cartReducer from './components/reducers/productsReducer'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker'
import logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const store = createStore(cartReducer)
const routing = (
  <Router>
    <header className="app-header">
      <nav className="nav-wrapper" >
        <div className="nav-container">
          <div className="left">
            <div class="logo-box">
              <Link to="/" className="brand-logo">
                <img src={logo} className="logo" alt="logo" />3dbuilder.vn </Link>
            </div>
            <div class="nav-menu">
              <li><Link to="/products">Sản phẩm</Link></li>
              <li><Link to="/cart">Giỏ hàng</Link></li>
            </div>
          </div>
          <div className="right">
            <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
            <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link></li>
          </div>
        </div>
      </nav>
    </header>

    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
  </Router>
)
ReactDOM.render(
  <Provider store={store} >
    {routing}
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
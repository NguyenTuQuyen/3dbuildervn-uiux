import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import * as serviceWorker from './serviceWorker'
import logo from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import './styles/index.css'

const middleware = [ thunk ]
if(process.env.NODE_ENV !== 'production'){
  middleware.push(createLogger())
}
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
  )
const routing = (
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
            <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link></li>
          </div>
        </div>
      </nav>
    </header>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/cart" component={Cart} />
  </Router>
)
ReactDOM.render(
  <Provider store={store} >
    {routing}
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
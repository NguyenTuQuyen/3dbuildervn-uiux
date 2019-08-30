import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../components/layout/Navbar'
import ProductContainer from './ProductContainer'
import Notification from './Notification'
import Home from '../container/Home'
import ProductDetail from '../components/product/ProductDetail'
import CreateProduct from '../components/product/CreateProduct'
import Cart from '../components/product/Cart'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={ProductContainer} />
            <Route path='/product/:id' component={ProductDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProduct} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}

export default App
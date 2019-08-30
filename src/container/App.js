import React from 'react'
import NavBar from '../components/layout/Navbar'
import Home from './Home'
import ProductContainer from './ProductContainer'
import Notification from './Notification'

const App = () => (
  <div>
    <NavBar />
    <Home/>
    <ProductContainer/>
    <Notification/>
  </div>
)

export default App
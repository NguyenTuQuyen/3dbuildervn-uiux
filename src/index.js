import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import * as serviceWorker from './serviceWorker'
import NavBar from './components/layout/Navbar'
import './styles/index.css'

const store = createStore(
  reducer
  )
ReactDOM.render(
  <Provider store={store} >
    <NavBar />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
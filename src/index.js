import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import reducer from './reducers/index'
import * as serviceWorker from './serviceWorker'
import NavBar from './components/layout/Navbar'
import './styles/index.css'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
)
ReactDOM.render(
  <Provider store={store} >
    <NavBar />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
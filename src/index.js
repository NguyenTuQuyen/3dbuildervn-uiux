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
import reducer from './store/reducers/index'
import * as serviceWorker from './serviceWorker'
import './styles/index.css'
import App from './container/App'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
  )
)
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>, document.getElementById('root'));
  serviceWorker.unregister();
})

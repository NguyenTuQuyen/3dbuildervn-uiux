import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {  getFirebase } from 'react-redux-firebase'

export class Checkout extends Component {
  constructor(){
    super()
    const firebase = getFirebase()
    this.userId = firebase.auth().currentUser.uid
  }
  render() {
    if (this.userId) {
      return (
        <div>
          Checkout
        </div>
      )
    } else {
      return (
        <Redirect to="/login" />
      )
    }
  }
}

export default Checkout

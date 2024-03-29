import {LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../constants/ActionTypes'
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: LOGIN_SUCCESS})
    }).catch((err) => {
      dispatch({type: LOGIN_ERROR, err})
    })
  }
}
export const signOut = () => {
  return(dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    firebase.auth().signOut().then(() => {
      dispatch({type: SIGNOUT_SUCCESS})
    })
  }
}
export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        userName: newUser.userName,
        birthDay: newUser.birthDay,
        address: newUser.address,
        receiveNewsletter: newUser.receiveNewsletter,
        genre: newUser.genre
      })
    }).then(() => {
      dispatch({type: SIGNUP_SUCCESS})
    }).catch(err => {
      dispatch({type: SIGNUP_ERROR})
    })
  }
}
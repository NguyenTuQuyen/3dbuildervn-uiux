import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../constants/ActionTypes'
const initialState = {
  authError: null
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: "Login failed"
      }
    case LOGIN_SUCCESS:
      console.log("login success")
      return {
        ...state,
        authError: null
      }
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return state
    case SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      console.log("signup error");
      return {
        ...state,
        authError: "Signup Error"
      }
    default:
      return state
  }
}
export default authReducer

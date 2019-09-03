import AuthReducer from './authReducer'
import ProductReducer from './productReducer'
import CartReducer from './cartReducer'
import CommentReducer from './commentReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const reducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart: CartReducer,
    comment: CommentReducer
})
export default reducer
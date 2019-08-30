import AuthReducer from './authReducer'
import ProductReducer from './productReducer'
import CartReducer from './cartReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const reducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
    firestore: firestoreReducer,
    cart: CartReducer
})
export default reducer
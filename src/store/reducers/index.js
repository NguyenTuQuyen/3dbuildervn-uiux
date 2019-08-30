import AuthReducer from './authReducer'
import ProductReducer from './productReducer'
import CartReducer from './cartReducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
    cart: CartReducer
})
export default reducer
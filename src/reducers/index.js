import AuthReducer from './authReducer'
import ProductsReducer from './productsReducer'
import CartReducer from './cartReducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    auth: AuthReducer,
    product: ProductsReducer,
    cart: CartReducer
})
export default reducer
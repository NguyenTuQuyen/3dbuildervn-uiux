import {ADD_TO_CART} from '../constants/productAction'
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
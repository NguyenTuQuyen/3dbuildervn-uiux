import { ADD_TO_CART, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM } from '../constants/ActionTypes'
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}
export const subtractQuantity = (id) => {
  return {
    type: SUBTRACT_QUANTITY,
    id
  }
}
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}
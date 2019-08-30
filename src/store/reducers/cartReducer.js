import { ADD_TO_CART, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM } from "../constants/ActionTypes";
import Item1 from '../../images/Item1.jpg'
import Item2 from '../../images/Item2.jpg'
import Item3 from '../../images/Item3.jpg'
import Item4 from '../../images/Item4.jpg'
import Item5 from '../../images/Item5.jpg'
import Item6 from '../../images/Item6.jpg'

const initState = {
  products: [],
  addedItems: [],
  total: 0
}
const CartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id)
    let exitedItem = state.addedItems.find(item => action.id === item.id)
    if (exitedItem) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }
  if(action.type === REMOVE_ITEM){
    let itemToRemove = state.addedItems.find(item => item.id === action.id)
    let newAddedItems = state.addedItems.filter(item => item.id !== action.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    return{
      ...state,
      addedItems: newAddedItems,
      total: newTotal
    }
  }
  if(action.type === ADD_QUANTITY){
    let addedItem = state.products.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return{
      ...state,
      total: newTotal
    }
  }
  if(action.type === SUBTRACT_QUANTITY){
    let addedItem = state.products.find(item => item.id === action.id)
    if(addedItem.quantity === 1){
      let newAddedItems = state.addedItems.filter(item => item.id === action.id)
      let newTotal = state.total - addedItem.price
      return{
        ...state,
        addedItems: newAddedItems,
        total: newTotal
      }
    }else{
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return{
        ...state,
        total: newTotal
      }
    }
  }
  return state
  
}
export default CartReducer
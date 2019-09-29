import { ADD_TO_CART, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM } from "../constants/ActionTypes";

const initState = {
  products: [
    {id:'2OJhXiAjKLY9gLcFQOP4', title: 'Ultimaker 3+ Extended 3D Printer',price: 2000000, supplier: 'MakerBot'},
    {id:'B99XJ5o1AokCT20cO5MZ', title: 'Dremel DigiLab Flexible Build Plate',price: 2000000, supplier: 'MakerBot'},
    {id:'MEFRpHdPC6C8jKyamcFC', title: 'DREMEL Micro 8V',price: 2000000, supplier: 'MakerBot'},
    {id:'Napc3xDYlUvR9fCmcQ10', title: 'DigiLab 3D45 3D printer',price: 6000000, supplier: 'MakerBot'},
    {id:'YgcQAmAI3XsLMbjjcIgo', title: 'Formlabs Standard Resin Cartridge',price: 2000000, supplier: 'MakerBot'},
    {id:'jmb9ge9MlwRI7K3bkGLe', title: 'Ultimaker S5 Studio',price: 2000000, supplier: 'MakerBot'},
    {id:'lf2uKidpCKIb9dDWcx4M', title: 'Máy in 3D MakerBot Replicator 2',price: 2500000, supplier: 'MakerBot'},
    {id:'rCGJgfuCHTSxTtC2m0mv', title: 'Ultimaker Original +',price: 4000000, supplier: 'MakerBot'},
    {id:'ubXgGtTKJHvcBDYlHUJF', title: 'Ultimaker PLA Filament',price: 400000, supplier: 'MakerBot'}
  ],
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
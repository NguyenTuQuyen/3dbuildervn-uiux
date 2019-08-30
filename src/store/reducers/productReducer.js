import { CREATE_PRODUCT, CREATE_PRODUCT_ERROR } from '../constants/ActionTypes';

const initialState = {}
const productReducer = (state = initialState, action) => {
  switch(action.type){
    case CREATE_PRODUCT:
      console.log("create product", action.product)
      return state
    case CREATE_PRODUCT_ERROR: 
    console.log("create product", action.err)
    return state
    default: 
    return state
  }
}
export default productReducer

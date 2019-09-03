import { CREATE_COMMENT, CREATE_COMMENT_ERROR } from '../constants/ActionTypes';

const initialState = {}
const commentReducer = (state = initialState, action) => {
  switch(action.type){
    case CREATE_COMMENT:
      console.log("create commment success", action.comment)
      return state
    case CREATE_COMMENT_ERROR: 
    console.log("create comment err", action.err)
    return state
    default: 
    return state
  }
}
export default commentReducer

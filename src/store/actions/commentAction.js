import { CREATE_COMMENT, CREATE_COMMENT_ERROR } from '../constants/ActionTypes'
export const createComment = (comment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('comments').add({
      ...comment,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: CREATE_COMMENT, comment })
    }).catch((err) => {
      dispatch({type:CREATE_COMMENT_ERROR, err})
    })
  }
}
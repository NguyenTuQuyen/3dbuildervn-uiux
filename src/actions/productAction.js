import { CREATE_PRODUCT, CREATE_PRODUCT_ERROR } from '../constants/ActionTypes'
export const createProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('products').add({
      ...product,
      createAt: new Date()
    }).then(() => {
      dispatch(() => { type: CREATE_PRODUCT, product
      })
    }).catch((err) => {
      dispatch(() => { type: CREATE_PRODUCT_ERROR, err
      })
    })
  }
}
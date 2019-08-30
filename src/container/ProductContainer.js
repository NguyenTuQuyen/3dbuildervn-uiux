import React, { Component } from 'react'
import ProductList from '../components/product/ProductList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export class ProductContainer extends Component {
  render() {
    const { products } = this.props
    return (
      <div>
        <ProductList products={products} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(ProductContainer)

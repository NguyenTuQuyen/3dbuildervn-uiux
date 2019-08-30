import React, { Component } from 'react'
import ProductList from '../components/product/ProductList'
import {connect} from 'react-redux'

export class ProductContainer extends Component {
  render() {
    const {products} = this.props
    return (
      <div>
        <ProductList products={products}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps)(ProductContainer)

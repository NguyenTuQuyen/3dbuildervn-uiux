import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Breadcrumb extends Component {
  render() {
    const items = [
      { to: '/', label: 'Trang chủ' },
      { to: '/products', label: 'Sản phẩm' },
      { to: '/product/'+ this.props.id, label: this.props.title }
    ]
    return (
      <div className="breadcrumb-container">
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </div>
    )
  }
}
export default Breadcrumb


import React from 'react'
import { Link } from 'react-router-dom'

export const BreadcrumbProducts = ({ id, title }) => {
  const products = [
    { to: '/', label: 'Trang chủ' },
    { to: '/products', label: 'Sản phẩm' },
    { to: '/product/' + id, label: title }
  ]
  return (
    <div className="breadcrumb-container">
      {products.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export const BreadcrumbCart = () => {
  const cart = [
    { to: '/', label: 'Trang chủ' },
    { to: '/cart', label: 'Giỏ hàng' }
  ]
  return (
    <div className="breadcrumb-container">
      {cart.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </div>
  )
}
export const BreadcrumbCheckout = () => {
  const cart = [
    { to: '/', label: 'Trang chủ' },
    { to: '/cart', label: 'Giỏ hàng' },
    { to: '/checkout', label: 'Thanh toán' }
  ]
  return (
    <div className="breadcrumb-container">
      {cart.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </div>
  )
}




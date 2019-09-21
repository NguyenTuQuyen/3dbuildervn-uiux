import React from 'react'
import ProductSummary from './ProductSummary'
import Slider from "react-slick";

export const ProductList = ({ products }) => {
  return (
    <div className="product-list" >
      {products && products.map(product => {
        return (
          <ProductSummary product={product} />
        )
      })}
    </div>
  )
}

export const ProductListSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {products && products.map(product => {
        return (
          <ProductSummary product={product} />
        )
      })}
    </Slider>
  )
}
import React from 'react'
import '../styles/ProductCard.css'
import { useState } from 'react'
import prev from '../assets/icons/angle-left-solid.svg'
import next from '../assets/icons/angle-right-solid.svg'

export default function ProductCard(props) {
  const {product} = props
  const [pictureIndex, setPictureIndex] = useState(0)
  
  function changePicture (index) {
          let nextIndex = pictureIndex + index
          if (nextIndex < 0) {
            setPictureIndex(product.imagesUrl.length - 1)
          } 
          else if (nextIndex > product.imagesUrl.length) {
            setPictureIndex(0)
          }
          else setPictureIndex(nextIndex)
  }

  return (
    <div className='productCard'>
        <div className='cardTitle'>
            <h4>{product.title}</h4>
            <div>
            <div className='imageGroup'>
            <button onClick={() => changePicture(-1)}><img src={prev}/></button>
            <img className='productImage' src={product.imagesUrl[pictureIndex]} alt='product picture'></img>
            <button onClick={() => changePicture(1)}><img src={next}/></button>
            </div>
            <div>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}$</p>
            </div>
            </div>
        </div>
        <div className='cardDetails'>
            <p>Country: {product.country}</p>
            <p>Tags: {product.tags} <button>Look for a simmilar product</button> </p>
        </div>
        <div className='bottomCard'>
        <button>Add to the cart</button>
        <button>Details</button>
        </div>
    </div>
  )
}

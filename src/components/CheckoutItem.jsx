import React from 'react'
import '../styles/Checkout.css'
import ImageGroup from "./ImageGroup";

export default function CheckoutItem(props) {
    const {product, setCart, cart, index} = props
    const productItem = product.product

    function removeItem () {
        if (product.quantity > 1) {
          const newQuantity = product.quantity - 1
          setCart(prev => (
            [...prev.slice(0,index), prev[index] = {...prev[index], quantity: newQuantity}, ...prev.slice(index+1)]
        ))
        }
        if (product.quantity === 1) {
          const newCart = cart.filter((e) => e.product._id !== productItem._id)
          setCart(newCart)
        }
    }

    function addItem () {
        setCart(prev => (
          [...prev.slice(0,index), prev[index] = {...prev[index], quantity: prev[index].quantity + 1}, ...prev.slice(index+1)]
        ))
    }

  return (
    <div className='checkoutItem'>
        <ImageGroup imagesUrls={productItem.imagesUrls}/>
        <div className="details">
          <p>Title: {productItem.title}</p>
          <p>Brand: {productItem.brand}</p>
          <p>Country: {productItem.country}</p>
        </div>
        <div className='details'>
          <p>Item price: {productItem.price} ₪</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total price: {product.product.price * product.quantity} ₪</p>
        </div>
        <div className='buttonContainer'>
          <button onClick={addItem}>Add</button>
          <button onClick={removeItem}>Remove</button>
        </div>
    </div>
  )
}

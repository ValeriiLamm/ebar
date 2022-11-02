import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/slices/cartSlice';
import '../styles/Checkout.css'
import ImageGroup from "./ImageGroup";

export default function CheckoutItem(props) {
    const {product} = props
    const productItem = product.product
    const dispatch = useDispatch()

    function removeItem () {
        dispatch(cartActions.removeProduct({product:productItem,quantity:product.quantity - 1}))
    }

    function addItem () {
        dispatch(cartActions.addProduct({product:productItem,quantity:product.quantity+1}))
    }

  return (
    <div className='checkoutItem'>
        <ImageGroup imagesUrls={productItem.imagesUrls}/>
        <div className="details">
          <p>Title: <span>{productItem.title}</span></p>
          <p>Brand: <span>{productItem.brand}</span></p>
          <p>Country: <span>{productItem.country}</span></p>
        </div>
        <div className='details'>
          <p>Item price: <span>{productItem.price} ₪</span></p>
          <p>Quantity: <span>{product.quantity}</span></p>
          <p>Total price: <span>{product.product.price * product.quantity} ₪</span></p>
        </div>
        <div className='buttonContainer'>
          <button onClick={addItem}>Add</button>
          <button onClick={removeItem}>Remove</button>
        </div>
    </div>
  )
}

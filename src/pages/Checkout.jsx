import {React, useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import CheckoutItem from '../components/CheckoutItem'
import '../styles/Checkout.css'
import xmark from '../assets/icons/xmark-solid.svg'
import { useSelector } from 'react-redux'

export default function Checkout(props) {
  const cart = useSelector(state => state.cart.cart)
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(cart)
  

  useEffect(() => {
    let totalPrice = 0
    cart.forEach(element => {
         totalPrice = totalPrice + element.quantity * element.product.price
    });
    setTotalPrice(totalPrice)
  }, [cart])

  if (cart.length === 0) {
    return <Navigate to="/search" replace />;
  }

  return (
    <div className="checkoutPage">
      <div className="checkoutContainer">
        {cart.length === 0 && (
          <div className='noItems'>
            <img src={xmark} alt="xmark"/>
            <p>There are no items to checkout</p>
          </div>
        )}
        {cart.map((e, i) => (
          <CheckoutItem index={i} product={e} />
        ))}
      </div>
      <div className="checkoutBottom">
        <p>Total price: {totalPrice} ₪</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

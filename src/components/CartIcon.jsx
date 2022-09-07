import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css';
import cartIcon from '../assets/icons/cart-shopping-solid.svg'
import searchIcon from '../assets/icons/magnifying-glass-solid.svg'

export default function CartIcon(props) {
    const {cart, spin, setErrorMessage} = props
    const [quantity, setQuantity] = useState(0)
    const [picChange, setPicChange] = useState(true)
    const [pageChange, setPageChange] = useState(true)

    

    useEffect(() => {
      if ((window.location.pathname === '/checkout' || window.location.pathname === '/') && cart.length === 0) {
          setPicChange(false)
      }
      else if (window.location.pathname === '/search') {
        setPicChange(true)
      }
    }, [pageChange, cart])

    useEffect(() => {
      const quantityArr = []
      cart.forEach(element => {
        quantityArr.push(element.quantity)
      });
      const count = quantityArr.reduce((prev, curr) => prev + curr, 0)
      setQuantity(count)
    }, [cart])


  return (
    <div title={cart.length > 0 ? 'Checkout' : 'Need at least 1 item to proceed to checkout'} className='cartIconContainer'>
        <NavLink onClick={() => {
          setPageChange(prev => !prev)
          if (cart.length < 1 && window.location.pathname === "/search") {
            setErrorMessage('Need at least 1 item to proceed to checkout')
          }
        }} to={cart.length > 0 ? '/checkout' : '/search'}>
<img src={picChange ? cartIcon : searchIcon}/>
{cart.length > 0 && <div className={spin ? "circleDiv spin" : "circleDiv"}>
            {quantity}
        </div>}
        </NavLink>
    </div>
  )
}

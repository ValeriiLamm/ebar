import { useEffect } from 'react'
import {React, useState} from 'react'
import list from "../assets/icons/list-check-solid.svg"
import minus from "../assets/icons/minus-solid.svg"
import '../styles/CheckList.css'
import { useDispatch, useSelector } from 'react-redux'
import { listActions } from '../store/slices/listSlice'


export default function CheckList(props) {
    const [show,setShow] = useState(false)
    const wishList = useSelector(state => state.checklist.value)
    const dispatch = useDispatch()
    const [wishListString, setWishListString] = useState('')
    const cart = useSelector(state => state.cart.cart)
    
    useEffect(() => {
        const string = checkCart()
        setWishListString(string)
    }, [cart])


    function checkCart () {
        let allItems = ""
        wishList.forEach((element) => {
            cart.forEach((e) => {
                if (e.product.title.toLowerCase().replace(/\s/g, '').includes(element.toLowerCase().replace(/\s/g, ''))) {
                   allItems = allItems + element.toLowerCase().replace(/\s/g, '')
                }
            })
        });
        return allItems
    }

    function removeItem (item) {
              dispatch(listActions.removeFromWishList(item))
    }

  return (
    <div className='checkList'>
        <img src={list} alt="checklist" onClick={(e) => setShow(prev => !prev)}/>
        {show && <form className='checklistForm'>
            {wishList.map((e) => (
                <div key={e} className='checkItem'>
                    <label for={e}>{e}</label>
                    <input checked={wishListString.includes(e.toLowerCase().replace(/\s/g, ''))} name={e} id={e} type="radio"/>
                    <button onClick={() => removeItem(e)}><img src={minus} alt="minus"/></button>
                </div>
            ))}
        </form>}
    </div>
  )
}

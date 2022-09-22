import { useEffect } from 'react'
import {React, useState} from 'react'
import list from "../assets/icons/list-check-solid.svg"
import minus from "../assets/icons/minus-solid.svg"
import '../styles/CheckList.css'


export default function CheckList(props) {
    const [show,setShow] = useState(false)
    const [wishListString, setWishListString] = useState('')
    const {cart, wishList} = props
    
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

  return (
    <div className='checkList'>
        <img src={list} alt="checklist" onClick={(e) => setShow(prev => !prev)}/>
        {show && <form className='checklistForm'>
            {wishList.map((e) => (
                <div key={e} className='checkItem'>
                    <label for={e}>{e}</label>
                    <input checked={wishListString.includes(e.toLowerCase().replace(/\s/g, ''))} name={e} id={e} type="radio"/>
                    <button><img src={minus} alt="minus"/></button>
                </div>
            ))}
        </form>}
    </div>
  )
}

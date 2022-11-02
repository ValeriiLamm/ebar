import {React} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'
import { navActions } from '../store/slices/navSlice'; 
import { useDispatch, useSelector} from 'react-redux';


export default function Navbar(props) {
    const {nav, clickRef} = props
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const navLinks = [{path: '/search', name: "Store"}, 
    // {path: '/addProduct', name: "Add product"}
    , {path: '/', name: "Home"},
    //  {path: '/addCocktail', name: "Add a new cocktail"}
    ];

  return (
    <div className={nav ? 'navbar slideOut' : 'navbar slideIn'} ref={clickRef} onContextMenu={(e) => { 
      e.preventDefault()
      dispatch(navActions.hideNav())
      }}>
            {/* <div className='navlogo'>eBar</div> */}
            {navLinks.map((e,i) => (
             (window.location.pathname === e.path || <NavLink  key={i} to={nav ? e.path : window.location.pathname} className={nav ? 'navlink expand ' : 'navlink shrink'} onClick={() => dispatch(navActions.hideNav())}>{e.name}</NavLink>)
            ))}
            {cart.length > 0 && (window.location.pathname === '/checkout' || <NavLink to={nav ? '/checkout' : window.location.pathname} className={nav ? 'navlink expand ' : 'navlink shrink'} onClick={() => dispatch(navActions.hideNav())}>Checkout</NavLink>)}
    </div>
  )
}

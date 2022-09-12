import {React} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'


export default function Navbar(props) {
    const {nav, clickRef,setNav, cart} = props
    const navLinks = [{path: '/search', name: "Search ingredients"}, {path: '/add', name: "Add product"}, {path: '/', name: "Home"}];
    

  return (
    <div className={nav ? 'navbar slideOut' : 'navbar slideIn'} ref={clickRef} onContextMenu={(e) => { 
      e.preventDefault()
      setNav(false)}}>
            {/* <div className='navlogo'>eBar</div> */}
            {navLinks.map((e,i) => (
             (window.location.pathname === e.path || <NavLink  key={i} to={nav ? e.path : window.location.pathname} className={nav ? 'navlink expand ' : 'navlink shrink'} onClick={() => setNav(false)}>{e.name}</NavLink>)
            ))}
            {cart.length > 0 && (window.location.pathname === '/checkout' || <NavLink to={nav ? '/checkout' : window.location.pathname} className={nav ? 'navlink expand ' : 'navlink shrink'} onClick={() => setNav(false)}>Checkout</NavLink>)}
    </div>
  )
}

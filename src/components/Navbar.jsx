import {React, useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'


export default function Navbar(props) {
    const {nav, clickRef,setNav} = props
    const {show, setShow} = useState(true)
    const navLinks = [{path: '/search', name: "Search"}, {path: '/add', name: "Add product"}, {path: '/', name: "Home"}];
    

  return (
    <div className={nav ? 'navbar slideOut' : 'navbar slideIn'} ref={clickRef} onContextMenu={(e) => { 
      e.preventDefault()
      setNav(false)}}>
            {/* <div className='navlogo'>eBar</div> */}
            {navLinks.map((e,i) => (
             (window.location.pathname === e.path || <NavLink key={i} to={e.path} className={nav ? 'navlink expand ' : 'navlink shrink'} onClick={() => setNav(false)}>{e.name}</NavLink>)
            ))}
    </div>
  )
}

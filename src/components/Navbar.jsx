import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../styles/Navbar.css'


export default function Navbar(props) {
    const {nav, clickRef} = props
    
  return (
    <div className={nav ? 'navbar slideOut' : 'navbar slideIn'} ref={clickRef}>
            <div className='navlogo'>eBar</div>
            <Link to='/search' className='navlink'>Search</Link>
    </div>
  )
}

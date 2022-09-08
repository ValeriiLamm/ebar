import React from 'react'
import spinner from "../assets/icons/spinner-solid.svg"
import "../App.css"

export default function LoadingIcon() {
  return (
    <div className='loadingContainer'>
        <img src={spinner}/>
        <h3>Loading...</h3>
    </div>
  )
}

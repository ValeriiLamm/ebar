import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/CocktailItem.css"
import ImageGroup from './ImageGroup'

export default function (props) {
    const {cocktail} = props
  
  return (
    <div className='cocktailItem'>
      <NavLink to={`/cocktails/${cocktail._id}`} target="_blank">
        <div className='cocktailTitle'>
        <ImageGroup imagesUrls={[cocktail.illustrationUrl]}/>
        <h4>{cocktail.name}</h4>
        </div>
        </NavLink>
    </div>
  )
}

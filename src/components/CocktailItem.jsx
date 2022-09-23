import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/CocktailItem.css"
import ImageGroup from './ImageGroup'

export default function (props) {
    const {cocktail} = props
  
  return (
    <div className='cocktailItem'>
        <div className='cocktailTitle'>
        <ImageGroup imagesUrls={[cocktail.illustrationUrl]}/>
        <h4><NavLink to={`/cocktails/${cocktail._id}`} target="_blank">{cocktail.name}</NavLink></h4>
        </div>
    </div>
  )
}

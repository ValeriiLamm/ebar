import React from 'react'
import "../styles/CocktailItem.css"
import ImageGroup from './ImageGroup'

export default function (props) {
    const {cocktail} = props
  
  return (
    <div className='cocktailItem'>
        <div className='cocktailTitle'>
        <ImageGroup imagesUrls={[cocktail.illustrationUrl]}/>
        <h4>{cocktail.name}</h4>
        </div>
        <ul className='cocktailIngredients'>
        {cocktail.ingredients.map((e,i) => (
            <span><li>{cocktail.ammount[i]} of {e}</li><button>Add to checklist</button></span>
        ))}
        </ul>
        <p>{cocktail.recipe}</p>
    </div>
  )
}

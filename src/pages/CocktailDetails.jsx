import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCocktailById, searchForACocktail } from '../servises/server'
import "../styles/CocktailDetails.css"
import LoadingIcon from "../components/LoadingIcon.jsx"
import CocktailItem from '../components/CocktailItem'
import ImageGroup from '../components/ImageGroup'

export default function (props) {
    const {setWishList} = props
    let {_id} = useParams()
    const [cocktail, setCocktail] = useState()
    const [suggestions, setSuggestions]= useState([])
    const [loading, setLoading] = useState(false)

    async function searchForaCocktails() {
      try {
        setLoading(true);
        const cocktailList = await searchForACocktail({
          tags: cocktail.tags,
          ingredients: cocktail.ingredients
        });
        setLoading(false);
        setSuggestions(cocktailList.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    function addToWishList (item) {
        setWishList(prev => [...prev, item])
    }

  useEffect(() => {
    (async () => {
      const cocktail = await getCocktailById(_id)
      setCocktail(cocktail.data.data)
    })()
  }, [])

  useEffect(() => {
    searchForaCocktails()
  }, [cocktail])

  return (
    <div className='cocktailDetailsContainer'>
        <div>
        {cocktail && <div className='cocktailDetails'>
        {!cocktail && loading && <LoadingIcon/>}
        <div className='cocktailHeader'>
        <ImageGroup imagesUrls={[cocktail.illustrationUrl]}/>
        <div>
        <h4>{cocktail.name}</h4>
        <h5>Ingredients:</h5>
        <ul>{cocktail.ingredients.map((e) => (
          <li><span>{e}</span><button onClick={() => addToWishList(e)}>To checklist</button></li>
        ))}</ul>
        </div>
        </div>
        <p>{cocktail.recipe}</p>
        </div>}
        <h4>Simmilar cocktails</h4>
        <div className='suggestions'>
        {suggestions.length === 0 && <h4>This one is unique</h4>}
        {suggestions.map((e) => (
            <CocktailItem cocktail={e}/>
          ))}  
        </div>
        </div>
    </div>
  )
}

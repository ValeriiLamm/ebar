import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCocktailById, searchForACocktail } from '../servises/server'
import "../styles/CocktailDetails.css"
import LoadingIcon from "../components/LoadingIcon.jsx"
import CocktailItem from '../components/CocktailItem'
import ImageGroup from '../components/ImageGroup'
import { useDispatch } from 'react-redux'
import { listActions } from '../store/slices/listSlice'

export default function (props) {
    const dispatch = useDispatch()
    let {_id} = useParams()
    const [cocktail, setCocktail] = useState()
    const [suggestions, setSuggestions]= useState([])
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    async function searchForaCocktails() {
      try {
        setLoading(true);
        const cocktailList = await searchForACocktail({
          // tags: cocktail.tags,
          ingredients: cocktail.ingredients
        });
        setLoading(false);
        setSuggestions(cocktailList.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    // function addToWishList (item) {
    //     setWishList(prev => [...prev, item])
    // }

  useEffect(() => {
    (async () => {
      const cocktail = await getCocktailById(_id)
      setCocktail(cocktail.data.data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      setLoading2(true)
      const suggestions = await searchForaCocktails()
      setLoading2(false)
    })()
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
          <li><span>{e}</span><button onClick={() => dispatch(listActions.addToWishList(e))}>To checklist</button></li>
        ))}</ul>
        </div>
        </div>
        <p>{cocktail.recipe}</p>
        </div>}
        <h4>Simmilar cocktails</h4>
        <div className='suggestions'>
        {suggestions.length === 0 && !loading && <h4>This one is unique</h4>}
        {loading2 && <LoadingIcon/>}
        {suggestions.map((e) => (
            <CocktailItem cocktail={e}/>
          ))}  
        </div>
        </div>
    </div>
  )
}

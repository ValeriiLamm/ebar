import React, { useState } from "react";
import CocktailItem from "../components/CocktailItem";
import LoadingIcon from "../components/LoadingIcon";
import { searchForACocktail } from "../servises/server";
import { useDispatch} from 'react-redux';
import { errorActions } from "../store/slices/errorSlice";
import "../styles/Homepage.css";

export default function Homepage(props) {
  const dispatch = useDispatch()
  const [ingredients, setIngredients] = useState([""]);
  const [tags, setTags] = useState([""]);
  const [title, setTitle] = useState("");
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const handleNewIngredients = (value, index) => {
    setIngredients((prev) => [
      ...prev.slice(0, index),
      (prev[index] = value),
      ...prev.slice(index + 1),
    ]);
  };

  const addNewIngredients = (e, index) => {
    e.preventDefault();
    if (ingredients.length < 5) {
      setIngredients((prev) => [
        ...prev.slice(0, index),
        (prev[index] = ""),
        ...prev.slice(index + 1),
      ]);
    } else dispatch(errorActions.setError("No more then 5 ingredients"));
  };

  const removeTheIngredient = (e, index) => {
    e.preventDefault();
    if (ingredients.length > 1) {
      setIngredients((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    } else dispatch(errorActions.setError("Need at least one ingredient"));
  };

  const addNewTag = (e, index) => {
    e.preventDefault();
    if (tags.length < 5) {
      setTags((prev) => [
        ...prev.slice(0, index),
        (prev[index] = ""),
        ...prev.slice(index + 1),
      ]);
    } else dispatch(errorActions.setError("No more then 5 tags"));
  };

  const removeTheTag = (e, index) => {
    e.preventDefault();
    if (tags.length > 1) {
      setTags((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } else dispatch(errorActions.setError("Need at least one tag"));
  };

  const handleNewTag = (value, index) => {
    setTags((prev) => [
      ...prev.slice(0, index),
      (prev[index] = value),
      ...prev.slice(index + 1),
    ]);
  };

  async function searchForaCocktails() {
    try {
      setLoading(true);
      const cocktailList = await searchForACocktail({
        name: title,
        tags: tags,
        ingredients: ingredients,
      });
      setLoading(false);
      if (cocktailList.data.data.length === 0) {
        dispatch(errorActions.setError('No cocktails were found'));
      }
      setCocktailList(cocktailList.data.data);
    } catch (err) {
      console.log(err);
      dispatch(errorActions.setError(err.data.message));
    }
  }

  return (
    <div className="homepage">
      <h3>What are you having today?</h3>
      <div className="search">
        {loading && <LoadingIcon/>}
        {cocktailList.length > 0 && <h4>Suggestions:</h4>}
        {cocktailList.length > 0 && <div className="cocktailContainer">
          {cocktailList.map((e,i) => (
            <CocktailItem key={i} cocktail={e}/>
          ))}
          </div>}
        {cocktailList.length < 1 && !loading && (
          <>
            <h4>What ingredients do you have?</h4>
            <div className="ingredients">
              {ingredients.map((e, i) => (
                <div key={i}>
                  <input
                    onChange={(event) =>
                      handleNewIngredients(event.target.value, i)
                    }
                    type="text"
                    value={ingredients[i]}
                  />
                  {ingredients.length > 1 &&
                    (!(i === ingredients.length - 1) || i === 4) && (
                      <button
                        onClick={(event) => removeTheIngredient(event, i)}
                        className="removeButton"
                      >
                        Remove
                      </button>
                    )}
                  {ingredients.length < 5 && i === ingredients.length - 1 && (
                    <button
                      onClick={(event) => addNewIngredients(event, i + 1)}
                    >
                      Add
                    </button>
                  )}
                </div>
              ))}
            </div>
            <h4>What kind of drink would you like?</h4>
            <div className="cocktailTags">
              {tags.map((e, i) => (
                <div key={i}>
                  <input
                    type="text"
                    onChange={(e) => handleNewTag(e.target.value, i)}
                  />
                  {tags.length > 1 && (!(i === tags.length - 1) || i === 4) && (
                    <button onClick={(e) => removeTheTag(e, i)}>Remove</button>
                  )}
                  {tags.length < 5 && i === tags.length - 1 && (
                    <button onClick={(e) => addNewTag(e, i + 1)}>
                      Add tag
                    </button>
                  )}
                </div>
              ))}
            </div>
            <h4>Looking for a specific cocktail? Type the name!</h4>
            <input
              className="name"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <button className="searchButton" onClick={searchForaCocktails}>
              Search
            </button>
          </>
        )}
        {cocktailList.length > 0 && <button onClick={(e) => setCocktailList([])} className="searchButton">Another search</button>}
      </div>
    </div>
  );
}

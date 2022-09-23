import { React, useState } from "react";
import "../styles/AddProduct.css";
import { addNewProduct } from "../servises/server";

export default function AddCocktail(props) {
  const { setErrorMessage } = props;
  const [tags, setTags] = useState([""]);
  const [garnish, setGarnish] = useState('')
  const [ingredients, setIngredients] = useState([""]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const addNewTag = (e, index) => {
    e.preventDefault();
    if (tags.length < 5) {
      setTags((prev) => [
        ...prev.slice(0, index),
        (prev[index] = ""),
        ...prev.slice(index + 1),
      ]);
    } else setErrorMessage("No more then 5 tags");
  };

  const removeTheTag = (e, index) => {
    e.preventDefault();
    if (tags.length > 1) {
      setTags((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } else setErrorMessage("Need at least one ingredient");
  };

  const handleNewTag = (value, index) => {
    setTags((prev) => [
      ...prev.slice(0, index),
      (prev[index] = value),
      ...prev.slice(index + 1),
    ]);
  };

  const handleNewIngredients = (value, index) => {
    setIngredients((prev) => [
      ...prev.slice(0, index),
      (prev[index] = value),
      ...prev.slice(index + 1),
    ]);
  };

  const removeTheIngredients = (e, index) => {
    e.preventDefault();
    if (tags.length > 1) {
      setIngredients((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } else setErrorMessage("Need at least one tag");
  };

  const addNewIngredients = (e, index) => {
    e.preventDefault();
    if (tags.length < 5) {
      setIngredients((prev) => [
        ...prev.slice(0, index),
        (prev[index] = ""),
        ...prev.slice(index + 1),
      ]);
    } else setErrorMessage("No more then 5 tags");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", title);
    formData.append("tags", JSON.stringify(tags));
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("garnish", garnish);
    formData.append(`image`, image);

    try {
      const upload = await addNewProduct(formData);
      if (upload.data.status === "ok") {
        setErrorMessage("Recipe Uploaded Succesfully");
      } else throw upload;
    } catch (err) {
      setErrorMessage(err.data.message.message);
    }
  };

  return (
    <div className="addProductPage">
      <form className="addProductForm">
        <h3>Add a new recipe</h3>
        <div className="inputGroup">
          <label>Name:</label>
          <input
            className="nameInput"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
        </div>
        <div className="inputGroup tag">
          <label>Ingredients:</label>
          {ingredients.map((e, i) => (
            <div className="tagDiv" key={i}>
              <input
                type="text"
                onChange={(e) => handleNewIngredients(e.target.value, i)}
              />
              {ingredients.length > 1 && !(i === ingredients.length - 1) && (
                <button onClick={(e) => removeTheIngredients(e, i)}>Remove</button>
              )}
              {ingredients.length < 5 && i === ingredients.length - 1 && (
                <button onClick={(e) => addNewIngredients(e, i + 1)}>Add tag</button>
              )}
            </div>
          ))}
        </div>
        <div className="inputGroup tag">
          <label>Tags:</label>
          {tags.map((e, i) => (
            <div className="tagDiv" key={i}>
              <input
                type="text"
                onChange={(e) => handleNewTag(e.target.value, i)}
              />
              {tags.length > 1 && !(i === tags.length - 1) && (
                <button onClick={(e) => removeTheTag(e, i)}>Remove</button>
              )}
              {tags.length < 5 && i === tags.length - 1 && (
                <button onClick={(e) => addNewTag(e, i + 1)}>Add tag</button>
              )}
            </div>
          ))}
        </div>
        <div className="inputGroup">
          <label>Garnish:</label>
          <input
            className="nameInput"
            onChange={(e) => setGarnish(e.target.value)}
            value={title}
            type="text"
          />
        </div>
        <div className="inputGroup pictures">
          <label>Illustration:</label>
          <div>
            <input onChange={(e) => setImage(e.target.value)} type="file" />
          </div>
        </div>
        <button className="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

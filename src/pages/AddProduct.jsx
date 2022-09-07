import { React, useState } from "react";
import "../styles/AddProduct.css";
import { addNewProduct } from "../servises/server";
import { upload } from "@testing-library/user-event/dist/upload";

export default function AddProduct(props) {
  const {setErrorMessage} = props
  const [countryList, setCountryList] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ]);
  const [categories, setCategory] = useState([
    {
      primaryCategory: "Hard Liquor",
      secondaryCategory: [
        "Vodka",
        "Whiskey",
        "Bourbon",
        "Rum",
        "Tequila",
        "Brandy",
        "Grain Alcohol",
        "Absinthe",
        "Brandy",
        "Mezcal",
        "Cognac",
      ],
    },
    {
      primaryCategory: "Wine",
      secondaryCategory: ["Red", "White", "Rose", "Sparkling Wine"],
    },
    {
      primaryCategory: "Liqueur",
      secondaryCategory: [
        "Amaretto",
        "Irish Cream",
        "Campari",
        "Cointreau",
        "Frangelico",
        "Kahlúa",
        "St-Germain",
        "Sambuca",
      ],
    },
    { primaryCategory: "Syrups", secondaryCategory: ["Plain", "Flavored"] },
    {
      primaryCategory: "Utensils",
      secondaryCategory: [
        "Glasses",
        "Shakers",
        "Spoons",
        "Kits",
        "Strainers",
        "Jiggers",
      ],
    },
  ]);
  const [selectedCategories, setSelectedCategory] = useState(false);
  const [secondaryCategory, setSecondaryCategory] = useState("")
  const [tags, setTags] = useState([""]);
  const [images, setImages] = useState([""]);
  const [title, setTitle] = useState('')
  const [price,setPrice] = useState(0)
  const [brand, setBrand] = useState('')
  const [country, setCountry] = useState('')

  const handleCategorySelect = (value) => {
    const selected = categories.filter((e) => e.primaryCategory === value);
    setSelectedCategory(selected[0]);
  };

  const addNewTag = (e, index) => {
    e.preventDefault();
	if (tags.length < 5) {
		setTags((prev) => [
			...prev.slice(0, index),
			(prev[index] = ""),
			...prev.slice(index + 1),
		  ]);
	}
	else setErrorMessage('No more then 5 tags')
  };

  const removeTheTag = (e, index) => {
    e.preventDefault()
    if (tags.length > 1) {
      setTags(prev => [...prev.slice(0,index), ...prev.slice(index + 1)])
    }
    else setErrorMessage('Need at least one tag')
  }

  const addNewImage = (e,index) => {
	e.preventDefault();
	if (images.length < 3) {
		setImages((prev) => [
			...prev.slice(0, index),
			(prev[index] = "Select a New Image"),
			...prev.slice(index + 1),
		  ]);
	}
    else setErrorMessage('No more then three images')
  }

  const removeTheImage = (e,index) =>{
    e.preventDefault()
    if (images.length > 1) {
      setImages(prev => [...prev.slice(0,index), ...prev.slice(index + 1)])
    }
    else setErrorMessage('Need at least one picture')
  }

  const handleNewTag = (value, index) => {
    setTags((prev) => [
      ...prev.slice(0, index),
      (prev[index] = value),
      ...prev.slice(index + 1),
    ]);
  };

  const handleNewImage = (image, index) => {
	setImages((prev) => [
		...prev.slice(0, index),
		(prev[index] = image),
		...prev.slice(index + 1),
	  ]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title);
    formData.append('price', price)
    formData.append('brand', brand)
    formData.append('country', country)
    let productCategory = {primaryCategory: selectedCategories.primaryCategory, secondaryCategory: secondaryCategory}
    let formDataCategory = JSON.stringify(productCategory)
    formData.append('category', formDataCategory)
    formData.append('tags', JSON.stringify(tags))

    for (let i=0; i<images.length; i++) {
      formData.append(`images`, images[i])
    }

    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    try {
      const upload = await addNewProduct(formData)
      if (upload.data.status === 'ok') {
        setErrorMessage('Product Uploaded Succesfully')
      }
      else throw upload
    }
    catch (err) {
      setErrorMessage(err.data.message.message)
    }
  }

  return (
    <div className="addProductPage">
      <form className="addProductForm">
	  <h3>Add a new product</h3>
        <div className="inputGroup">
          <label>Title:</label>
          <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" />
        </div>
        <div className="inputGroup">
          <label>Price:</label>
          <input onChange={(e) => setPrice(e.target.value)} type="number" />
        </div>
        <div className="inputGroup">
          <label>Brand:</label>
          <input onChange={(e) => setBrand(e.target.value)} type="text" />
        </div>
        <div className="inputGroup select">
          <label>Country:</label>
          <select onChange={(e) => setCountry(e.target.value)}>
		  <option defaultValue>---Chose a country---</option>
            {countryList.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className="inputGroup select">
          <label>Category:</label>
          <select onChange={(e) => handleCategorySelect(e.target.value)}>
			<option defaultValue>---Chose a category---</option>
            {categories.map((e) => (
              <option value={e.primaryCategory}>{e.primaryCategory}</option>
            ))}
          </select>
        </div>
        {selectedCategories && (
          <div className="inputGroup select">
            <label>Subcategory::</label>
            <select onChange={(e) => {setSecondaryCategory(e.target.value)}}>
			<option value={''} defaultValue>---Chose a category---</option>
              {selectedCategories.secondaryCategory.map((e,i) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
        )}
        <div className="inputGroup tag">
          <label>Tags:</label>
          {tags.map((e, i) => (
            <div className="tagDiv" key={i}>
              <input
                type="text"
                onChange={(e) => handleNewTag(e.target.value, i)}
              />
              {tags.length > 1 && (!(i === tags.length - 1) && <button onClick={(e) => removeTheTag(e,i)}>Remove</button>)}
              {tags.length < 5 && (i === tags.length - 1 && <button onClick={(e) => addNewTag(e, i + 1)}>Add tag</button>)}
            </div>
          ))}
        </div>
        <div className="inputGroup pictures">
          <label>Pictures:</label>
          {images.map((e, i) => (
            <div key={i}>
              <input onChange={(e) => handleNewImage(e.target.files[0],i)} type="file" />
              {i > 1 && <button onClick={(e) => removeTheImage(e,i)}>Remove</button>}
              {images.length < 3 && (i === images.length - 1 && <button onClick={(e) => addNewImage(e, i + 1)}>Add another image</button>)}
            </div>
          ))}
        </div>
		<button className="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

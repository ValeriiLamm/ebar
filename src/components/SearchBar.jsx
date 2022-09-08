import React from "react";
import "../styles/Search.css";

export default function SearchBar(props) {
  const {priceArr, product, setProduct, countryList} = props


  return (
    <div className="searchBar">
      <div className="searchAndCountryGroup">
      <div className="searchGroup">
        <label className="searchLabel">Search</label>
        <input
          value={`${product.title}`}
          onChange={(e) => {
            setProduct((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
          type="text"
          className="searchInput"
        ></input>
      </div>
      <div className="inputGroup select up">
        <label>Country:</label>
        <select onChange={(e) => setProduct(prev => ({
          ...prev, country: e.target.value
        }))}>
          <option value={""} defaultValue>---Chose a country---</option>
          {countryList.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
      </div>
      <div className="sliderGroup">
        <span>Price</span>
        <div>
        <div>
        <label>Min</label>
        <input type={'number'} id="min" min={priceArr[0]} max={priceArr[1]} placeholder={priceArr[0]}
        onChange={(e) => {
          setProduct(prev => ({
            ...prev, price: [Number(e.target.value), prev.price[1]]
          }))
        }}/>
        </div>
        <div>
        <label>Max</label>
        <input type={'number'} id="max" min={priceArr[0]} max={priceArr[1]} placeholder={priceArr[1]}
                onChange={(e) => {
                  setProduct(prev => ({
                    ...prev, price: [prev.price[0], Number(e.target.value)]
                  }))
                }}/>
        </div>
        </div>
        {/* <span>{priceArr[0]}</span>
        <input
          min={priceArr[0]}
          max={priceArr[1]}
          onChange={(e) => {
            setProduct((prev) => ({
              ...prev,
              price: [...priceArr[0], +e.target.value],
            }));
            console.log(product)
          }}
          type="range"
        />
        <span>{priceArr[1]}</span> */}
      </div>
    </div>
  );
}

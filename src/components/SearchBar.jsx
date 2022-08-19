import React from "react";
import { useState } from 'react'
import "../styles/Search.css";

export default function SearchBar() {
    const [categories, setCategories] = useState([{category: 'Whiskey', subcategory: ['Bourbon', 'Scotch']}, {category: 'Vodka', subcategory: []}])
    const [openDropdown, setDropdown] = useState(false)

  return (
    <div className="searchBar">
      <div className="searchGroup">
        <label className="searchLabel">Search</label>
        <input type="text" className="searchInput"></input>
      </div>
      <div className={openDropdown ? "options" : "options invis"}>
      </div>
      <button onClick={() => setDropdown(prev => !prev)}>Options</button>
      <button>Search</button>
    </div>
  );
}

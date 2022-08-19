import React from 'react'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import '../styles/Search.css'
import placeholderPicture from '../assets/images/absolut-vodka-70cl_pc8cpr7wgvaw9pve.jpg'
import pinkPlaceholder from '../assets/images/1505529-527Wx527H.jpg'

export default function Search() {
  const [products, setProducts] = useState([{title: 'Absolut', country: 'Sweden', price: 69.42, category: 'Vodka', subcategory: '', tags: ['Premium'], imagesUrl: [placeholderPicture, pinkPlaceholder], id: Math.random() * 100000}, {title: 'Absolut', country: 'Sweden', price: 69.42, category: 'Vodka', subcategory: '', tags: ['Premium'], imagesUrl: [placeholderPicture, pinkPlaceholder], id: Math.random() * 100000}, {title: 'Absolut', country: 'Sweden', price: 69.42, category: 'Vodka', subcategory: '', tags: ['Premium'], imagesUrl: [placeholderPicture, pinkPlaceholder], id: Math.random() * 100000},{title: 'Absolut', country: 'Sweden', price: 69.42, category: 'Vodka', subcategory: '', tags: ['Premium'], imagesUrl: [placeholderPicture, pinkPlaceholder], id: Math.random() * 100000}])
  return (
    <div className='searchPage'>
      <SearchBar/>
      <div className='resultContainer'>
       {products.map((element) => (
      <ProductCard key={element.id} product={element}/>
       ))}
      </div>
    </div>
  )
}

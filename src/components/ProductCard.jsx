import {React, useEffect, useRef} from "react";
import "../styles/ProductCard.css";
import { useState } from "react";
import prev from "../assets/icons/angle-left-solid.svg";
import next from "../assets/icons/angle-right-solid.svg";
import ImageGroup from "./ImageGroup";

export default function ProductCard(props) {
  const { product, searchProduct, setProduct, setCart, cart, setSpin, setIndividualProduct } = props;
  const [green, setGreen] = useState(false)
  const [red, setRed] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const quantityRef = useRef(0)

  function addProduct () {
    setGreen(true)
    setSpin(true)
    quantityRef.current = quantityRef.current + 1
    if (cart.some((element) => element.product._id === product._id)) {
      let newCart = cart.filter(element => element.product._id !== product._id)
      newCart = [...newCart, {product: product, quantity: quantityRef.current}]
      setCart(newCart)
    }
    else {
      setCart(cart.concat([{product: product, quantity: quantityRef.current}]))

  }
    setTimeout(() => setGreen(false), 1000)
    setTimeout(() => setSpin(false), 500)
  }

  function removeProduct () {
    setRed(true)
    setSpin(true)
    if (quantityRef.current > 0) {
      quantityRef.current = quantityRef.current - 1
    }
    if (quantityRef.current > 0) {
      let newCart = cart.filter(element => element.product._id !== product._id)
      newCart = [...newCart, {product: product, quantity: quantityRef.current}]
      setCart(newCart)
    }
    else {
      let newCart = cart.filter(element => element.product._id !== product._id)
      setCart(newCart)
    }
    setTimeout(() => setRed(false), 1000)
    setTimeout(() => setSpin(false), 500)
  }

  return (
    <div className="productCard">
      <div className="cardTitle">
        <h4>{product.title}</h4>
        <div>
          <ImageGroup imagesUrls={product.imagesUrls}/>
          <div>
            <p>Category: {product.category.primaryCategory}</p>
            <p>Subcategory: {product.category.secondaryCategory}</p>
            <p>Price: {product.price} ₪</p>
          </div>
        </div>
      </div>
      <div className="cardDetails">
        <p>Country: {product.country}</p>
        <p>
          Tags:{" "}
          {product.tags.map((e, i) => (
            <button
              onClick={(event) => {
                if (!searchProduct.tags.includes(e)) {
                  setProduct((prev) => ({
                    ...prev,
                    tags: [...prev.tags, event.target.value],
                  }));
                } else {
                  setProduct((prev) => ({
                    ...prev,
                    tags: prev.tags.filter((e) => e !== event.target.value),
                  }));
                }
              }}
              value={e}
              key={e}
              className={searchProduct.tags.includes(e) ? 'selected' : ''}
            >
              {e}{" "}
            </button>
          ))}
          {/* <button>Look for a simmilar product</button> */}
        </p>
      </div>
      <div className="bottomCard">
        <button onClick={addProduct} className={green ? "green" : ""}>Add to the cart</button>
        <button onClick={removeProduct} className={red ? "red" : ""} disabled={!cart.some(e => e.product._id === product._id)}>Remove</button>
      </div>
    </div>
  );
}

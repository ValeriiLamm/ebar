import {React, useRef} from "react";
import "../styles/ProductCard.css";
import { useState } from "react";
import ImageGroup from "./ImageGroup";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

export default function ProductCard(props) {
  const { product, searchProduct, setProduct, setSpin} = props;
  const [green, setGreen] = useState(false)
  const [red, setRed] = useState(false)
  const quantityRef = useRef(0)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  function addProduct () {
    setGreen(true)
    setSpin(true)
    quantityRef.current = quantityRef.current + 1
    dispatch(cartActions.addProduct({product,quantity: quantityRef.current}))
    setTimeout(() => setGreen(false), 1000)
    setTimeout(() => setSpin(false), 500)
  }

  function removeProduct () {
    setRed(true)
    setSpin(true)
    if (quantityRef.current > 0) {
      quantityRef.current = quantityRef.current - 1
    }
    dispatch(cartActions.removeProduct({product,quantity:quantityRef.current}))
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
            <p className="price">Price: {product.price} ₪</p>
          </div>
        </div>
      </div>
      <div className="cardDetails">
        <p className="country">Country: {product.country}</p>
        <p className="productTags">
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

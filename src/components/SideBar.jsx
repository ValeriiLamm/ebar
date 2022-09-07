import React from "react";
import { useState, useEffect } from "react";
import "../styles/SideBar.css";

export default function SideBar(props) {
  const { tags, brands, setProduct, product } = props;
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

  return (
    <div className="sideBar">
      {categories.map((e) => (
        <div key={e.primaryCategory}>
          <h4 className="primaryCategory">
            <button
              value={e.primaryCategory}
              className={
                product.category &&
                product.category.primaryCategory === e.primaryCategory
                  ? "selected"
                  : ""
              }
              onClick={(e) => {
                if ((product.category && product.category.primaryCategory !== e.target.value)) {
                  setProduct((prev) => ({
                    ...prev,
                    category: { primaryCategory: e.target.value },
                  }));
                }
                else {
                  setProduct((prev) => ({
                    ...prev,
                    category: { primaryCategory: "" },
                  }));
                }
              }}
            >
              {e.primaryCategory}
            </button>
          </h4>
          {product.category &&
            product.category.primaryCategory === e.primaryCategory && (
              <div className={"secondaryCategoryContainer"}>
                {e.secondaryCategory.map((element) => (
                  <button
                    value={element}
                    className={
                      product.category &&
                      product.category.secondaryCategory === element
                        ? "selected"
                        : ""
                    }
                    onClick={(e) =>
                      setProduct((prev) => ({
                        ...prev,
                        category: {
                          ...prev.category,
                          secondaryCategory: e.target.value,
                        },
                      }))
                    }
                    key={element}
                  >
                    {element}
                  </button>
                ))}
              </div>
            )}
        </div>
      ))}
      <h4>Tags</h4>
      <div className="secondaryCategoryContainer">
        {tags.map((e) => (
          <button
            key={e}
            className={product.tags.includes(e) ? "selected" : ""}
            value={e}
            onClick={(event) => {
              if (!product.tags.includes(e)) {
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
          >
            {e}
          </button>
        ))}
      </div>
      <h4>Brands</h4>
      <div className="secondaryCategoryContainer">
        {brands.map((e) => (
          <button
            key={e}
            value={e}
            onClick={(event) => {
              if (product.brand !== event.target.value) {
                setProduct((prev) => ({
                  ...prev,
                  brand: event.target.value,
                }));
              }
              else {
                setProduct((prev) => ({
                  ...prev,
                  brand: "",
                }));
              }

            }}
            className={product.brand === e ? 'selected' : ''}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}

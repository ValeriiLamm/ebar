import {React, useState} from "react";
import prev from "../assets/icons/angle-left-solid.svg";
import next from "../assets/icons/angle-right-solid.svg";

export default function ImageGroup(props) {
    const {imagesUrls} = props
    const [pictureIndex, setPictureIndex] = useState(0);

    function changePicture(index) {
        let nextIndex = pictureIndex + index;
        if (nextIndex < 0) {
          setPictureIndex(imagesUrls.length - 1);
        } else if (nextIndex >= imagesUrls.length) {
          setPictureIndex(0);
        } else setPictureIndex(nextIndex);
      }
  return (
    <div className="imageGroup">
    <button
      style={{ opacity: imagesUrls.length > 1 ? "1" : "0" }}
      onClick={() => changePicture(-1)}
    >
      <img src={prev} />
    </button>
    <img
      className="productImage"
      src={imagesUrls[pictureIndex]}
      alt="product picture"
    ></img>
    <button
      style={{ opacity: imagesUrls.length > 1 ? "1" : "0" }}
      onClick={() => changePicture(1)}
    >
      <img src={next} />
    </button>
  </div>
  )
}

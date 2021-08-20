import React from "react";

function ImagePopup() {
 return (
  <>
   <div className="popup popup_image-card">
    <div className="popup__image-container">
     <button className="popup__close-icon popup__close-image" type="button"> </button>
     <img alt="#" className="popup__img" src="#"/>
     <h2 className="popup__img-signature"> </h2>
    </div>
   </div>
  </>
 );
}
export default ImagePopup;
import React from "react";

function PopupWithForm(props) {
 return (
  <>
   <div className={`popup popup_${props.popup}`}>
    <div className="popup__container">
     <button className="popup__close-icon" type="button"></button>
     <h2 className="popup__title">{props.title}</h2>
     <form className="popup__data" name={props.name} noValidate>
      {props.children}
     </form>
    </div>
   </div>
  </>
 );
}

export default PopupWithForm;
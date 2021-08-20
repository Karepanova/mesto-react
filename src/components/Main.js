import pen from "../images/pen.svg";
import React from "react";

function Main(props) {

 return (
 <main className="content">
  <section className="profile">

   <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
    <img alt="Аватар" className="profile__avatar" src="#"/>
    <img alt="Карандаш" className="profile__avatar-pen" src={pen} />
   </div>
   <div className="profile__info">
    <div className="profile__record">
     <h1 className="profile__title">...</h1>
     <button className="profile__edit-button" type="button" onClick={props.onEditProfile}> </button>
    </div>
    <p className="profile__subtitle">...</p>
   </div>
   <button className="profile__add-button" type="button" onClick={props.onAddPlace}> </button>
  </section>

  <section className="elements">

  </section>
 </main>
 )
}
export default Main;
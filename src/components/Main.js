import pen from "../images/pen.svg";
import React from "react";

function Main() {

 function handleEditAvatarClick() {
  document.querySelector('.popup_avatar-form').classList.add('popup_opened');
 }

 function handleEditProfileClick() {
  document.querySelector('.popup_edit-profile').classList.add('popup_opened');
 }

 function handleAddPlaceClick() {
  document.querySelector('.popup_new-card').classList.add('popup_opened');
 }

 return (
 <main className="content">
  <section className="profile">

   <div className="profile__avatar-wrapper" onClick={handleEditAvatarClick}>
    <img alt="Аватар" className="profile__avatar" src="#"/>
    <img alt="Карандаш" className="profile__avatar-pen" src={pen} />
   </div>
   <div className="profile__info">
    <div className="profile__record">
     <h1 className="profile__title">...</h1>
     <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
    </div>
    <p className="profile__subtitle">...</p>
   </div>
   <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
  </section>

  <section className="elements">

  </section>
 </main>
 )
}
export default Main;
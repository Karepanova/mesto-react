import React from 'react';
import headerLogo from '../images/header-logo.svg';
import pen from '../images/pen.svg';


function App() {
 return (
  <div>

   <div className="container">
    <div className="page">
     <header className="header">
      <img alt="Лого" className="header__logo" src={headerLogo} />
     </header>

     <main className="content">
      <section className="profile">

       <div className="profile__avatar-wrapper">
        <img alt="Аватар" className="profile__avatar" src="#"/>
        <img alt="Карандаш" className="profile__avatar-pen" src={pen} />
       </div>
       <div className="profile__info">
        <div className="profile__record">
         <h1 className="profile__title">...</h1>
         <button className="profile__edit-button" type="button"></button>
        </div>
        <p className="profile__subtitle">...</p>
       </div>
       <button className="profile__add-button" type="button"></button>
      </section>

      <section className="elements">

      </section>
     </main>

     <footer className="footer">
      <p className="footer__author"> &copy; 2021 Mesto Russia</p>
     </footer>
    </div>
   </div>


   <div className="popup popup_edit-profile">
    <div className="popup__container">
     <button className="popup__close-icon popup__close-profile" type="button"></button>
     <h2 className="popup__title">Редактировать профиль</h2>
     <form className="popup__data" name="profile-form-name" novalidate>
      <input className="popup__info popup__info_profile_name" id="popup-name" maxlength="40" minlength="2" name="name"
             placeholder="Имя" required type="text" value="" />
       <span className="popup__error" id="popup-name-error"></span>
       <input className="popup__info popup__info_profile_about" id="popup-text" maxlength="200" minlength="2"
              name="about" placeholder="О себе" required type="text" value="" />
        <span className="popup__error" id="popup-text-error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
     </form>
    </div>
   </div>


   <div className="popup popup_new-card">
    <div className="popup__container">
     <button className="popup__close-icon popup__close-new-card" type="button"></button>
     <h2 className="popup__title">Новое место</h2>
     <form className="popup__data" name="add-card-form-name" novalidate>
      <input className="popup__info popup__info_naming" id="name-card" maxlength="30" minlength="2"
             name="name" placeholder="Название" required type="text" value="" />
       <span className="popup__error" id="name-card-error"></span>
       <input className="popup__info popup__info_link" id="link" name="link"
              placeholder="Ссылка на картинку" required type="url" value="" />
        <span className="popup__error" id="link-error"></span>
        <button className="popup__button popup__button_invalid" type="submit">Создать</button>
     </form>
    </div>
   </div>

   <div className="popup popup_avatar-form">
    <div className="popup__container">
     <button className="popup__close-icon popup__close-new-card" type="button"></button>
     <h2 className="popup__title">Обновить аватар</h2>
     <form className="popup__data" name="edit-form-avatar" novalidate>
      <input className="popup__info popup__info_avatar" id="link-avatar" name="avatar" placeholder="Ссылка на картинку"
             required type="url" value="" />
       <span className="popup__error" id="link-avatar-error"></span>
       <button className="popup__button popup__button_invalid" type="submit">Сохранить</button>
     </form>
    </div>
   </div>


   <div className="popup popup_confirm">
    <div className="popup__container">
     <button className="popup__close-icon" type="button"></button>
     <h2 className="popup__title">Вы уверены?</h2>
     <form className="popup__data" novalidate>
      <button className="popup__button" type="submit" value="Да">Да</button>
     </form>
    </div>
   </div>


   <div className="popup popup_image-card">
    <div className="popup__image-container">
     <button className="popup__close-icon popup__close-image" type="button"></button>
     <img alt="#" className="popup__img" src="#"/>
     <h2 className="popup__img-signature"></h2>
    </div>
   </div>


   <template id="elements-template">
    <div className="element">
     <button className="profile__delete" type="button"></button>
     <div className="element__img-block">
      <img alt="" className="element__img" src="#"/>
     </div>
     <div className="element__card">
      <h2 className="element__text"></h2>
      <div className="element__group">
       <button className="element__button" type="button"></button>
       <span className="element__count-likes">0</span>
      </div>
     </div>
    </div>
   </template>

  </div>
);
}

export default App;

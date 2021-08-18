import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from "./PopupWithForm";

function App() {
 return (
  <div>
   <div className="container">
    <div className="page">
     <Header />
     <Main />
     <Footer />
    </div>
   </div>


   <PopupWithForm title="Редактировать профиль" name="profile-form-name" popup="edit-profile">
    <input className="popup__info popup__info_profile_name" id="popup-name" maxLength="40" minLength="2" name="name"
           placeholder="Имя" required type="text" value=""/>
    <span className="popup__error" id="popup-name-error"> </span>
    <input className="popup__info popup__info_profile_about" id="popup-text" maxLength="200" minLength="2"
           name="about" placeholder="О себе" required type="text" value=""/>
    <span className="popup__error" id="popup-text-error"> </span>
    <button className="popup__button" type="submit">Сохранить</button>
   </PopupWithForm>


   <PopupWithForm title="Новое место" name="add-card-form-name" popup="new-card">
    <input className="popup__info popup__info_naming" id="name-card" maxLength="30" minLength="2"
           name="name" placeholder="Название" required type="text" value=""/>
    <span className="popup__error" id="name-card-error"> </span>
    <input className="popup__info popup__info_link" id="link" name="link"
           placeholder="Ссылка на картинку" required type="url" value=""/>
    <span className="popup__error" id="link-error"> </span>
    <button className="popup__button popup__button_invalid" type="submit">Создать</button>
   </PopupWithForm>


   <PopupWithForm title="Обновить аватар" name="edit-form-avatar" popup="avatar-form">
    <input className="popup__info popup__info_avatar" id="link-avatar" name="avatar" placeholder="Ссылка на картинку"
           required type="url" value=""/>
    <span className="popup__error" id="link-avatar-error"> </span>
    <button className="popup__button popup__button_invalid" type="submit">Сохранить</button>
   </PopupWithForm>


   <PopupWithForm title="Вы уверены?" name="" popup="confirm">
    <button className="popup__button" type="submit" value="Да">Да</button>
   </PopupWithForm>





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

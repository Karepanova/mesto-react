import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
 const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
 const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
 const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
 const [selectedCard, setSelectedCard] = React.useState({});


 function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
  //document.querySelector('.popup_avatar-form').classList.add('popup_opened');
 }

 function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
  //document.querySelector('.popup_edit-profile').classList.add('popup_opened');
 }

 function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
  //document.querySelector('.popup_new-card').classList.add('popup_opened');
 }

 // закрытие попапов
 function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard({});
 }

 function handleCardClick (card) {
  setSelectedCard(card);
 }


 return (
  <div>
   <div className="container">
    <div className="page">
     <Header/>
     <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
     />
     <Footer/>
    </div>
   </div>


   <PopupWithForm
    title="Редактировать профиль"
    name="profile-form-name"
    popup="edit-profile"
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
   >
    <input className="popup__info popup__info_profile_name" id="popup-name" maxLength="40" minLength="2" name="name"
           placeholder="Имя" required type="text" value=""/>
    <span className="popup__error" id="popup-name-error"> </span>
    <input className="popup__info popup__info_profile_about" id="popup-text" maxLength="200" minLength="2"
           name="about" placeholder="О себе" required type="text" value=""/>
    <span className="popup__error" id="popup-text-error"> </span>
    <button className="popup__button" type="submit">Сохранить</button>
   </PopupWithForm>


   <PopupWithForm
    title="Новое место"
    name="add-card-form-name"
    popup="new-card"
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
   >
    <input className="popup__info popup__info_naming" id="name-card" maxLength="30" minLength="2"
           name="name" placeholder="Название" required type="text" value=""/>
    <span className="popup__error" id="name-card-error"> </span>
    <input className="popup__info popup__info_link" id="link" name="link"
           placeholder="Ссылка на картинку" required type="url" value=""/>
    <span className="popup__error" id="link-error"> </span>
    <button className="popup__button popup__button_invalid" type="submit">Создать</button>
   </PopupWithForm>


   <PopupWithForm
    title="Обновить аватар"
    name="edit-form-avatar"
    popup="avatar-form"
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
   >
    <input className="popup__info popup__info_avatar" id="link-avatar" name="avatar" placeholder="Ссылка на картинку"
           required type="url" value=""/>
    <span className="popup__error" id="link-avatar-error"> </span>
    <button className="popup__button popup__button_invalid" type="submit">Сохранить</button>
   </PopupWithForm>


   <PopupWithForm
    title="Вы уверены?"
    name=""
    popup="confirm"
    onClose={closeAllPopups}
   >
    <button className="popup__button" type="submit" value="Да">Да</button>
   </PopupWithForm>

   <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={Object.keys(selectedCard).length !== 0} />

  </div>
 );
}

export default App;

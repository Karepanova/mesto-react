import pen from "../images/pen.svg";
import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {

 const [userName, setUserName] = React.useState();
 const [userDescription, setUserDescription] = React.useState();
 const [userAvatar, setUserAvatar] = React.useState();
 const [cards, setCards] = React.useState([]);

 React.useEffect(() => {
  //монтирование (рождение)
  api.getUserData()
   .then((data) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
   })
   .catch((err) => {
    console.log(`Ошибка сервера ${err}`)
   });
  api.getArrayCards()
   .then((data) => {
    setCards(data);
   })
   .catch((err) => {
    console.log(`Ошибка сервера ${err}`)
   });
 }, []);


 return (
  <main className="content">
   <section className="profile">

    <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
     <div className="profile__avatar" style={{backgroundImage: `url(${userAvatar})`}}></div>
     <img alt="Карандаш" className="profile__avatar-pen" src={pen}/>
    </div>
    <div className="profile__info">
     <div className="profile__record">
      <h1 className="profile__title">{userName}</h1>
      <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
     </div>
     <p className="profile__subtitle">{userDescription}</p>
    </div>
    <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
   </section>

   <section className="elements">
    {cards.map((card) => (
     <Card key={card._id} card={card} onCardClick={props.onCardClick} />
    ))}

   </section>
  </main>
 )
}

export default Main;
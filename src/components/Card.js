function Card(props) {

 const handleCardClick = () => {
  props.onCardClick(props.card);
 }

 return (
  <div className="element">
   <button className="profile__delete" type="button"> </button>
   <div className="element__img-block">
    <div className="element__img" style={{backgroundImage: `url(${props.card.link})`}} onClick={handleCardClick}> </div>
   </div>
   <div className="element__card">
    <h2 className="element__text">{props.card.name}</h2>
    <div className="element__group">
     <button className="element__button" type="button"> </button>
     <span className="element__count-likes">{props.card.likes.length}</span>
    </div>
   </div>
  </div>
 )
}

export default Card;

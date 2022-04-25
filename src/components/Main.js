import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div onClick={props.onEditAvatar} className="profile__container-avatar">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          {/*<img
            className="profile__avatar"
            src="<%=require('./images/avatar.jpg')%>"
            alt="Аватарка"
          /> */}
          <div className="profile__change-avatar"></div>
        </div>
        <div className="profile__list">
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit hover"
            type="button"
          ></button>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add hover"
          type="button"
        ></button>
      </div>
      <ul className="photo-grid">
        {cards.map(element => (
            <Card onCardClick={props.onCardClick} element={element} key={element._id}/>
            ))}
        </ul>
    </main>
  );
}

export default Main;

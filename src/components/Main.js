import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Card } from "./Card";

export function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <div className="profile">
        <div onClick={props.onEditAvatar} className="profile__container-avatar">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <div className="profile__change-avatar"></div>
        </div>
        <div className="profile__list">
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
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
        {cards.map((element) => (
          <Card
            onCardDelete={handleDeleteClick}
            onCardLike={handleCardLike}
            onCardClick={props.onCardClick}
            element={element}
            key={element._id}
          />
        ))}
      </ul>
    </main>
  );
}

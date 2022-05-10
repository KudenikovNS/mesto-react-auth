import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const isOwn = currentUser._id === card.owner._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  return (
    <li className="element">
      <button
        className={`element__button-delete${
          !isOwn ? " element__button-delete_hidden" : ""
        }`}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="element__photo"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__info">
        <p className="element__subtitle">{card.name}</p>
        <div className="__container-like">
          <button
            className={`element__button-like${
              isLiked ? " element__button-like_activ" : " "
            }`}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <div className="element__counter-like">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

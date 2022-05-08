import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Card({ element, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardClick() {
    onCardClick(element);
  }

  function handleLikeClick() {
    onCardLike(element);
  }

  function handleDeleteClick() {
    onCardDelete(element);
  }

  const isOwn = element.owner._id === currentUser._id;
  const isLiked = element.likes.some((i) => i._id === currentUser._id);

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
        src={element.link}
        alt={element.name}
        onClick={handleCardClick}
      />
      <div className="element__info">
        <p className="element__subtitle">{element.name}</p>
        <div className="__container-like">
          <button
            className={`element__button-like${
              isLiked ? " element__button-like_activ" : " "
            }`}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <div className="element__counter-like">{element.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

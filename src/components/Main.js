import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import { Card } from "./Card";

export function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDeleteClick(element) {
    const isOwn = element.owner._id === currentUser._id;
    isOwn &&
      api
        .deleteConfirmCard(element._id)
        .then((res) => setCards(cards.filter((c) => c._id !== element._id)))
        .catch((err) => console.log("Ошибка удаления карточки", err));
  }

  function handleCardLike(element) {
    const isLiked = element.likes.some((i) => i._id === currentUser._id);
    api.addLikes(element._id, isLiked).then((newCard) => {
      setCards((state) =>
        state.map((c) => (c._id === element._id ? newCard : c))
      );
    });
  }

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
            <p className="profile__subtitle">{currentUser.profession}</p>
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

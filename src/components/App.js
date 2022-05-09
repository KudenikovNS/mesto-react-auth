import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";

export function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const handleCardClick = (element) => setSelectedCard(element);
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) =>
        console.log("Ошибка при получении данных пользователя", err)
      );
  }, []);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(user) {
    api
      .editProfile(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) =>
        console.log("Ошибка при обновлении данных пользователя", err)
      );
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .updateAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log("Ошибка при обновлении аватара", err));
  }

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

  function handleAddPlaceSubmit(element) {
    api
      .addCard(element)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log("Ошибка при добавлении карточек", err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onDeleteClick={handleDeleteClick}
            cards={cards}
          />
        </div>
        <Footer />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm title="Вы уверены?" name="delete_card" />

        {selectedCard && (
          <ImagePopup element={selectedCard} onClose={closeAllPopups} />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";

export function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState("false");
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [editProfileButtonText, setEditProfileButtonText] =
    React.useState("Сохранить");
  const [addCardButtonText, setAddCardButtonText] = React.useState("Создать");
  const [editAvatarButtonText, setEditAvatarButtonText] =
    React.useState("Сохранить");

  const handleCardClick = (card) => setSelectedCard(card);
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

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

  function handleDeleteClick(card) {
    if (card.owner._id !== currentUser._id) return;
    api
      .deleteConfirmCard(card._id)
      .then((res) => setCards(cards.filter((c) => c._id !== card._id)))
      .catch((err) => console.log("Ошибка при удалении карточки", err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.addLikes(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(user) {
    setEditProfileButtonText("Сохраняю...");
    api
      .editProfile(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setEditProfileButtonText("Сохранить");
      })
      .catch((err) =>
        setEditProfileButtonText("Ошибка при сохранении данных пользователя")
      );
  }

  function handleUpdateAvatar({ avatar }) {
    setEditAvatarButtonText("Сохраняю...");
    api
      .updateAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setEditAvatarButtonText("Сохранить");
      })
      .catch((err) => setEditAvatarButtonText("Ошибка при обновлении аватара"));
  }

  function handleAddPlaceSubmit(newCard) {
    setAddCardButtonText("Создаю...");

    api
      .addCard(newCard)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
        setAddCardButtonText("Создать");
      })
      .catch((err) => setAddCardButtonText("Ошибка при добавлении карточек"));
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
            onCardDelete={handleDeleteClick}
            cards={cards}
          />
        </div>
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={editAvatarButtonText}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={editProfileButtonText}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={addCardButtonText}
        />

        <PopupWithForm title="Вы уверены?" name="delete_card" buttonText="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

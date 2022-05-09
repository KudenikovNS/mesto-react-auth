import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { EditProfilePopup } from "./EditProfilePopup";

export function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

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
          />
        </div>
        <Footer />

        <PopupWithForm
          title="Обновить аватар"
          name="change-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <input
              className="popup__input"
              id="input-link-photo"
              type="url"
              placeholder="Ссылка на аватарку"
              name="avatar"
              required
              src=""
            />
            <span className="popup__error-input input-link-photo-error"></span>
          </fieldset>
        </PopupWithForm>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          title="Новое место"
          name="card-photo"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__input-container">
            <input
              className="popup__input popup__input-card-name"
              id="card-name-input"
              type="text"
              placeholder="Название картинки"
              name="place"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error-input card-name-input-error popup__input-card-subname"></span>
            <input
              className="popup__input"
              id="card-subname-input"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              required
              src=""
            />
            <span className="popup__error-input card-subname-input-error"></span>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete_card" />

        {selectedCard && (
          <ImagePopup element={selectedCard} onClose={closeAllPopups} />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

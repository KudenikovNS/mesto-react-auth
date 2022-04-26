import React from "react";
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";

export function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard();
  }

  function handleCardClick(element) {
    setSelectedCard(element);
  }

  return (
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
        children={
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
        }
      />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="popup__input-container">
            <input
              className="popup__input popup__input-profile-name"
              id="name-input"
              type="text"
              placeholder="ФИО"
              name="name"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error-input name-input-error"></span>
            <input
              className="popup__input popup__input-profile-subname"
              id="subname-input"
              type="text"
              placeholder="Профессия"
              name="profession"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error-input subname-input-error"></span>
          </fieldset>
        }
      />

      <PopupWithForm
        title="Новое место"
        name="card-photo"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
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
        }
      />

      <PopupWithForm title="Вы уверены?" name="delete_card" />

      {selectedCard && (
        <ImagePopup element={selectedCard} onClose={closeAllPopups} />
      )}
    </div>
  );
}

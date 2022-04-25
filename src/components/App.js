import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  return (
    <div className="App">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
      </div>
      <Footer />

      <PopupWithForm
        title="Обновить аватар"
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        children={
          <fieldset className="popup__input-container">
            <input
              className="popup__input"
              id="input-link-photo"
              type="url"
              placeholder="Ссылка на аватарку"
              name="avatar"
              value=""
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
        children={
          <fieldset className="popup__input-container">
            <input
              className="popup__input popup__input-profile-name"
              id="name-input"
              type="text"
              placeholder="ФИО"
              name="name"
              value=""
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
              value="Исследователь океана"
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
        children={
          <fieldset className="popup__input-container">
            <input
              className="popup__input popup__input-card-name"
              id="card-name-input"
              type="text"
              placeholder="Название картинки"
              name="place"
              value=""
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
              value=""
              required
              src=""
            />
            <span className="popup__error-input card-subname-input-error"></span>
          </fieldset>
        }
      />

      <PopupWithForm title="Вы уверены?" name="delete_card" />

      <ImagePopup />

      <template className="template" id="template">
        <article className="element">
          <button
            className="element__button-delete hover"
            type="button"
          ></button>
          <img className="element__photo" src="#" alt="#" />
          <div className="element__info">
            <p className="element__subtitle"></p>
            <div className="__container-like">
              <button
                className="element__button-like hover"
                type="button"
              ></button>
              <div className="element__counter-like"></div>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;

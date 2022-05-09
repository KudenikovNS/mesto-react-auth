import { PopupWithForm } from "./PopupWithForm";

export function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
    >
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
    </PopupWithForm>
  );
}

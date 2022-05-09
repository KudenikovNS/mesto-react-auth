import { useEffect, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handelNameChange = (evt) => setName(evt.target.value);
  const handelDescriptionChange = (evt) => setDescription(evt.target.value);

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
          value={name}
          onChange={handelNameChange}
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
          value={description}
          onChange={handelDescriptionChange}
        />
        <span className="popup__error-input subname-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

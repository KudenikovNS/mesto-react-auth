import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  buttonText,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handelNameChange = (evt) => setName(evt.target.value);
  const handelDescriptionChange = (evt) => setDescription(evt.target.value);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
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
          name="about"
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

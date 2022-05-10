import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

export function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  buttonText = "Создать",
}) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");

  const handelPlaceChange = (e) => setPlace(e.target.value);
  const handelLinkChange = (e) => setLink(e.target.value);

  useEffect(() => {
    setPlace("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ place, link });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card-photo"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
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
          value={place}
          onChange={handelPlaceChange}
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
          value={link}
          onChange={handelLinkChange}
        />
        <span className="popup__error-input card-subname-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

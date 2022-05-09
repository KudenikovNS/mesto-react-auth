import { useEffect, useRef } from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="change-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          ref={avatarRef}
        />
        <span className="popup__error-input input-link-photo-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

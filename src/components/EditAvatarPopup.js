import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="change-avatar"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

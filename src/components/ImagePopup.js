export function ImagePopup({ element, onClose }) {
  return (
    <section className={`popup popup_size-photo ${element && "popup_opened"}`}>
      <div className="popup__container-size">
        <button
          className="popup__button-close hover"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__photo" src={element.link} alt={element.name} />
        <p className="popup__photo-name">{element.name}</p>
      </div>
    </section>
  );
}

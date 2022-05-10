export function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_size-photo ${card && "popup_opened"}`}>
      <div className="popup__container-size">
        <button
          className="popup__button-close hover"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__photo" src={card?.link} alt={card?.name} />
        <p className="popup__photo-name">{card?.name}</p>
      </div>
    </section>
  );
}

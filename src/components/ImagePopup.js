export function ImagePopup(props) {
  return (
    <section
      className={`popup popup_size-photo ${
        props.element ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container-size">
        <button
          className="popup__button-close hover"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__photo"
          src={props.element.link}
          alt={props.element.name}
        />
        <p className="popup__photo-name">{props.element.name}</p>
      </div>
    </section>
  );
}

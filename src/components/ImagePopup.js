function ImagePopup() {
  return (
    <section className="popup popup_size-photo">
      <div className="popup__container-size">
        <button className="popup__button-close hover" type="button"></button>
        <img className="popup__photo" src="#" alt="Картинка" />
        <p className="popup__photo-name"></p>
      </div>
    </section>
  );
}

export default ImagePopup;
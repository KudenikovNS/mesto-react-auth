function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button className="popup__button-close hover" type="button"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`"popup__form popup__form-${props.name}`}
          action="#"
          name={props.name}
          noValidate
        >
          {props.children}
          <button className="popup__button-save" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
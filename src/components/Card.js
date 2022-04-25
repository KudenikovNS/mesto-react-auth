function Card(props) {
  return (
    <li className="element">
      <button className="element__button-delete hover" type="button"></button>
      <img className="element__photo" src={props.element.link} alt="#" />
      <div className="element__info">
        <p className="element__subtitle">{props.element.name}</p>
        <div className="__container-like">
          <button className="element__button-like hover" type="button"></button>
          <div className="element__counter-like">
            {props.element.likes.length}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
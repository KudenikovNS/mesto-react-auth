function Main(props) {
  return (
    <main className="content">
      <div className="profile">
        <div onClick={props.onEditAvatar} className="profile__container-avatar">
          <img
            className="profile__avatar"
            src="<%=require('./images/avatar.jpg')%>"
            alt="Аватарка"
          />
          <div className="profile__change-avatar"></div>
        </div>
        <div className="profile__list">
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit hover"
            type="button"
          ></button>
        </div>
        <button onClick={props.onAddPlace} className="profile__button-add hover" type="button"></button>
      </div>
      <section className="photo-grid"></section>
    </main>
  );
}

export default Main;

function Main() {
  return (
    <main className="content">
      <div className="profile">
        <div className="profile__container-avatar">
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
            className="profile__button-edit hover"
            type="button"
            ariaLabel="Кнопка редоктирования информации о пользователе"
          ></button>
        </div>
        <button
          className="profile__button-add hover"
          type="button"
          ariaLabel="Кнопка для добавления контента"
        ></button>
      </div>
      <section className="photo-grid"></section>
    </main>
  );
}

export default Main;

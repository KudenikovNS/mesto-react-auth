import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

/* import logo from './logo.svg'; */

function App() {
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_change-avatar")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_profile").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_card-photo").classList.add("popup_opened");
  }

  return (
    <div className="App">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
      </div>
      <Footer />

      <template className="template" id="template">
        <article className="element">
          <button
            className="element__button-delete hover"
            type="button"
          ></button>
          <img className="element__photo" src="#" alt="#" />
          <div className="element__info">
            <p className="element__subtitle"></p>
            <div className="__container-like">
              <button
                className="element__button-like hover"
                type="button"
              ></button>
              <div className="element__counter-like"></div>
            </div>
          </div>
        </article>
      </template>

      <section className="popup popup_profile">
        <div className="popup__container">
          <button className="popup__button-close hover" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form-profile"
            action="#"
            name="formProfile"
            novalidate
          >
            <fieldset className="popup__input-container">
              <input
                className="popup__input popup__input-profile-name"
                id="name-input"
                type="text"
                placeholder="ФИО"
                name="name"
                value=""
                required
                minLength="2"
                maxLength="40"
              />
              <span className="popup__error-input name-input-error"></span>
              <input
                className="popup__input popup__input-profile-subname"
                id="subname-input"
                type="text"
                placeholder="Профессия"
                name="profession"
                value="Исследователь океана"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="popup__error-input subname-input-error"></span>
            </fieldset>
            <button className="popup__button-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_card-photo">
        <div className="popup__container">
          <button className="popup__button-close hover" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_card-photo"
            action="#"
            name="formCard"
            novalidate
          >
            <fieldset className="popup__input-container">
              <input
                className="popup__input popup__input-card-name"
                id="card-name-input"
                type="text"
                placeholder="Название картинки"
                name="place"
                value=""
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__error-input card-name-input-error popup__input-card-subname"></span>
              <input
                className="popup__input"
                id="card-subname-input"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                value=""
                required
                src=""
              />
              <span className="popup__error-input card-subname-input-error"></span>
            </fieldset>
            <button
              className="popup__button-save popup__button-save_disabled"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_size-photo">
        <div className="popup__container-size">
          <button className="popup__button-close hover" type="button"></button>
          <img className="popup__photo" src="#" alt="Картинка" />
          <p className="popup__photo-name"></p>
        </div>
      </section>

      <section className="popup popup_delete_card">
        <div className="popup__container popup__container-delete-card">
          <button className="popup__button-close hover" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            className="popup__form"
            action="#"
            name="formСardВelete"
            novalidate
          >
            <button className="popup__button-save" type="submit">
              Да
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_change-avatar">
        <div className="popup__container popup__container-change-avatar">
          <button className="popup__button-close hover" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_avatar"
            action="#"
            name="formChangeAvatar"
            novalidate
          >
            <fieldset className="popup__input-container">
              <input
                className="popup__input"
                id="input-link-photo"
                type="url"
                placeholder="Ссылка на аватарку"
                name="avatar"
                value=""
                required
                src=""
              />
              <span className="popup__error-input input-link-photo-error"></span>
            </fieldset>
            <button className="popup__button-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from "react";
import { api } from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getProfile().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div onClick={props.onEditAvatar} className="profile__container-avatar">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          {/*<img
            className="profile__avatar"
            src="<%=require('./images/avatar.jpg')%>"
            alt="Аватарка"
          /> */}
          <div className="profile__change-avatar"></div>
        </div>
        <div className="profile__list">
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit hover"
            type="button"
          ></button>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add hover"
          type="button"
        ></button>
      </div>
      <section className="photo-grid"></section>
    </main>
  );
}

export default Main;

import React from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  closeAllPopups,
  cards,
  userAvatar,
  userDescription,
  userName,
}) {
  return (
    <main className="content">
      <div className="profile">
        <div className="profile__author">
          <img
            className="profile__avatar"
            alt='профиль пользователя'
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div className="profile__overlay" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__rename">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              aria-label="изменить"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="добавить карточку"
          type="button"
          onClick={onAddPlace}
        ></button>
      </div>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup />

      <article className="elements">
        {cards.map((card, i) => (
          <Card card={card} key={i} onCardClick={onCardClick}></Card>
        ))}
      </article>
    </main>
  );
}

export default Main;

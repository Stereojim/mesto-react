import React, { useEffect, useState } from "react";
import Card from "./Card";
import { api } from "../utils/api.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log("засада: " + err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log("засада: " + err));
  }, []);

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__author">
          <img
            className="profile__avatar"
            alt="профиль пользователя"
            src={userAvatar}
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

      <article className="elements">
        {cards.map((card, i) => (
          <Card card={card} key={i} onCardClick={onCardClick}></Card>
        ))}
      </article>
    </main>
  );
}

export default Main;

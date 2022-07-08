import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  //Функция лайка карточки
  function handleCardLike(card) {
    //Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    //переключатель лукасов (как должен выглядеть api changeLikeCardStatus из тз неизвестно)
    !isLiked
      ? api.addLike(card._id).then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
      : api
          .deleteLike(card._id)
          .then((newCard) => {
            const newCards = cards.map((c) =>
              c._id === card._id ? newCard : c
            );
            setCards(newCards);
          })

          .catch((err) => console.log("засада: " + err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

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
            src={currentUser.avatar}
          />
          <div className="profile__overlay" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <div className="profile__rename">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              aria-label="изменить"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">{currentUser.about}</p>
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
          <Card
            card={card}
            key={i}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          ></Card>
        ))}
      </article>
    </main>
  );
}

export default Main;

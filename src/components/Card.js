import React from "react";

export default function Card({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <>
      <div className="card">
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
        <h2 className="card__place-name">{card.name}</h2>
        <button
          className="card__like-button"
          type="button"
          aria-label="поставить лайк"
        ></button>
        <span className="card__like-count">{card.likes.length}</span>
        <button
          className="card__remove-button"
          type="button"
          aria-label="удалить карточку"
        ></button>
      </div>
    </>
  );
}

import React from 'react';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {


  return (
    <main className="content">
    <div className="profile">
      <div className="profile__author">
        <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="фото автора" />
        <div className="profile__overlay"  onClick={onEditAvatar}></div>
      </div>
      <div className="profile__info">
        <div className="profile__rename">
          <h1 className="profile__name"></h1>
          <button
            className="profile__edit-button"
            aria-label="изменить"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <p className="profile__profession"></p>
      </div>
      <button
        className="profile__add-button"
        aria-label="добавить карточку"
        type="button"
        onClick={onAddPlace}
        
      ></button>
    </div>

    <article className="elements"></article>

    <PopupWithForm name='profile-edit' title='Редактировать профиль' button='Сохранить'  >
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_author"
              id="author-input"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
            />
            <span id="author-input-error" className="popup__error"></span>
          </label>

          <label className="popup__label">
            <input
              className="popup__input popup__input_type_profession"
              name="description"
              id="profession-input"
              type="text"
              minLength="2"
              maxLength="200"
              required
              placeholder="Профессия"
            />
            <span id="profession-input-error" className="popup__error"></span>
          </label>
    </PopupWithForm>

{/*     <PopupWithForm name='create-place' title='Новое место' button='Создать' >
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_place-name"
              name="place-name-input"
              id="place-name-input"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Название"
            />
            <span className="popup__error" id="place-name-input-error"></span>
          </label>

          <label className="popup__label">
            <input
              className="popup__input popup__input_type_place-link"
              name="place-link-input"
              id="place-link-input"
              type="url"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="popup__error" id="place-link-input-error"></span>
          </label>
         
    </PopupWithForm> */}

    <PopupWithForm name='delete-card' title='Вы уверены?'>
    </PopupWithForm>

{/*     <PopupWithForm name='change-avatar' title='Обновить аватар' button='Сохранить'>
          <label className="popup__label">
            <input
              className="popup__input popup__input_type_link"
              name="avatarLink-input"
              id="avatarLink-input"
              type="url"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="popup__error" id="avatarLink-input-error"></span>
          </label>
    </PopupWithForm> */}

    <ImagePopup />
  </main>
  );
}
  

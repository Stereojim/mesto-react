import React from 'react';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function Main(props) {

  return (
    <main class="content">
    <div class="profile">
      <div class="profile__author">
        <img class="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="фото автора" />
        <div class="profile__overlay"  onClick={props.onEditAvatar} ></div>
      </div>
      <div class="profile__info">
        <div class="profile__rename">
          <h1 class="profile__name"></h1>
          <button
            class="profile__edit-button"
            aria-label="изменить"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <p class="profile__profession"></p>
      </div>
      <button
        class="profile__add-button"
        aria-label="добавить карточку"
        type="button"
        onClick={props.onAddPlace}
      ></button>
    </div>

    <article class="elements"></article>

    <PopupWithForm name='profile-edit' title='Редактировать профиль'>
          <label class="popup__label">
            <input
              class="popup__input popup__input_type_author"
              id="author-input"
              type="text"
              minlength="2"
              maxlength="30"
              required
              placeholder="Имя"
            />
            <span id="author-input-error" class="popup__error"></span>
          </label>

          <label class="popup__label">
            <input
              class="popup__input popup__input_type_profession"
              name="description"
              id="profession-input"
              type="text"
              minlength="2"
              maxlength="200"
              required
              placeholder="Профессия"
            />
            <span id="profession-input-error" class="popup__error"></span>
          </label>
    </PopupWithForm>

    <PopupWithForm name='create-place' title='Новое место'>
          <label class="popup__label">
            <input
              class="popup__input popup__input_type_place-name"
              name="place-name-input"
              id="place-name-input"
              type="text"
              minlength="2"
              maxlength="30"
              required
              placeholder="Название"
            />
            <span class="popup__error" id="place-name-input-error"></span>
          </label>

          <label class="popup__label">
            <input
              class="popup__input popup__input_type_place-link"
              name="place-link-input"
              id="place-link-input"
              type="url"
              required
              placeholder="Ссылка на картинку"
            />
            <span class="popup__error" id="place-link-input-error"></span>
          </label>
         
    </PopupWithForm>

    <PopupWithForm name='delete-card' title='Вы уверены?'>
    </PopupWithForm>

    <PopupWithForm name='change-avatar' title='Обновить аватар'>
          <label class="popup__label">
            <input
              class="popup__input popup__input_type_link"
              name="avatarLink-input"
              id="avatarLink-input"
              type="url"
              required
              placeholder="Ссылка на картинку"
            />
            <span class="popup__error" id="avatarLink-input-error"></span>
          </label>
    </PopupWithForm>

    <ImagePopup />
  </main>
  );
}
  
export default Main;


import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

// Подписка на контекст
const currentUser = React.useContext(CurrentUserContext);

const [name, setName] = useState('');
const [description, setDescription] = useState('');

useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]); 

function handleUserName(event) {
  setName(event.target.value)
}

function handleUserDescription(event) {
  setDescription(event.target.value)
}


function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  // Передаём значения управляемых компонентов во внешний обработчик
  onUpdateUser({
    name: name,
    about: description,
  });
} 

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="change-avatar"
      isOpen={isOpen}
      button="Изменить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
     <label className="popup__label">
            <input
              className="popup__input popup__input_type_author"
              id="author-input"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
              onChange={handleUserName}
            
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
              onChange={handleUserDescription}
           
            />
            <span id="profession-input-error" className="popup__error"></span>
          </label>
    </PopupWithForm>
  );
}
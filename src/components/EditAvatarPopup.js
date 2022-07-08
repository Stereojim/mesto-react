import React, { useRef, useEffect } from 'react';

import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  
  const avatarRef = useRef('');

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen])

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="change-avatar"
      isOpen={isOpen}
      button="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_type_link"
        name="link"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__error" id="link-input-add-error"></span>
    </PopupWithForm>
  );
}

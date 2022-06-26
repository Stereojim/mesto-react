
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="change-avatar"
      isOpen={isOpen}
      button="Изменить"
      onClose={onClose}
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
  );
}
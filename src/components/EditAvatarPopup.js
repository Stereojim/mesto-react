
import PopupWithForm from "./PopupWithForm";

export default function isEditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="change-avatar"
      isOpen={isOpen}
      button="Сохранить"
      onClose={onClose}
    >
      <input
        type="url"
        className="popup__input popup__input_type_link"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="link-input-add-error"></span>
    </PopupWithForm>
  );
}

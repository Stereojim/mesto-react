
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Новое место"
      name="create-place"
      isOpen={isOpen}
      button="Создать"
      onClose={onClose}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error" id="add-name-input-error"></span>
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

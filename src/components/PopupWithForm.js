export default function PopupWithForm({ title, name, isOpen, children, button, onClose, onSubmit}) {

return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} name={name}>
    <div className="popup__container">
      <form
        id="formPlace"
        className={`popup__form popup__form_type_${name}`}
        name="addPlaceForm"
        noValidate
        onSubmit={onSubmit}
      >
        <button
          className="popup__button-close popup__button-close_type_create-place"
          aria-label="закрыть"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          className="popup__button-submit popup__button-submit_type_card"
          type="submit"
          value="Создать"
        >
          {button}
        </button>
      </form>
    </div>
  </div>
)
}


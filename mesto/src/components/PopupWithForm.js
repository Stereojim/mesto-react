import React from 'react';

function PopupWithForm(props) {

return (
    <div className={`popup popup_type_${props.name}`} >
    <div class="popup__container">
      <form
        id="formPlace"
        className={`popup__form popup__form_type_${props.name}`}
        name="addPlaceForm"
        novalidate
      >
        <button
          class="popup__button-close popup__button-close_type_create-place"
          aria-label="закрыть"
          type="button"
        ></button>
        <h3 class="popup__title">{props.title}</h3>
        {props.children}
        <button
          class="popup__button-submit popup__button-submit_type_card"
          type="submit"
          value="Создать"
        >
          Создать
        </button>
      </form>
    </div>
  </div>
)
}

export default PopupWithForm;
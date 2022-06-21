import React from 'react';

function ImagePopup() {

    return (
        <div class="popup popup_type_picture-open">
        <figure class="popup__figure">
          <button
            class="popup__button-close popup__button-close_type_picture-open"
            aria-label="закрыть"
            type="button"
          ></button>
          <img class="popup__picture" src="#" alt="" />
          <figcaption class="popup__picture-title"></figcaption>
        </figure>
      </div>
    )
}

export default ImagePopup;
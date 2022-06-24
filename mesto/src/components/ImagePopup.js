import React from 'react';

function ImagePopup() {

    return (
        <div className="popup popup_type_picture-open">
        <figure className="popup__figure">
          <button
            className="popup__button-close popup__button-close_type_picture-open"
            aria-label="закрыть"
            type="button"
          ></button>
          <img className="popup__picture" src="#" alt="" />
          <figcaption className="popup__picture-title"></figcaption>
        </figure>
      </div>
    )
}

export default ImagePopup;
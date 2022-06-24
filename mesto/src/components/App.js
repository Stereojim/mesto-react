import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AddPlacePopup from "./AppPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import "../index.css";

const App = () => {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

function closeAllPopups () {
  setisEditProfilePopupOpen(false);
  setisEditAvatarPopupOpen(false);
  setIsAddPlacePopupOpen(false);
}

/*   function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_change-avatar")
      .classList.add("popup_opened");
  } */

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick} 
          />

          <template id="placeCards" className="square-card">
            <div className="card">
              <img className="card__image" src="#" alt="" />
              <h2 className="card__place-name"></h2>
              <button
                className="card__like-button"
                type="button"
                aria-label="поставить лайк"
              ></button>
              <span className="card__like-count"></span>
              <button
                className="card__remove-button"
                type="button"
                aria-label="удалить карточку"
              ></button>
            </div>
          </template>
          <Footer />
          <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          />
          <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          />
          <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          />
        </div>
      </div>
    </>
  );
};

export default App;

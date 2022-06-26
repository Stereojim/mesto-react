import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AddPlacePopup from "./AppPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import "../index.css";
import { api } from "../utils/api.js";
import ImagePopup from "./ImagePopup";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  
/*   const [data, setData] = useState([]); */

  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(props) {
    setSelectedCard(props);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

/*   useEffect(() => {
    api
      .getInitialCards()
      .then((card) => {
        setData(card);
      })
      .catch((err) => console.log("засада: " + err));
  }, []); */

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
    /*         cards={data} */
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          ></Main>

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
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState, Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AddPlacePopup from "./AppPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import "../index.css";
import { api } from "../utils/Api.js";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);

  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);

  /*   const [author, setAuthor] = useState({
        name: '',
        about: '',
        avatar: ''
    }); */

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
  }

  useEffect(() => {
    api.getProfile().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log("засада: " + err));
  }, []);

  /*    React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([author, cards]) => {
        setAuthor(author);
        setCards(cards);
      })
      .catch((err) => console.log("ошибка: " + err));
  }, []); */

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            cards={data}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            userAvatar={userAvatar}
            userDescription={userDescription}
            userName={userName}
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
        </div>
      </div>
    </>
  );
}

export default App;

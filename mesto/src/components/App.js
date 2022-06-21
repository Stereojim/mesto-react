import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import '../index.css';


const App = (props) => {

/*   const[isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = React.useState(false);
  
  function onEditAvatar() {
  setIsEditAvatarPopupOpen(true);
}; */

function handleEditAvatarClick() {
  document.querySelector('.popup_type_change-avatar').classList.add("popup_opened");
}

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile-edit').classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_create-place').classList.add("popup_opened");
  }


  return (
    <>
    
    <body class="body">
    <div class="page">
    <Header />
    <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />

      <template id="placeCards" class="square-card">
        <div class="card">
          <img class="card__image" src="#" alt="" />
          <h2 class="card__place-name"></h2>
          <button
            class="card__like-button"
            type="button"
            aria-label="поставить лайк"
          ></button>
          <span class="card__like-count"></span>
          <button
            class="card__remove-button"
            type="button"
            aria-label="удалить карточку"
          ></button>
        </div>
      </template>
      <Footer />
    </div>
   
  </body>
  </>
  );
}


export default App;

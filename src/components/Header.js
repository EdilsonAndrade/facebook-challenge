import React from 'react';
import './Header.css';
import Facebook from '../assets/facebook.svg';
import AccountCircle from '../assets/account_circle.svg';
const Header = () => {
  return (
    <header>
      <nav>
        <img src={Facebook} />
        <div className="accountCircle">
          <strong>Meu perfil</strong>
          <img src={AccountCircle} />
        </div>

      </nav>
    </header>

  )
}

export default Header;
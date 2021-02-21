/* eslint-disable */
import React, { useState } from 'react';
import './Header.css';
import companyLogo from '../img/icon-black.png';

function Header() {
  const [isSignedUp, setSignUp] = useState(false);
  const [isLoggedIn] = useState(false);

  function changeSignUp() {
    setSignUp(!isSignedUp);
  }

  return (
    <header>
      <div className="logo"></div> Connect - E{' '}
      {!isLoggedIn ? (
        <button onClick={changeSignUp}>
          {' '}
          {!isSignedUp ? <p>Sign Up</p> : <p>Log In</p>}{' '}
        </button>
      ) : null}
    </header>
  );
}

export default Header;

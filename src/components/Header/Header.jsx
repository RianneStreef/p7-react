import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isSignedUp, setSignUp] = useState(false);
  const [isLoggedIn] = useState(false);

  function changeSignUp() {
    setSignUp(!isSignedUp);
  }

  return (
    <header>
      <div className="logo" />
      Connect - E
      {' '}
      {!isLoggedIn ? (
        <button type="button" onClick={changeSignUp}>
          {' '}
          {!isSignedUp ? <p>Sign Up</p> : <p>Log In</p>}
          {' '}
        </button>
      ) : null}
    </header>
  );
}

export default Header;

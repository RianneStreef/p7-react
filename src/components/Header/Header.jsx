import React from 'react';
import './Header.css';

function Header(props) {
  const { isSignedUp, setSignUp, isLoggedIn } = props;

  function changeSignUp() {
    setSignUp(!isSignedUp);
  }

  return (
    <header data-testid="header">
      <div className="logo" />
      Connect - E
      {!isLoggedIn ? (
        <button
          type="button"
          onClick={changeSignUp}
          data-testid="button-header"
        >
          {isSignedUp ? <p>Sign Up</p> : <p>Log In</p>}
        </button>
      ) : null}
    </header>
  );
}

export default Header;

import React from 'react';
import './Header.css';
import LoggedInButtons from '../LoggedInButtons/LoggedInButtons';

function Header(props) {
  const { isSignedUp, setSignUp, isLoggedIn, setLoggedIn, changeLogin, showProfile, openProfile } = props;

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
      ) : (<LoggedInButtons
            data-testid="test-logged-in-buttons"
            showProfile={showProfile}
            openProfile={openProfile}
            isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn}
            changeLogin={changeLogin}
       />)}
    </header>
  );
}

export default Header;

import React, { useState } from 'react';
import './Header.css';
import companyLogo from '../img/icon-black.png';

React.createElement('div', { name: 'Rianne', lesson: 'React' }, []);

function Header(props) {
  const {
    handleLogin,
    handleSignup,
    isSignedUp,
    setSignUp,
    currentUserForm,
    setUserToShow,
    setUserForm,
  } = props;

  /* function NotLoggedInUser() {
    return (
      <div>
        {isSignedUp ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleSignup}>Sign up</button>
        )}
      </div>
    );
  } */

  return (
    <header>
      <div className="logo"></div> Connect - E{/* <NotLoggedInUser /> */}
      {currentUserForm === 'SIGNUP' ? (
        <button onClick={() => setUserForm('LOGIN')}>Login</button>
      ) : (
        <button onClick={() => setUserForm('SIGNUP')}>Signup</button>
      )}
    </header>
  );
}

export default Header;

/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import Header from './Header/Header';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import ArticleDisplay from './ArticleDisplay/ArticleDisplay';
import Form from './components/Form/Form';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignedUp, setSignUp] = useState(false);

  function changeLogin() {
    setLoggedIn(!isLoggedIn);
  }

  function changeSignUp() {
    setSignUp(!isSignedUp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add API call, or function
    // that does API call
    console.log('Parent submit');
  }

  return (
    <div className="wrapper">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <button type="button" onClick={changeLogin}>
        Change Login
      </button>

      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoggedIn ? (
        <ArticleDisplay isLoggedIn={isLoggedIn} isSignedUp={isSignedUp} />
      ) : isSignedUp ? (
        <SignUp />
      ) : (
        <Login />
      )}

      {/* {isLoggedIn && <ArticleDisplay isLoggedIn={isLoggedIn} isSignedUp={isSignedUp />}
      {isLoggedIn && (isSignedUp ? <SignUp /> : <Login />)} */}

      {!isLoggedIn ? (
        <button type="button" onClick={changeSignUp}>
          {!isSignedUp ? <p>Sign Up</p> : <p>Log In</p>}
        </button>
      ) : null}
    </div>
  );
}

export default App;

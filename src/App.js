import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import ArticleDisplay from './ArticleDisplay/ArticleDisplay';

import { articles as MockArticles } from './mock-data/mock-data';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignedUp, setSignUp] = useState(false);
  const [currentUserForm, setUserForm] = useState('SIGNUP');

  const [articles, setArticles] = useState([]);

  function changeLogin() {
    setLoggedIn(!isLoggedIn);
  }

  function changeSignUp() {
    setSignUp(!isSignedUp);
  }

  function handleLogin() {
    console.log('login');
  }

  function handleSignup() {
    // setSignUp(true);
  }

  useEffect(() => {
    // Runs once. When it runs, it will call the fetchData()
    //    function.
    // fetchData() function will add the API call data to your state
    function fetchData() {
      /* fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setArticles(json)); */
      setArticles(MockArticles);
    }

    fetchData();
  }, []); // dependencies

  return (
    <div className="wrapper">
      <Header
        isSignedUp={isSignedUp}
        setSignUp={setSignUp}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        showUserForm={currentUserForm}
        currentUserForm={currentUserForm}
        setUserForm={setUserForm}
      ></Header>

      <button onClick={changeLogin}>Change Login</button>

      {isLoggedIn ? (
        <ArticleDisplay
          isLoggedIn={isLoggedIn}
          isSignedUp={isSignedUp}
          articles={articles}
        />
      ) : isSignedUp ? (
        <SignUp />
      ) : (
        <Login />
      )}

      {/* {isLoggedIn && <ArticleDisplay isLoggedIn={isLoggedIn} isSignedUp={isSignedUp />}
      {isLoggedIn && (isSignedUp ? <SignUp /> : <Login />)} */}

      {!isLoggedIn ? (
        <button onClick={changeSignUp}>
          {' '}
          {!isSignedUp ? <p>Sign Up</p> : <p>Log In</p>}{' '}
        </button>
      ) : null}
    </div>
  );
}

export default App;

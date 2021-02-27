import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import FormToDisplay from './components/FormToDisplay/FormToDisplay';
import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';
import MockArticles from './mock-data/mock-data';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignedUp, setSignUp] = useState(true);
  const [currentUserForm, setUserForm] = useState('LOGIN');
  const [articles, setArticles] = useState([]);

  function changeLogin() {
    setLoggedIn(!isLoggedIn);
  }

  function changeSignUp() {
    setSignUp(!isSignedUp);
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
        showUserForm={currentUserForm}
        currentUserForm={currentUserForm}
        setUserForm={setUserForm}
      />

      <button type="button" onClick={changeLogin}>Change Login</button>

      {isLoggedIn ? (
        <ArticleDisplay
          isLoggedIn={isLoggedIn}
          isSignedUp={isSignedUp}
          articles={articles}
        />
      ) : (
        <FormToDisplay
          isLoggedIn={isLoggedIn}
          isSignedUp={isSignedUp}
        />
      )}
      {!isLoggedIn ? (
        <button type="button" onClick={changeSignUp}>
          {' '}
          {!isSignedUp ? <p>Sign Up</p> : <p>Log In</p>}
          {' '}
        </button>
      ) : null}
    </div>
  );
}

export default App;

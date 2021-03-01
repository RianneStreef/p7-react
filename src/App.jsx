// import '../App.css';
import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header';
import FormToDisplay from './components/FormToDisplay/FormToDisplay';
import LoggedInDisplay from './components/LoggedInDisplay/LoggedInDisplay';
import MockArticles from './mock-data/mock-data';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignedUp, setSignUp] = useState(true);
  const [articles, setArticles] = useState([]);
  const [showProfile, openProfile] = useState(false);

  function changeLogin() {
    setLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  }

  useEffect(() => {
    // Runs once. When it runs, it will call the fetchData()
    //    function.
    // fetchData() function will add the API call data to your state
    function fetchData() {
      // fetch('http://localhost:3000/api/articles')
      //   .then((response) => response.json())
      //   .then((json) => setArticles(json));
      setArticles(MockArticles);
    }

    fetchData();
  }, []); // dependencies

  return (
    <div className="wrapper">
      <Header
        data-testid="test-header-component"
        isSignedUp={isSignedUp}
        setSignUp={setSignUp}
        isLoggedIn={isLoggedIn}
        showProfile={showProfile}
        openProfile={openProfile}
      />

      <button data-testid="test-login-status-button" type="button" onClick={changeLogin}>
        Change Login
      </button>

      {isLoggedIn ? (
        <LoggedInDisplay
          data-testid="test-logged-in-component"
          isLoggedIn={isLoggedIn}
          isSignedUp={isSignedUp}
          articles={articles}
          showProfile={showProfile}
        />
      ) : (
        <FormToDisplay isLoggedIn={isLoggedIn} isSignedUp={isSignedUp} />
      )}
    </div>
  );
}

export default App;

import './App.css';
import React , { useState }  from 'react';
import Header from './Header/Header'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import ArticleDisplay from './ArticleDisplay/ArticleDisplay'


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignedUp, setSignUp]= useState(false)


  function changeLogin() {
    setLoggedIn(!isLoggedIn);
  }

  function changeSignUp() {
    setSignUp(!isSignedUp);
  }



  return (
    <div className='wrapper'>
    <Header></Header>

    <button onClick={changeLogin}>Change Login</button>

    {isLoggedIn ? (
        <ArticleDisplay isLoggedIn={isLoggedIn} isSignedUp={isSignedUp}/>
      ) : (isSignedUp ? ( <SignUp /> ) : <Login />)}
      
      {/* {isLoggedIn && <ArticleDisplay isLoggedIn={isLoggedIn} isSignedUp={isSignedUp />}
      {isLoggedIn && (isSignedUp ? <SignUp /> : <Login />)} */}

    {!isLoggedIn ? (
          <button onClick={changeSignUp}> { !isSignedUp ? (<p>Sign Up</p> ) : <p>Log In</p> } </button> 
      ) : null }

    </div>
  );
}

export default App;

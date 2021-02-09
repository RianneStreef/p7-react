import React , { useState }  from 'react';
import './SignUp.css'

function signUp () {

  // const [isSignedUp, setSignUp] = useState(false);


  // function changeSignUp() {
  //   setSignUp(!isSignedUp);
  // }

  return (
    <div class='sign-up'>
      <h1>Sign Up</h1>
      <form>
        <div class='form-group'>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class='form-group'>
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" /> 
        </div>
        <div class='form-group'>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class='form-group'>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div class='button-container'>
          <button type="submit">Sign up</button>
        </div>
    </form>
  </div>

  );
}

export default signUp;



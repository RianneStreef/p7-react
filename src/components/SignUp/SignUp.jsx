import React, { useState } from 'react';
import './SignUp.css';

function signUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    email: '',
    password: '',
    first:'',
    last:'',
  });

  const handleInput = (event) => {
    setSignUpDetails((prevState) => {
      const inputDetails = {
        ...prevState, 
        [event.target.name]: event.target.value,
      };
      return inputDetails
    });
  };

  const { email, password, first, last } = signUpDetails;

  return (
    <div className="sign-up card">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" value={email} onChange={handleInput}/>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input type="text" id="password" name="password" value={password} onChange={handleInput} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="first">
            First name:
            <input type="text" id="first" name="first" value={first} onChange={handleInput} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="last">
            Last name:
            <input type="text" id="last" name="last" value={last} onChange={handleInput} />
          </label>
        </div>


        <div className="button-container">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>

  );
}

export default signUp;

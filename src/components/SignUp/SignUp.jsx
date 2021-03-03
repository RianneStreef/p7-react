import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

function signUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    email: 'asd@assad.com',
    password: 'asda',
    first: 'asd',
    last: 'asdsad',
  });
  const { email, password, first, last } = signUpDetails;

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post('http://localhost:3011/api/auth/signup', signUpDetails);
    } catch (err) {
      console.error('Error submitting form');
    }
  };

  const handleInput = (event) => {
    setSignUpDetails((prevState) => {
      const inputDetails = {
        ...prevState,
        [event.target.name]: event.target.value,
      };
      return inputDetails;
    });
  };

  return (
    <div className="sign-up card">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="first">
            First name:
            <input
              type="text"
              id="first"
              name="first"
              value={first}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="last">
            Last name:
            <input
              type="text"
              id="last"
              name="last"
              value={last}
              onChange={handleInput}
            />
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

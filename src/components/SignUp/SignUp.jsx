import React from 'react';
import './SignUp.css';

function signUp() {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input type="text" id="password" name="password" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
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

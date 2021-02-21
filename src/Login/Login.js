/* eslint-disable */
import React from 'react';
import './Login.css';

function login() {
  return (
    <div class="login">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" />
        </div>
        <div class="button-container">
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default login;

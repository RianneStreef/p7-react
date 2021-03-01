import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setUserDetails((prevState) => {
      const loginDetails = {
        ...prevState,
        [event.target.name]: event.target.value,
      };
      return loginDetails;
    });
  };

  const { email, password } = userDetails;

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" value={email} onChange={handleInput} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input type="text" id="password" name="password" value={password} onChange={handleInput} />
          </label>
        </div>
        <div className="button-container">
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

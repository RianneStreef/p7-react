/* eslint-disable react/prop-types */
import React from 'react';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

/* const FormToDisplay = ({ isSignedUp }) => (
  <div>{isSignedUp ? <SignUp /> : <Login />}</div>
); */

function FormToDisplay({ isSignedUp }) {
  // const { isSignedUp } = props;
  return <div>{!isSignedUp ? <SignUp /> : <Login />}</div>;
}

export default FormToDisplay;

import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

function FormToDisplay() {
  const [isSignedUp] = useState();
  console.log(isSignedUp);

  return (
    <div>
      { isSignedUp ? (
        <SignUp />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default FormToDisplay;

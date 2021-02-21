/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import './Form.css';

// Destructor in the parameter
// function Form({handleSubmit}) {

function Form(props) {
  // const { handleSubmit } = props;
  const handleSubmit = props.handleSubmit;

  // eslint-disable-next-line no-unused-vars
  const [userDetails, setUserDetails] = useState({
    firstName: 'Rianne',
    lastName: '',
    email: 'rianne@gmail.com',
  });

  // Selecting key in object:
  // 1st method, .dot notation
  // myObject.firstName
  // 2nd method
  // myObject['myKey']
  // --
  // myObj.firstName: "rianne"

  // eslint-disable-next-line no-unused-vars
  const handleInput = (event) => {
    // controlName can be 'firstName' or 'lastName' or 'email'
    // const controlName = event.target.name;

    // We are going to use controlName to select the correct
    //    key in the object
    setUserDetails((prevState) => {
      const newObject = {
        ...prevState,
        // myObj.firstName: "rianne"
        [event.target.name]: event.target.value,
      };
      return newObject;
    });
  };

  return (
    <div>
      <form className="form-main" onSubmit={handleSubmit}>
        <h2>Form</h2>
        <label htmlFor="first-name">
          First className
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="last-name">
          Last name
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

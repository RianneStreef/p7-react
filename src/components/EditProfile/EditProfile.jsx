import React, { useState } from 'react';

function EditProfile(props) {
  const { editProfile, changeProfileDetails } = props;

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    first:'',
    last:'',
    picture:'',
  });

  function closeEditProfile() {
    changeProfileDetails(!editProfile);
  }

  const handleInput = (event) => {
    setUserDetails((prevState) => {
      const changingDetails = {
        ...prevState, 
        [event.target.name]: event.target.value,
      };
      return changingDetails
    });
  };

  const { email, password, first, last, picture } = userDetails;

  return (
    <div>
      <h1>Edit Profile</h1>
      <button type="button" onClick={closeEditProfile}>X</button>

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
        <div className="form-group">
          <label htmlFor="picture">
            Upload picture:
            <input type="text" id="picture" name="picture" value={picture} onChange={handleInput} />
          </label>
        </div>
    

        <div className="button-container">
          <button type="submit">Save changes</button>
        </div>
      </form>

    </div>
  );
}

export default EditProfile;
import React from 'react';

function ShowProfile(props) {
  const { editProfile, changeProfileDetails } = props;

  function showEditProfile() {
    changeProfileDetails(!editProfile);
    console.log('change state edit profile to true')
  }
  return (
    <div>
      <h1>Show Profile</h1>
      <p>
      <span>Rianne</span>
      <span>Streef</span>
      </p>
      <p>Email: <span>riannestreef@gmail.com</span></p>
      <img src="../img/icon-red.png" alt="You!" />
      <button type="button" onClick={showEditProfile}>Edit Profile</button>
    </div>
  );
}

export default ShowProfile;
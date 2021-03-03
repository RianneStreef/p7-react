import React from 'react';

function ShowProfile(props) {
  const { editProfile, changeProfileDetails } = props;

  function showEditProfile() {
    changeProfileDetails(!editProfile);
    console.log('change state edit profile to true')
  }
  return (
    <div className="card">
      <h1>Profile</h1>
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
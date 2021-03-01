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
      <button type="button" onClick={showEditProfile}>Edit Profile</button>
    </div>
  );
}

export default ShowProfile;
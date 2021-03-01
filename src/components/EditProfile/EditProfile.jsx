import React from 'react';

function EditProfile(props) {
  const { editProfile, changeProfileDetails } = props;

  function closeEditProfile() {
    changeProfileDetails(!editProfile);
  }
  return (
    <div>
      <h1>Edit Profile</h1>
      <button type="button" onClick={closeEditProfile}>X</button>

    </div>
  );
}

export default EditProfile;
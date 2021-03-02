import React from 'react';
import ShowProfile from '../ShowProfile/ShowProfile'
import EditProfile from '../EditProfile/EditProfile'

function Profile(props) {
  const { editProfile, changeProfileDetails } = props;
  return (
    <div>
      <div>{editProfile ?  <EditProfile editProfile={editProfile} changeProfileDetails={changeProfileDetails} /> : <ShowProfile editProfile={editProfile} changeProfileDetails={changeProfileDetails}  /> }</div>
    </div>
  );
}

export default Profile;

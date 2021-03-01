import React from 'react';
import Profile from '../Profile/Profile';
import AddArticle from '../AddArticle/AddArticle'


function LoggedInDisplay(props) {
  const { showProfile } = props;
  return (
    <div>{showProfile ?  <Profile /> : <AddArticle /> }</div>
  );
}

export default LoggedInDisplay;
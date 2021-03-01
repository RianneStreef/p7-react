import React from 'react';
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'
import Profile from '../Profile/Profile'


// function LoggedInDisplay(props) {
//   const { showLoggedInForms, setLoggedInForms } = props;
//   return (
//     <div>{showLoggedInForms ?  <LoggedInForms /> : <ArticleDisplay  showLoggedInForms={showLoggedInForms}
//     setLoggedInForms={setLoggedInForms}/> }</div>
//   );
// }

function LoggedInDisplay(props) {
  const { showProfile, editProfile, changeProfileDetails } = props;
  return (
    <div>{showProfile ?  <Profile editProfile={editProfile} changeProfileDetails={changeProfileDetails} /> : <ArticleDisplay /> }</div>
  );
}

export default LoggedInDisplay;
import React from 'react';
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'
import Profile from '../Profile/Profile'

function LoggedInDisplay(props) {
  const { showProfile, editProfile, changeProfileDetails, addArticle, setAddArticle } = props;
  return (
    <div>{showProfile ?  <Profile editProfile={editProfile} changeProfileDetails={changeProfileDetails} /> : <ArticleDisplay addArticle={addArticle}
    setAddArticle={setAddArticle} /> }</div>
  );
}

export default LoggedInDisplay;
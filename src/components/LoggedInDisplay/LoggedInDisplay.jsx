import React from 'react';
import Profile from '../Profile/Profile'
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay'


function LoggedInDisplay(props) {
  const { showProfile } = props;
  return (
    <div data-testid="test-logged-in-display">{showProfile ?  <Profile data-testid="test-profile-display"/> : <ArticleDisplay data-testid="test-article-display" /> }</div>
  );
}

export default LoggedInDisplay;
import React from 'react';
import './Article.css';

export default function displayArticles(articles) {
  const {
    title, description, usersLiked, usersDisliked,
  } = articles;
  return (
    <div className="article-container">
      {/* <a href='http://www.google.com'>  */}
      <h3>{title}</h3>
      <div>{description}</div>
      {/* </a> */}

      <i className="far fa-thumbs-up" />
      <span>{usersLiked.length}</span>
      <i className="far fa-thumbs-down" />
      <span>{usersDisliked.length}</span>
    </div>
  );
}

import React from 'react';
import { articles } from '../mock-data/mock-data';
import Article from '../Article/Article';
import './ArticleDisplay.css';

function ArticleDisplay(props) {
  const { articles } = props;

  // console.log(isLoggedIn)
  // console.log(isSignedUp)

  return (
    <div className="article-display">
      <h1>Articles</h1>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          description={article.description}
          usersLiked={article.usersLiked}
          usersDisliked={article.usersDisliked}
        />
      ))}
    </div>
  );
}

export default ArticleDisplay;

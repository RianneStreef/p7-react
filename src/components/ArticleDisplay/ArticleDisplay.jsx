/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import articles from '../../mock-data/mock-data';
import Article from '../Article/Article';
import './ArticleDisplay.css';

function ArticleDisplay() {
  const items = [
    { quantity: 1 },
    { quantity: 1 },
    { quantity: 1 },
    { quantity: 1 },
    { quantity: 1 },
    { quantity: 1 },
  ];

  // eslint-disable-next-line array-callback-return
  const newItems = items.map((item, index) => {
    return { ...item, id: index };
  });

  return (
    <div className="article-display">
      <h1>Articles</h1>
      {articles.map((article) => (
        <Article
          key={article.id}
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

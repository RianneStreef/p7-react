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

  const newItems = items.map((item, index) => ({ ...item, id: index }));

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

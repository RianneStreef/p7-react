import React from 'react';
import articles from '../../mock-data/mock-data';
import Article from '../Article/Article';
import './ArticleDisplay.css';

function ArticleDisplay() {
  return (
    <div className="article-display">
      <h1>Articles</h1>
      { articles.map((article) => (
        <Article
          key={article.index}
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
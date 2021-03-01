import React from 'react';
import articles from '../../mock-data/mock-data';
import Article from '../Article/Article';
import './ArticleDisplay.css';

function ArticleDisplay() {
  return (
    <div className="article-display">
      <h1>Articles</h1>
      <button type="button">Add Article</button>
      { articles.map((article) => (
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

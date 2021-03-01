import React from 'react';
import articles from '../../mock-data/mock-data';
import Article from '../Article/Article';
import './ArticleDisplay.css';

function ArticleDisplay(props) {
  const { showLoggedInForms, setLoggedInForms } = props;

  function openLoggedInForms() {
      setLoggedInForms(!showLoggedInForms);
    }
  
  return (
    <div className="article-display">
      <h1>Articles</h1>
      {/* <button type="button" onClick={openLoggedInForms}>Add Article</button> */}
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

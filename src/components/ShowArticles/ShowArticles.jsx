import React from 'react';
// import articles from '../../mock-data/mock-data';
import Article from '../Article/Article';

function ShowArticles(props) {
  const { addArticle, setAddArticle, articles } = props;

  function openAddArticle() {
    setAddArticle(!addArticle);
  }

  return (
    <div className="article-display">
      <button type="button" onClick={openAddArticle}>
        Add Article
      </button>
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

export default ShowArticles;

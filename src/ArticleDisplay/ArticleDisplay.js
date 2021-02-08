import React from 'react';
import { articles } from '../mock-data/mock-data';
import Article from '../Article/Article'


function ArticleDisplay () {
  return (
    <div>
    <h1>Articles</h1>
      { articles.map((article, index) => (
        <Article 
        key={index}
        title={article.title}
        description={article.description}
        />
    ))}
    </div>
  );
};



export default ArticleDisplay
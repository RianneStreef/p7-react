import React from 'react';
import './ArticleDisplay.css';
import AddArticle from '../AddArticle/AddArticle';
import ShowArticles from '../ShowArticles/ShowArticles'

function ArticleDisplay(props) {
  const { addArticle, setAddArticle } = props;
  
  return (
    <div>
        <h1>Articles</h1>
        <div>{addArticle ?  <AddArticle addArticle={addArticle} 
        setAddArticle={setAddArticle} /> : <ShowArticles addArticle={addArticle} 
        setAddArticle={setAddArticle} />}
        </div>
    </div>
  );
}

export default ArticleDisplay;

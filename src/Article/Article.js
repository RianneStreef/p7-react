import React from 'react';
import './Article.css';

// function displayArticles () {

//   console.log(articles);



//   return (
//     <div>
//     <h2>Name</h2> 
//     <div>id</div>
//     </div>
//   )
// }

// export default displayArticles

export default function displayArticles(articles) {
  const title = articles.title;
  const description = articles.description;
  const usersLiked = articles.usersLiked
  const usersDisliked = articles.usersDisliked
 
  return (
    <div className="article-container">
      {/* <a href='http://www.google.com'>  */}
      <h3>{title}</h3>
      <div>{description}</div>
            {/* </a> */}

      <i class="far fa-thumbs-up"></i>
      <span>{usersLiked.length}</span>
      <i class="far fa-thumbs-down"></i>
      <span>{usersDisliked.length}</span>
    </div>
  );
}
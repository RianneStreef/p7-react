import React from 'react';

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
 
  return (
    <div className="item__container">
      <div>{title}</div>
      <div>{description}</div>
   
    </div>
  );
}
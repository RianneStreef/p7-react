import React, { useState } from 'react';

function AddArticle(props) {
  const {addArticle, setAddArticle} = props;
  const [articleDetails, setArticleDetails] = useState({
    title: '',
    description: '',
    url: '',
    usersLiked: [],
    usersDisliked: [],
  })

function closeAddArticle() {
  setAddArticle(!addArticle);
}

const handleInput = (event) => {
  setArticleDetails((prevState) => {
    const newDetails = {
      ...prevState,
      [event.target.name]: event.target.value,
    };
    return newDetails;
  });
};

const { title, description, url, usersLiked, usersDisliked } = articleDetails;

return (
  <div className="card">
    <div className="cardTitle">
  <h1>Add Article</h1>
    <button type="button" onClick={closeAddArticle}>X</button>
    </div>
    <form>
        <div className="form-group">
          <label htmlFor="title">
            Title:
            <input type="text" id="title" name="title" value={title} onChange={handleInput}/>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description:
            <input type="text" id="description" name="description" value={description} onChange={handleInput} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="url">
            Url:
            <input type="text" id="url" name="url" value={url} onChange={handleInput} />
          </label>
        </div>
      </form>


    <button type="button">Submit Article</button>
  </div>
)}

export default AddArticle;



 


   




import axios from 'axios';

export const addArticle = () => {};

/**
 * User clicks the thumbs up and likes the article
 */
export const likeArticle = () => {
  // Do API call to like article
  axios.post('localhost:3011', {
    id: 0,
    name: 'Username',
  });
};

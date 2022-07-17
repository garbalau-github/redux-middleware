import axios from 'axios';

export const fetchPosts = () => {
  const promise = axios.get('https://jsonplaceholder.typicode.com/posts');

  return {
    type: 'FETCH_POSTS',
    payload: promise,
  };
};

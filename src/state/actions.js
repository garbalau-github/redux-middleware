import axios from 'axios';

export const fetchPosts = () => {
  const promise = axios.get('https://jsonplaceholder.typicode.com/posts');

  return {
    type: 'FETCH_POSTS',
    payload: promise,
  };
};

export const fetchPostsAsync = () => async (dispatch, _) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

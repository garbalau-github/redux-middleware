import axios from 'axios';

export const fetchPosts = () => {
  const promise = axios.get('https://jsonplaceholder.typicode.com/posts');

  return {
    type: 'FETCH_POSTS',
    payload: promise,
  };
};

export const fetchPostsAsync = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response.data);
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

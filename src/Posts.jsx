import React from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchPosts } from './state/actions';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <div>Posts</div>;
};

export default Posts;

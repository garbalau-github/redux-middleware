import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchPostsAsync } from './state/actions';

const Posts = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      <div>
        {posts.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    </div>
  );
};

export default Posts;

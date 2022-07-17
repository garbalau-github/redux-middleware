import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync } from './state/actions';

const Posts = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  const renderPosts = () => {
    if (state.loading === true) {
      return (
        <>
          <div>
            <h1>Loading...</h1>
          </div>
        </>
      );
    }
    return (
      <div>
        {state.items.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    );
  };

  return (
    <div>
      <h4>Posts</h4>
      {renderPosts()}
    </div>
  );
};

export default Posts;

import React from 'react';
import { useSelector } from 'react-redux';

import Post from 'components/Posts/Post/Post';

const Posts = () => {
  const posts = useSelector(state => state.posts);

  console.log(posts);

  return (
    <>
      <p>Posts:</p>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;

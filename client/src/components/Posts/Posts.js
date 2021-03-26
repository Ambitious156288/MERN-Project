import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Post from 'components/Posts/Post/Post';

const Posts = () => {
  const posts = useSelector(state => state.posts);

  console.log(posts);

  return (
    <>
      {!posts.length ? (
        <LinearProgress />
      ) : (
        <Grid container alignItems="stretch" spacing={2}>
          {posts.map(post => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;

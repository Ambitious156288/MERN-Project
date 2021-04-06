import React from 'react';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Post from 'components/Posts/Post/Post';

// const styledGridCenter = styled(Grid)``;

const Posts = ({ setCurrentId, modalOpenFn }) => {
  const posts = useSelector(state => state.posts);

  console.log(posts);

  return (
    <>
      {!posts.length ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid key={post._id} item sm={6} xs={12}>
              <Post post={post} setCurrentId={setCurrentId} modalOpenFn={modalOpenFn} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;

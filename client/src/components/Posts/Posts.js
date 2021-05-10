import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Post from 'components/Posts/Post/Post';
import { Alert, AlertTitle } from '@material-ui/lab';

import { user } from 'constants/userConstant';

import TablePagination from '@material-ui/core/TablePagination';

// const posts = [
//   { title: 'a', description: 'b', name: 'c', creator: 'd', tags: ['das', 'das'] },
//   { title: 'a', description: 'b', name: 'c', creator: 'd', tags: ['das', 'das'] },
//   { title: 'a', description: 'b', name: 'c', creator: 'd', tags: ['das', 'das'] },
// ];

const Posts = ({ setCurrentId, modalOpenFn }) => {
  const posts = useSelector(state => state.posts);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {!user?.result?.name && (
        <>
          <Alert severity="info">
            <AlertTitle>
              <strong>Tip</strong>
            </AlertTitle>
            Please Sign in to start!
          </Alert>
        </>
      )}

      <br />

      <TablePagination
        labelRowsPerPage={'Posts per page:'}
        component="div"
        count={posts.length}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[2, 10, { label: 'All', value: posts.length }]}
        // rowsPerPageOptions={[5, 10, 25]}
      />

      {!posts.length ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post, index) => (
            <Grid key={index} item sm={6} xs={12}>
              <Post post={post} setCurrentId={setCurrentId} modalOpenFn={modalOpenFn} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

Posts.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
  modalOpenFn: PropTypes.func.isRequired,
};

export default Posts;

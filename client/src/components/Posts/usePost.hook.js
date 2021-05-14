import { useState } from 'react';
import { useSelector } from 'react-redux';

const usePost = () => {
  const posts = useSelector(state => state.posts);
  const user = useSelector(({ auth }) => auth.user);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return { posts, user, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage };
};

export default usePost;

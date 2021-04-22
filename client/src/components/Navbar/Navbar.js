import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -40,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Navbar = ({ handleOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);

  // useEffect(() => {
  //   const token = user.token;
  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [location]);

  const logOut = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Fab color="secondary" aria-label="add" className={classes.fabButton}>
        <AddIcon type="button" onClick={handleOpen} fontSize="large" color="primary" />
      </Fab>

      <Toolbar>
        <Typography variant="h3">memorable events</Typography>
      </Toolbar>

      {user ? (
        <Toolbar>
          <p>{user.result.name} | </p>
          <Button to="/auth" component={Link} color="inherit" onClick={logOut}>
            Logout
          </Button>
        </Toolbar>
      ) : (
        <Button to="/auth" component={Link} color="inherit">
          Sign in
        </Button>
      )}
    </AppBar>
  );
};

Navbar.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Navbar;

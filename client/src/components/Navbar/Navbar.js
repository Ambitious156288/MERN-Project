import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SnackbarHello from 'components/SnackbarHello/SnackbarHello';

import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

import routes from 'constants/routes';

import decode from 'jwt-decode';

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

  const logOut = () => {
    dispatch({ type: 'LOGOUT' });
    history.push(routes.home);
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      const decodedToken = decode(user.token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Fab color="secondary" aria-label="add" className={classes.fabButton} disabled={!user}>
        <AddIcon type="button" onClick={handleOpen} fontSize="large" color="primary" />
      </Fab>

      <Toolbar>
        <Typography variant="h5">memorable events</Typography>
      </Toolbar>

      {user ? (
        <>
          <SnackbarHello loginMessage={`Hello ${user?.result?.name} !!!`} />
          <Toolbar>
            <Button to={routes.auth} component={Link} color="inherit" onClick={logOut}>
              Logout
            </Button>
          </Toolbar>
        </>
      ) : (
        <Button to={routes.auth} component={Link} color="inherit">
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

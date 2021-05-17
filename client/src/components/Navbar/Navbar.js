import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SnackbarHello from 'components/SnackbarHello/SnackbarHello';

import { Link } from 'react-router-dom';
import routes from 'constants/routes';

import useStyles from './Navbar.styles';
import useNavbar from './useNavbar.hook';

const Navbar = ({ handleOpen }) => {
  const classes = useStyles();

  const { user, logOut } = useNavbar();

  return (
    // change logic !!!
    // if (!user) {
    //   ...
    //   return null;
    // }

    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fabButton}
        disabled={!user?.result}
      >
        <AddIcon type="button" onClick={handleOpen} fontSize="large" color="primary" />
      </Fab>

      <Toolbar>
        <Typography variant="h5">memorable events</Typography>
      </Toolbar>

      {user?.result ? (
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

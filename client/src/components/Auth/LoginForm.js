import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Owl from './OwlAnimation/Owl';

import { GoogleLogin } from 'react-google-login';

import GoogleLoginIcon from '../../utils/svg/GoogleLoginIcon';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({
  SignIn,
  switchMode,
  googleSuccess,
  googleError,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();

  const [focus, setFocus] = useState(false);

  const getClass = () => {
    if (focus === true) return 'password';
    else return '';
  };

  const inputClass = getClass();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            {SignIn ? 'Sign in' : 'Sign up'}
          </Typography>
          <br />
          <br />
          <br />

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Owl inputClass={inputClass} />
            <Grid container spacing={2}>
              {!SignIn && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onBlur={() => setFocus(false)}
                  onFocus={() => setFocus(true)}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {SignIn && (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {SignIn ? 'Sign In' : 'Sign Up'}
            </Button>
            <GoogleLogin
              clientId="380805768864-4ljavc4m222jbchr27vs0k7cbrpmr3qs.apps.googleusercontent.com"
              render={renderProps => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<GoogleLoginIcon />}
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />

            <hr />

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={switchMode}>
                  {SignIn ? `Don't have an account? Sign Up` : `Already have an account? Sign in`}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

LoginForm.propTypes = {
  SignIn: PropTypes.bool.isRequired,
  switchMode: PropTypes.func.isRequired,
  googleSuccess: PropTypes.func.isRequired,
  googleError: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;

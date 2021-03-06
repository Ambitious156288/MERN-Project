import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import 'components/Auth/OwlAnimation/Owl.styles.css';
import Owl from './OwlAnimation/Owl';

import { GoogleLogin } from 'react-google-login';
import GoogleLoginIcon from '../../utils/svg/GoogleLoginIcon';

import useStyles from './LoginForm.styles';

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
            {SignIn ? 'Sign up' : 'Sign in'}
          </Typography>
          <br />
          <br />
          <br />

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Owl inputClass={inputClass} />
            <Grid container spacing={2}>
              {SignIn && (
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {SignIn ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_ID}
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
                  {SignIn ? `Already have an account? Sign in` : `Don't have an account? Sign Up`}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;

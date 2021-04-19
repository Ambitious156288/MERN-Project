import React, { useState } from 'react';

import LoginForm from './LoginForm';
import './OwlStyles.css';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const [isSignIn, setSignIn] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => setSignIn(!isSignIn);

  const googleSuccess = async res => {
    const result = res.profileObj;
    const token = res.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful :/');

  return (
    <>
      <LoginForm
        SignIn={isSignIn}
        switchMode={switchMode}
        googleSuccess={googleSuccess}
        googleError={googleError}
      />
    </>
  );
};

export default Auth;

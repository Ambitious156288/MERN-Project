import React, { useState } from 'react';

import LoginForm from './LoginForm';
import './OwlStyles.css';

const Auth = () => {
  const [isSignIn, setSignIn] = useState(true);

  const switchMode = () => setSignIn(!isSignIn);

  return (
    <>
      <LoginForm SignIn={isSignIn} switchMode={switchMode} />
    </>
  );
};

export default Auth;

import React, { useState } from 'react';

import LoginForm from './LoginForm';

// import './css/checkbox.css';
// import './css/global.css';
// import './css/index.css';
// import './css/main.css';
// import './css/media-queries.css';
// import './css/variables.css';

import './styles.css';

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

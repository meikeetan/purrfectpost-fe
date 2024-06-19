import React, { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp'
import "./Authentication.css"

function Authentication(props) {
  const {setUser} = props
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <div>
      <h1 className='title'> PURRFECT POST</h1>
        {isSignIn?'Welcome back pls Log in':'new here? sign up here'}
        {isSignIn ? <Login setUser={setUser} /> : <SignUp setUser={setUser} />}
        <button onClick={() => setIsSignIn(!isSignIn)}>
          {isSignIn ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </>
  );
}

export default Authentication;
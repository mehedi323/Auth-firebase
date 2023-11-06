/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState()
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider()


  const handleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGitHubLogIn = () =>{
    signInWithPopup(auth , gitHubProvider)
    .then(result =>{
      const gitHubUser = result.user;
      console.log(gitHubUser);
      setUser(gitHubUser)
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const handleLogOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      {user ?
        <button onClick={handleLogOut}>Log-Out</button> :
        <>
          <button onClick={handleLogIn}>LogIn</button>
          <button onClick={handleGitHubLogIn}>GitHub-Login</button>
        </>
      }
      {
        user &&
        <div>
          <h1>Name: {user.displayName}</h1>
          <p>Email:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;
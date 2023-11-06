/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const SingIn = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const logginUser = result.user;
        console.log(logginUser);
        setUser(logginUser)
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  const handleGitHubLogin = () =>{
    signInWithPopup(auth , gitHubProvider)
    .then(result=>{
      const gitHubUser = result.user;
      console.log(gitHubUser);
      setUser(gitHubUser)
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleSingOut = () => {
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
    <div className='text-center mt-8'>
      { user?
      <button className='bg-blue-950 text-white p-3 rounded-xl font-bold' onClick={handleSingOut}>Sing-Out</button> :
      <>
         <button className='bg-blue-950 mr-4 text-white p-3 rounded-xl font-bold' onClick={handleSingIn}>Sing-In</button>
         <button className='bg-lime-500 text-white p-3 rounded-xl font-bold' onClick={handleGitHubLogin}>GitHub-logIn</button>
      </>
      }
      {user && <div>
        <h1>User-Name:{user.displayName}</h1>
        <p>Email-Name:{user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
};

export default SingIn;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const SingIn = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const logginUser = result.user;
        console.log(logginUser);
        setUser(logginUser)
      })
      .catch(error => {
        console.log('error', error);
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
    <div>
      { user?
      <button onClick={handleSingOut}>Sing-Out</button> :
      <button onClick={handleSingIn}>Sing-In</button>
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
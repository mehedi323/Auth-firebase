/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const SingUp = () => {
  const [user, setUsre] = useState()
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleSingUp = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const singUpUser = result.user;
        console.log(singUpUser);
        setUsre(singUpUser)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUsre(null)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      { user ?
       <button onClick={handleSingOut}>Sing-Out</button> :
       <button onClick={handleSingUp}>Sing-Up</button>
      }
      {user && <div>
        <h1>Name:{user.displayName}</h1>
        <p>Email:{user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
};

export default SingUp;
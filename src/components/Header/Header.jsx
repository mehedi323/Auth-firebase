/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div> 
      <Link className='mr-4 text-2xl font-bold' to='/'>Home</Link> 
      <Link className='mr-4 text-2xl font-bold' to='/login'>Login</Link> 
      <Link className='mr-4 text-2xl font-bold' to='/singin'>SingIn</Link> 
      <Link className='mr-4 text-2xl font-bold' to='/singup'>SingUp</Link> 
    </div>
  );
};

export default Header;
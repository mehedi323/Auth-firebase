/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='text-center mt-12'> 
      <Link className='mr-4 bg-purple-900 p-2 rounded-xl text-xl text-white font-bold' to='/'>Home</Link> 
      <Link className='mr-4 bg-green-800 p-2 rounded-xl text-xl font-bold' to='/login'>Login</Link> 
      <Link className='mr-4 bg-yellow-500 p-2 rounded-xl text-xl text-gray-700 font-bold' to='/singin'>SingIn</Link> 
      <Link className='mr-4 bg-red-800 p-2 rounded-xl text-xl text-white font-bold' to='/singup'>SingUp</Link> 
    </div>
  );
};

export default Header;
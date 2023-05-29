import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser } = useAuth()

  async function submitHandler() {
      try {
        await login();
      } catch (err) {
        setError('Failed to sign in with Google');
      }
    
  }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
      <h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>
        Login
      </h1>
      {error && (
        <div className='w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2'>
          {error}
        </div>
      )}
      <button
        onClick={submitHandler}
        className='w-full max-w-[40ch] border border-yellow-500 border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-yellow-500 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-red-900'
      >
        <h2 className='relative z-20'>
          SIGN IN WITH GOOGLE
        </h2>
      </button>
     
    </div>
  );
}

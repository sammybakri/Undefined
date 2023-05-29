import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { currentUser } = useAuth();
  const [email, setEmail] = useState('');

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    // Perform search logic here
    console.log('Search submitted:', searchValue);
    setSearchValue('');
  }

  useEffect(() => {
    if (currentUser) {
      const splitEmail = currentUser.email.split('@')[0]; 
      setEmail(splitEmail);
    } else {
      const splitEmail = 'Sign in'; 
      setEmail(splitEmail);
      
    }
  }, [currentUser]);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className='sticky top-0 w-full left-0 bg-inherit flex flex-wrap items-center justify-between p-4 border-b border-solid border-yellow-500'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl select-none flex-1'>
          UMN STORE
        </h1>
        <form onSubmit={handleSearchSubmit} className='flex items-center'>
          <input
            type='text'
            value={searchValue}
            onChange={handleSearchChange}
            placeholder='Search'
            className='px-2 py-1 sm:px-4 sm:py-2 border border-solid border-red-900 rounded-l-lg outline-none text-red-900'
          />
          <button
            type='submit'
            className='px-2 py-1 sm:px-4 sm:py-2 bg-yellow-500 text-white rounded-r-lg'
          >
            Search
          </button>
        </form>
        <div className='flex items-center'>
          <i
            onClick={() => setOpenModal(true)}
            className='fa-solid fa-user text-center text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl ml-2'
          >
            <h3 className='select-none text-xs ' >{email}</h3>
          </i>
         
        </div>
      </div>
    </>
  );
}

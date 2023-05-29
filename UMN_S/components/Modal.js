import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';


export default function Modal(props) {
  const { setOpenModal } = props;
  const [_document, set_document] = useState(null);
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  
  const router = useRouter();

  useEffect(() => {
    set_document(document);
  }, []);

  if (!_document) {
    return null;
  }
  

  const handleLogout = () => {
    
    logout();
    router.push('/');
    setOpenModal(false);
  };

  const navigateToFeedbackPage = () => {
    router.push('/Feedback');
  };

  const navigateToAboutPage = () => {
    router.push('/About');
  };

  const navigateToHomePage = () => {
    router.push('/HomePage');
  };
  const navigateToUserDashboard = () => {
    router.push('/');
  };



  return ReactDom.createPortal(
    <div className='fixed inset-0 bg-white text-red-900 text-lg sm:text-xl flex flex-col'>
      <div className='flex items-center justify-between border-b border-solid border-red-900 p-4'>
        <h1 className='font-extrabold text-2xl sm:text-5xl select-none'>MENU</h1>
        <i
          onClick={() => setOpenModal(false)}
          className='fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer'
        ></i>
      </div>

      <div className='p-4 flex flex-col gap-3'>
        <h2 onClick={handleLogout} className='select-none duration-300 hover:pl-2 cursor-pointer'>
        {currentUser? 'Logout':'Login'}
        </h2>
      </div>
      {currentUser &&(<div className='p-4 flex flex-col gap-3'>
        <h2
          onClick={()=> {
            navigateToUserDashboard() 
            setOpenModal(false)}}
          className='select-none duration-300 hover:pl-2 cursor-pointer'
        >
          UserDashboard
        </h2>
      </div>
)}
      
      <div className='p-4 flex flex-col gap-3'>
        <h2
          onClick={()=> {
            navigateToHomePage() 
            setOpenModal(false)}}
          className='select-none duration-300 hover:pl-2 cursor-pointer'
        >
          Home Page
        </h2>
      </div>

      <div className='p-4 flex flex-col gap-3'>
        <h2
          onClick={()=> {
            navigateToFeedbackPage() 
            setOpenModal(false)}}
          className='select-none duration-300 hover:pl-2 cursor-pointer'
        >
          Feedback
        </h2>
      </div>

      <div className='p-4 flex flex-col gap-3'>
        <h2
          onClick={()=> {
            navigateToAboutPage() 
            setOpenModal(false)}}
          className='select-none duration-300 hover:pl-2 cursor-pointer'
        >
          About Us
        </h2>
      </div>
    </div>,
    _document.getElementById('portal')
  );
}

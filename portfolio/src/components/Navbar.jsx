import React, { useState } from 'react';
import ContactModal from '../modal/ContactModal';

const Navbar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <div className='fixed flex justify-center w-full max-w-3xl px-10 py-3 my-5 rounded-full shadow-md bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-800'>
        <ul className='flex items-center gap-10 font-semibold text-slate-700 dark:text-neutral-300'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Skills</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>Certificates</li>
          <li className='px-5 py-1 rounded-full cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 text-neutral-300' onClick={handleOpenModal}>
            Contact Us
          </li>
        </ul>
      </div>

      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Navbar;

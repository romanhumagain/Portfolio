// MobileNavbar.js
import React, { useState } from 'react';
import ContactModal from '../../modal/ContactModal';

const MobileNavbar = ({ homeRef, aboutRef, skillsRef, servicesRef, projectsRef, certificatesRef, scrollToSection }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenModal = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false); // Close the menu on modal open
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button onClick={handleToggleMenu} className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 z-50 w-48 py-2 mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Certificates'].map((section, index) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection([homeRef, aboutRef, skillsRef, servicesRef, projectsRef, certificatesRef][index]);
                setIsMenuOpen(false); // Close menu after selection
              }}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {section}
            </button>
          ))}

          <button
            className="block w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-pink-600 to-purple-700 hover:bg-gradient-to-l"
            onClick={handleOpenModal}
          >
            Contact Us
          </button>
        </div>
      )}

      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MobileNavbar;

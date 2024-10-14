import React, { useEffect, useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isModalOpen) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      document.body.style.overflow = 'unset';
    }
    return () => {
      // Cleanup: Ensure scrolling is enabled when modal is unmounted
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    closeModal(); // Close the modal after submission if needed
  };

  const handleBackdropClick = (e) => {
    // Close modal if the backdrop (not the modal itself) is clicked
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60 duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={handleBackdropClick}
    >
      <div className={`max-w-md w-full p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg transform transition-transform duration-300 ${isModalOpen ? "translate-y-0" : "-translate-y-20"}`}>
        <button
          type="button"
          className="absolute top-3 right-3.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeModal}>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className='mb-6'>
          <h2 className="mt-1 text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
            Contact Us
          </h2>

          <p className='mt-1 font-light text-gray-600 text-md dark:text-gray-400'>Please leave valid Email to get reply.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-serif text-gray-800 dark:text-gray-300" htmlFor="fullName">Full Name</label>
            <input className="block w-full p-2 mt-1 bg-gray-200 dark:bg-neutral-700 dark:text-gray-300 focus:outline-none rounded-xl" type="text" id="fullName" required />
          </div>

          <div className="mb-4">
            <label className="font-serif text-gray-800 dark:text-gray-300" htmlFor="email">Email</label>
            <input className="block w-full p-2 mt-1 bg-gray-200 dark:bg-neutral-700 dark:text-gray-300 focus:outline-none rounded-xl" type="email" id="email" required />
          </div>

          <div className="mb-4">
            <label className="font-serif text-gray-800 dark:text-gray-300" htmlFor="message">Message</label>
            <textarea className="block w-full h-32 p-3 mt-1 bg-gray-200 dark:bg-neutral-700 dark:text-gray-300 focus:outline-none rounded-xl" id="message" required />
          </div>

          <button type="submit" className="w-full px-4 py-2 mt-4 font-semibold text-white transition duration-200 rounded-full text-md bg-gradient-to-r from-pink-600 to-purple-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;

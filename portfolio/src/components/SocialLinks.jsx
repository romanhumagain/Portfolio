import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import icons

const SocialLinks = () => {
  return (
    <div className='mt-3'>
      <p className='text-lg font-medium text-slate-600 dark:text-neutral-400'>Find me on</p>
      <div className='flex gap-5 mt-5'>
        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com'
          className='text-blue-600 transition-transform transform hover:text-blue-800 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size={25} />
        </a>

        {/* GitHub */}
        <a
          href='https://www.github.com'
          className='text-gray-800 transition-transform transform dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-200 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub size={25} />
        </a>

        {/* Instagram */}
        <a
          href='https://www.instagram.com'
          className='text-pink-500 transition-transform transform dark:text-pink-700 hover:text-pink-700 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram size={25} />
        </a>

        {/* Facebook */}
        <a
          href='https://www.facebook.com'
          className='text-blue-700 transition-transform transform hover:text-blue-900 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook size={25} />
        </a>

        {/* X (Twitter) */}
        <a
          href='https://www.twitter.com'
          className='text-blue-500 transition-transform transform hover:text-blue-700 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter size={25} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;

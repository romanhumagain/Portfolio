import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import socialLinks from '../../data/socialLinks'

const Footer = () => {
  return (
    <footer className="py-6 text-gray-800 dark:text-gray-400">
      <div className="container flex flex-col items-center px-4 mx-auto space-y-2">
        
        {/* Social Media Section */}
        <div className="flex mb-2 space-x-6">
          <a href={socialLinks.github} className=" hover:text-gray-900 dark:hover:text-white">
            <FaGithub size={28} />
          </a>
          <a href={socialLinks.linkedin} className=" hover:text-gray-900 dark:hover:text-white">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="font-medium text-center text-gray-700 text-md dark:text-gray-300">
          Your vision, my expertise. Let's collaborate!
        </div>

        <div className="text-center text-gray-500 text-md dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Roman Humagain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

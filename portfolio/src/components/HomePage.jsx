import React from 'react';
import SocialLinks from './SocialLinks';
import main_img from '../assets/images/main_image.jpg';
import resume from '../assets/Roman_Humagain_Resume.pdf';

import { FaDownload } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import VerticalLine from './common/VerticalLine';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen ' style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='w-full max-w-2xl p-10 pt-16 mt-10 shadow-md bg-gradient-to-l from-slate-100 to-slate-300 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl'>
          <div className='grid grid-cols-12'>
            <div className='col-span-8'>
              <p className='text-sm font-medium text-slate-500 dark:text-gray-400 animate-fadeIn'>Hey✋, I'm</p>
              <p className='mt-1 text-3xl font-semibold text-slate-700 dark:text-gray-100 animate-slideIn'>Roman Humagain</p>

              <div className='mt-1'>
                {/* Add Typewriter Effect here */}
                <p className='text-lg font-semibold text-slate-700 dark:text-gray-300 animate-fadeIn'>
                  a{' '}
                  <span className="text-cyan-500 dark:text-cyan-500">
                    <Typewriter
                      words={['Software Developer', 'Full Stack Developer', 'Mobile App Developer']}
                      loop={true}
                      cursor
                      cursorStyle='|'
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </p>
              </div>

              <div className='flex items-center gap-5 mt-6'>
                <a
                  href={resume}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-5 py-1 font-semibold text-white transition-all duration-700 rounded-lg shadow-md bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 hover:shadow-lg'
                >
                  Download Resume <FaDownload />
                </a>

              </div>

              <div className='mt-4'>
                <div className='flex gap-5'>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className='col-span-4'>
              <img
                src={main_img}
                height={180}
                width={180}
                className='transition-transform duration-700 rounded-full shadow-lg hover:scale-105 hover:shadow-xl'
              />
            </div>
          </div>

          <div className='mt-10'>
            <p className="text-lg text-center text-gray-800 transition-transform duration-700 font-extralight dark:text-gray-400 hover:scale-105">
              &lt;Passion in Every Line of Code/&gt;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

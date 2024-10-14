import React from 'react';
import SocialLinks from './SocialLinks';
import main_img from '../assets/images/main_image.jpg';
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen '>
        <div className='w-full max-w-2xl p-10 pt-16 mt-10 shadow-md bg-gradient-to-l from-slate-100 to-slate-300 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl'>
          <div className='grid grid-cols-12'>
            <div className='col-span-8'>
              <p className='text-sm font-medium text-slate-500 dark:text-gray-400 animate-fadeIn'>Hey✋, I'm</p>
              <p className='mt-1 text-4xl font-semibold text-slate-700 dark:text-gray-100 animate-slideIn'>Roman Humagain</p>

              <div className='mt-1'>
                <p className='text-lg font-semibold text-slate-700 dark:text-gray-300 animate-fadeIn'>a Software Developer</p>
              </div>
              <div className='flex items-center gap-5 mt-6'>
                <button className='flex items-center gap-2 px-5 py-1 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-pink-600 to-purple-700 hover:shadow-lg'>
                  Download Resume <FaDownload />
                </button>

                {/* <button className='px-5 py-1 text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:shadow-lg'>
                  Hire Me
                </button> */}
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
            <p className="mt-5 text-lg text-center text-transparent transition-transform duration-700 text-neutral-600 font-extralight dark:text-gray-400 hover:scale-105">
              &lt;Passion in Every Line of Code/&gt;
            </p>
          </div>
        </div>

        <div className="bottom-0 w-[2px] mt-2 bg-gray-400 dark:bg-neutral-700 h-16 rounded-xl ">
        </div> 
      </div>

    </>
  );
};

export default Home;

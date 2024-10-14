import React from 'react';
import AboutCards from './AboutCards';

const About = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen bg-gradient-to-r '>
        <div className='w-full max-w-4xl p-8 rounded-lg '>
          <h2 className='mb-5 text-4xl font-bold text-center text-gray-800 dark:text-gray-200'>About Me</h2>
          <p className='font-semibold leading-relaxed text-center text-gray-700 text-md dark:text-gray-300'>
            I am a Software Engineering student, currently pursuing my studies at PCPS College, affiliated with the University of Bedfordshire. I have a strong passion for programming, specifically in Java and Python. I am highly interested in full stack development. To enhance my full stack skills, I am presently engaged in the Python Django framework, JavaScript React framework, and working with REST APIs using Django Rest Framework.
          </p>
          <p className='mt-4 font-semibold leading-relaxed text-center text-gray-700 text-md dark:text-gray-300'>
            Looking ahead, I am enthusiastic about expanding my knowledge in AI & Machine Learning.
          </p>
          <p className='mt-4 font-light leading-relaxed text-center text-gray-600 text-md dark:text-gray-400'>
            I am always looking to connect with like-minded individuals and explore new opportunities. Let's keep in touch!
          </p>
        </div>

        <div className='flex items-center gap-5'>
          <AboutCards />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className=" w-[2px]  bg-gray-400 dark:bg-neutral-700 h-16 rounded-xl ">
        </div>
      </div>
    </>
  );
};

export default About;

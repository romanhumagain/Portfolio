import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 dark:from-neutral-900 dark:to-neutral-950" style={{ fontFamily: "Montserrat, sans-serif" }}>

      <div className="max-w-lg p-6 text-center bg-white rounded-lg shadow-md dark:bg-neutral-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Project Details Unavailable
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The project details are not yet available. Please check back later for updates.
        </p>
        <p className="mt-2 font-medium text-gray-600 dark:text-gray-400">
          We appreciate your patience!
        </p>
        <div className="mt-6">
          <p
            className="inline-block px-8 py-2 font-semibold text-white transition duration-200 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-90"
            onClick={() => {
              navigate('/')
            }}
          >
            Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

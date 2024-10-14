import { FaCode } from 'react-icons/fa';
import { LiaCertificateSolid } from "react-icons/lia";

const AboutCards = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-lg px-6 py-5 transition-transform duration-300 shadow-md bg-slate-300 dark:bg-neutral-800 rounded-xl hover:shadow-lg">
        <FaCode className="mb-3 text-5xl text-slate-600 dark:text-slate-200" />

        <div className='flex items-center mt-1'>
          <p className="text-5xl font-bold text-gray-800 dark:text-gray-100">
            10
          </p>
          <p className="text-5xl font-extrabold text-gray-800 dark:text-gray-100">
            +
          </p>
        </div>
        <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-400">
          Projects Completed
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg px-6 py-5 transition-transform duration-300 shadow-md bg-slate-300 dark:bg-neutral-800 rounded-xl hover:shadow-lg">
        <LiaCertificateSolid className="mb-3 text-5xl text-slate-600 dark:text-slate-200" />

        <div className='flex items-center mt-1'>
          <p className="text-5xl font-bold text-gray-800 dark:text-gray-100">
            20
          </p>
          <p className="text-5xl font-extrabold text-gray-800 dark:text-gray-100">
            +
          </p>
        </div>
        <div>
          <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-400">
            Certificates &
          </p>

          <p className="text-lg text-center text-gray-700 dark:text-gray-400">
            Achievement
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutCards
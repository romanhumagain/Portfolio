import { LuCode2 } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import ProjectCard from "./ProjectCard";
import VerticalLine from "../common/VerticalLine";
import SectionHeading from "../common/SectionHeading";

const ProjectPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen' style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='w-full max-w-6xl mt-10 rounded-lg '>\
          <SectionHeading title={"Latest Projects"} />
          <div className="grid items-center h-full grid-cols-12 gap-10 py-5 px-14 rounded-3xl bg-gradient-to-r dark:bg-gradient-to-r from-slate-300 via-slate-300 to-slate-400 dark:from-neutral-800 dark:to-neutral-900 ">
            <div className="flex flex-col col-span-5">
              <div>
                <h2 className="mt-1 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
                  Portfolio
                </h2>
                <p className="mt-1 text-3xl font-semibold text-gray-800 dark:text-gray-200">My Project Listing</p>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                  I have developed many Full stack projects using <strong>React, Django, (MERN STACK)</strong>, and Mobile App using <strong>Flutter</strong>. Click below to view or download my projects
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button className='flex items-center gap-2 px-3 py-1 font-semibold text-white transition-transform duration-700 rounded-lg shadow-md text-md bg-gradient-to-r from-pink-600 to-purple-700 hover:shadow-lg hover:scale-105'>
                  View All Projects <GoProjectSymlink />
                </button>
                <button className='flex items-center gap-2 px-3 py-1 font-semibold text-white transition-transform duration-700 rounded-lg shadow-md text-md bg-gradient-to-r from-cyan-600 to-blue-700 hover:shadow-lg hover:scale-105'>
                  View Source Code <LuCode2 />
                </button>
              </div>
            </div>
            <div className="col-span-7">
              <div className="px-2">
                <ProjectCard />
              </div>
            </div>

          </div>
        </div>
      </div>

      <VerticalLine />
    </>

  )
}

export default ProjectPage
import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import AGIMG from '../Image/AG.JPG';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-stone-200">
        <div className="flex flex-col md:flex-row items-center justify-center w-full pl-44 pt-24">
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="font-bold text-3xl text-gray-700">
              Namastey 🙏
            </div>
            <div className="font-bold text-2xl bg-gradient-to-r from-red-400 via-blue-600 to-indigo-800 text-transparent bg-clip-text">
              It's me Ashim.
            </div>
            <div className="font-bold text-2xl bg-gradient-to-r from-black via-purple-400 to-pink-200 text-transparent bg-clip-text">
              A frontend web developer.
            </div>
            <div className="pt-8">
              <a href='/AshimCV.pdf' download='AshimCV.pdf'>
                <button className="text-white border bg-red-500 border-red-500 rounded-full w-24 h-8">
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center">
            <img className="h-44 w-44 rounded-full object-cover" src={AGIMG} alt="Ashim" />
          </div>
        </div>
      </div>
      <div>
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default Home;

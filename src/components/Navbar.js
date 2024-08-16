import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="bg-indigo-200">
        <div className="flex justify-between mx-12 py-8">
          <div>
            <h1 className="font-bold font-sans text-3xl bg-gradient-to-r from-red-400 via-blue-600 to-indigo-800 text-transparent bg-clip-text">
              ASHIM GHIMIRE
            </h1>
          </div>
          <div className="font-semibold text-2xl text-black space-x-5">
            <NavLink 
              to="/Home" 
              className={({ isActive }) => isActive ? 'underline border' : 'hover:underline'}
            >
              Home
            </NavLink>
            <NavLink 
              to="/AboutMe" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              About Me
            </NavLink>
            <NavLink 
              to="/Skills" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Skills
            </NavLink>
            <NavLink 
              to="/Projects" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/ContactMe" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Contact Me
            </NavLink>
          </div>
          <div className="space-x-4">
            <button>
              <a 
                className="flex flex-row items-center justify-center font-semibold text-xl border border-indigo-900 border-2 rounded-full p-2 font-bold" 
                href="mailto:ashimghimire33@gmail.com"
              >
                Send mail
              </a>
            </button>
            <button className="font-semibold text-xl text-white bg-red-500 rounded-full border-2 p-2">
              Call me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

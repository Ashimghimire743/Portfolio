import React from 'react'

const Skills = () => {
  return (
<div className='bg-stone-200 py-44 pt-2'>
        <h1 className='text-center text-4xl font-bold text-gray-800 mb-8 bg-stone-200 '> Skills </h1>
        <div className="mx-[25vw] bg-indigo-300 p-6 rounded shadow-md h-[18vw] w-[50vw]">
          <h2 className="text-2xl font-bold text-white mb-4">My Skills</h2>
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <span className="ml-2 text-sm font-medium text-white">Html - 90%</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <span className="ml-2 text-sm font-medium text-white">CSS - 75%</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <span className="ml-2 text-sm font-medium text-white">JavaScript - 50%</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <span className="ml-2 text-sm font-medium text-white">React-60%</span>
          </div>
         
        </div>
</div>        
      )
}

export default Skills

import React from 'react';

const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'This is the first project.',
    html_url: 'https://github.com/David-Thapa/Multi-Classification-of-Bird-Species.git',
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'This is the second project.',
    html_url: 'https://github.com/Ashimghimire743/tasktrack.git',
  },
  {
    id: 3,
    name: 'Project Three',
    description: 'This is the third project.',
    html_url: 'https://github.com/Ashimghimire743/NewsApp.git',
  },
];

const Projects = () => {
  return (
    <div className="bg-stone-200 py-24">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-12">
        {projects.map(project => (
          <div key={project.id} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-lg">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

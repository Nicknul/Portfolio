import React from 'react';
import CardList from './Card/CardList';

const ProjectPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 mb-6">Project</h1>
      <CardList />
    </div>
  );
};

export default ProjectPage;

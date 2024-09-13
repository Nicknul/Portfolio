import React from 'react';
import SiteList from './SiteList';
import IconList from './IconList';
import CardList from './Card/CardList';

const MainPage: React.FC = () => {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <SiteList />
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 mb-6">Project</h1>
        <CardList />
        <IconList />
      </div>
    </>
  );
};

export default MainPage;

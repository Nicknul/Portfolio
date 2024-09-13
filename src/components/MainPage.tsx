import React from 'react';
import SiteList from './SiteList';
import IconList from './IconList';
import ProjectPage from './ProjectPage';

const MainPage: React.FC = () => {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <SiteList />
      </div>
      <div>
        <ProjectPage />
        <IconList />
      </div>
    </>
  );
};

export default MainPage;

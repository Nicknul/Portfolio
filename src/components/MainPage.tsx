import React from 'react';
import SiteList from './SiteList';

const MainPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <SiteList />
    </div>
  );
};

export default MainPage;

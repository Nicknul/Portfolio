import React from 'react';
import Toggle from '../components/Toggle/Toggle';
import CardList from '../components/Card/CardList';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)]">
      <div className="w-full lg:max-w-[40%] mx-auto">
        <Toggle />
        <CardList />
      </div>
    </div>
  );
};

export default PortfolioPage;

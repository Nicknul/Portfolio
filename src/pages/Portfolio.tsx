import React from 'react';
import CardList from '../components/Card/CardList';
import Toggle from '../components/Toggle/Toggle';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)]">
      <Toggle />
      {/* <CardList /> */}
      <div className="p-20">Portfolio Page</div>
    </div>
  );
};

export default PortfolioPage;

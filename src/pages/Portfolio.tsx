import React, { useState } from 'react';
import Toggle from '../components/Toggle/CategoryToggle';
import CardList from '../components/Card/CardList';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'팀프로젝트' | '싱글' | '전체'>('전체');

  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)]">
      <div className="w-full lg:max-w-[40%] mx-auto">
        <Toggle selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <CardList category={selectedCategory} />
      </div>
    </div>
  );
};

export default PortfolioPage;

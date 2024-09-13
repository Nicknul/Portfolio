import React from 'react';

interface ToggleProps {
  selectedCategory: '팀프로젝트' | '싱글' | '전체';
  setSelectedCategory: (category: '팀프로젝트' | '싱글' | '전체') => void;
}

const Toggle: React.FC<ToggleProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['전체', '팀', '싱글'];

  return (
    <div className="bg-gray-200 p-1 rounded-full w-64 flex justify-between items-center">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => setSelectedCategory(category === '팀' ? '팀프로젝트' : category === '싱글' ? '싱글' : '전체')}
          className={`cursor-pointer py-2 px-6 rounded-full text-center transition-colors duration-300 ${
            selectedCategory === (category === '팀' ? '팀프로젝트' : category === '싱글' ? '싱글' : '전체')
              ? 'bg-green-600 text-white'
              : 'text-gray-700'
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Toggle;

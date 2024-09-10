import React from 'react';

type CardContentProps = {
  title: string;
  category: string;
  isSelected: boolean;
  isMobile: boolean;
};

const CardContent: React.FC<CardContentProps> = ({ title, category, isSelected, isMobile }) => (
  <div className="p-4">
    <span
      className={`text-sm text-gray-500 ${isSelected ? 'text-white' : ''} ${!isMobile ? 'group-hover:text-white' : ''}`}
    >
      {category}
    </span>
    <h3
      className={`text-lg sm:text-xl font-semibold mt-2 ${isSelected ? 'text-white' : ''} ${
        !isMobile ? 'group-hover:text-white' : ''
      }`}
    >
      {title}
    </h3>
  </div>
);

export default CardContent;

import React from 'react';

type CardProps = {
  title: string;
  category: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, category, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80 h-auto transform transition-transform duration-300 hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="text-sm text-gray-500">{category}</span> {/* 분류 태그 */}
        <h3 className="text-lg sm:text-xl font-semibold mt-2">{title}</h3> {/* 타이틀 */}
      </div>
    </div>
  );
};

export default Card;

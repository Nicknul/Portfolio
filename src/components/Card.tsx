import React from 'react';

type CardProps = {
  title: string;
  category: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, category, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80 h-auto transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer hover:bg-zinc-800 group">
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-gray-500 group-hover:text-white">{category}</span>
        <h3 className="text-lg sm:text-xl font-semibold mt-2 group-hover:text-white">{title}</h3>
      </div>
    </div>
  );
};

export default Card;

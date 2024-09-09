import React from 'react';

type CardProps = {
  title: string;
  category: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, category, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 h-96">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="text-sm text-gray-500">{category}</span>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>
    </div>
  );
};

export default Card;

// Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
};

const Card: React.FC<CardProps> = ({ title, description, image, index }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 w-64 absolute transform`}
      style={{
        zIndex: 10 - index,
        left: `${index * 40}px`,
      }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;

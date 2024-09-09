// Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-80">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;

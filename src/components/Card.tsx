// Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
  className?: string; // 추가된 className
};

const Card: React.FC<CardProps> = ({ title, description, image, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

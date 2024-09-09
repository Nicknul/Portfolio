// Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
  index: number; // 카드의 순서를 위한 추가 속성
};

const Card: React.FC<CardProps> = ({ title, description, image, index }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 w-64 absolute transform`}
      style={{
        zIndex: 10 - index,
        left: `${index * 40}px`, // 오른쪽으로 겹쳐지도록 조정
      }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;

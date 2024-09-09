// CardList.tsx
import React from 'react';
import Card from './Card';
import { cards } from './CardData';

const CardList: React.FC = () => {
  return (
    <div className="relative w-full h-80 overflow-visible flex justify-center items-center">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} index={index} />
      ))}
    </div>
  );
};

export default CardList;

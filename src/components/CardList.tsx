// CardList.tsx
import React from 'react';
import Card from './Card';
import { cards } from './CardData';

const CardList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
  );
};

export default CardList;

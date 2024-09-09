import React from 'react';
import Card from './Card';
import { cards } from './CardData';

const CardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} category={card.category} image={card.image} />
      ))}
    </div>
  );
};

export default CardList;

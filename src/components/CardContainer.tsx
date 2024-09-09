import React from 'react';
import Card from './Card';
import { cards } from './CardData';

interface CardContainerProps {
  focusedCard: number;
}

const CardContainer: React.FC<CardContainerProps> = ({ focusedCard }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 flex-grow mx-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          className={`transition-transform duration-300 ${
            focusedCard === index ? 'transform translate-y-[-10px]' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default CardContainer;

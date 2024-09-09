// CardList.tsx
import React from 'react';
import Card from './Card';
import { cards } from './CardData';
import Button from './Button';
import useCardFocus from '../hooks/useCardFocus';

const CardList: React.FC = () => {
  const { focusedCard, focusLeft, focusRight } = useCardFocus(0, cards.length);

  return (
    <div className="flex items-center w-full">
      <Button variant="left" onClick={focusLeft} className="hidden lg:block">
        왼쪽 버튼
      </Button>
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
      <Button variant="right" onClick={focusRight} className="hidden lg:block">
        오른쪽 버튼
      </Button>
    </div>
  );
};

export default CardList;

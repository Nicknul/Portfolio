// CardList.tsx
import React from 'react';
import Card from './Card';
import { cards } from './CardData';
import Button from './Button';
import useCardFocus from '../hooks/useCardFocus';

const CardList: React.FC = () => {
  const { focusedCard, focusLeft, focusRight, isMobile } = useCardFocus(0, cards.length); // 훅 사용

  return (
    <div className="relative w-full h-80 overflow-visible flex justify-center items-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          className={`absolute transition-transform duration-300 ${
            focusedCard === index && !isMobile ? 'transform translate-y-[-10px]' : ''
          } ${index === cards.length - 1 ? 'z-10' : `z-${10 - index}`} ${index > 0 ? `-translate-x-${index * 4}` : ''}`}
        />
      ))}
      <Button
        variant="left"
        onClick={focusLeft}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 ${isMobile ? 'pointer-events-none' : ''}`}
      >
        왼쪽 버튼
      </Button>
      <Button
        variant="right"
        onClick={focusRight}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 ${isMobile ? 'pointer-events-none' : ''}`}
      >
        오른쪽 버튼
      </Button>
    </div>
  );
};

export default CardList;

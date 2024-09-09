import React from 'react';
import Card from './Card';
import { cards } from './CardData';
import Button from './Button';
import useCardFocus from '../hooks/useCardFocus';

const CardList: React.FC = () => {
  const { focusedCard, focusLeft, focusRight, isMobile } = useCardFocus(0, cards.length);

  return (
    <div className="relative w-full h-80 overflow-visible flex justify-center items-center">
      {cards.map((card, index) => {
        const translateX = !isMobile ? `${index * 60}px` : '0';
        const translateY = isMobile ? `${index * 60}px` : focusedCard === index ? '-10px' : '0';

        return (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            style={{
              zIndex: focusedCard === index ? cards.length : cards.length - index,
              transform: `translateX(${translateX}) translateY(${translateY})`,
            }}
            className={`absolute transition-transform duration-300`}
          />
        );
      })}
      <Button
        variant="left"
        onClick={focusLeft}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block`}
      >
        왼쪽 버튼
      </Button>
      <Button
        variant="right"
        onClick={focusRight}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block`}
      >
        오른쪽 버튼
      </Button>
    </div>
  );
};

export default CardList;

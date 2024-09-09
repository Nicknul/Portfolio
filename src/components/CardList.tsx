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
        // 포커스된 카드가 위로 살짝 올라가도록 translateY 값을 설정
        const translateY = focusedCard === index && !isMobile ? '-10px' : '0';

        return (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            style={{
              zIndex: cards.length - index,
              transform: `translateX(${index * 60}px) translateY(${translateY})`, // translateX와 translateY를 모두 적용
            }}
            className={`absolute transition-transform duration-300`}
          />
        );
      })}
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

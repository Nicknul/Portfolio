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
        const translateX = !isMobile ? `${index * 60}px` : '0'; // 모바일이 아닐 때는 오른쪽으로 이동
        const translateY = isMobile ? `${index * 60}px` : focusedCard === index ? '-10px' : '0'; // 모바일일 때는 아래로 이동, 포커스된 카드는 위로 살짝 올라감

        return (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            style={{
              zIndex: cards.length - index,
              transform: `translateX(${translateX}) translateY(${translateY})`, // translateX와 translateY를 조건에 맞게 적용
            }}
            className={`absolute transition-transform duration-300`}
          />
        );
      })}
      {/* lg 사이즈 이상에서만 버튼 보이도록 설정 */}
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

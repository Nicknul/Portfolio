// CardList.tsx
import React, { useState } from 'react';
import Card from './Card';
import { cards } from './CardData';
import Button from './Button';

const CardList: React.FC = () => {
  const [focusedCard, setFocusedCard] = useState<number>(0);

  const handleLeftButtonClick = () => {
    setFocusedCard((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleRightButtonClick = () => {
    setFocusedCard((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex items-center w-full">
      <Button variant="left" onClick={handleLeftButtonClick} className="hidden lg:block">
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
      <Button variant="right" onClick={handleRightButtonClick} className="hidden lg:block">
        오른쪽 버튼
      </Button>
    </div>
  );
};

export default CardList;

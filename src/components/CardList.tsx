// CardList.tsx
import React from 'react';
import Card from './Card';
import { cards } from './CardData';
import Button from './Button';

const CardList: React.FC = () => {
  return (
    <div className="flex items-center w-full">
      <Button variant="left" onClick={() => alert('왼쪽 버튼 클릭됨!')} className="hidden lg:block">
        왼쪽 버튼
      </Button>
      <div className="flex flex-wrap justify-center gap-4 flex-grow mx-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
      <Button variant="right" onClick={() => alert('오른쪽 버튼 클릭됨!')} className="hidden lg:block">
        오른쪽 버튼
      </Button>
    </div>
  );
};

export default CardList;

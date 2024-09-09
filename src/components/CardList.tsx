import React from 'react';
import Card from './Card'; // Card 컴포넌트 임포트
import { cards } from './CardData'; // 카드 데이터 임포트

const CardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} category={card.category} image={card.image} />
      ))}
    </div>
  );
};

export default CardList;

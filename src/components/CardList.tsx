// CardList.tsx
import React from 'react';
import Card from './Card';
import { cards } from './CardData';
import Button from './Button'; // 버튼 컴포넌트 추가

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {' '}
        {/* 카드 목록과 버튼 사이의 여백 추가 */}
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
      <div className="flex gap-4">
        <Button variant="left" onClick={() => alert('왼쪽 버튼 클릭됨!')}>
          왼쪽 버튼
        </Button>
        <Button variant="right" onClick={() => alert('오른쪽 버튼 클릭됨!')}>
          오른쪽 버튼
        </Button>
      </div>
    </div>
  );
};

export default CardList;

import React from 'react';
import CardItem from './CardItem';
import { cardData } from '../../data/CardData';

interface CardListProps {
  category: '팀프로젝트' | '싱글' | '전체';
}

const CardList: React.FC<CardListProps> = ({ category }) => {
  const filteredCards = category === '전체' ? cardData : cardData.filter((card) => card.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredCards.map((card, index) => (
        <CardItem
          key={index}
          image={card.image}
          date={card.date}
          title={card.title}
          category={card.category}
          github={card.github}
          notion={card.notion}
          languages={card.languages}
        />
      ))}
    </div>
  );
};

export default CardList;

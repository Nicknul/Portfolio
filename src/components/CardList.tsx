import React, { useState, useEffect } from 'react';
import Card from './Card';
import { cards } from './CardData';

const CardList: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setSelectedCardIndex(index);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          category={card.category}
          image={card.image}
          githubLink={card.githubLink}
          isSelected={selectedCardIndex === index && isMobile}
          onClick={() => handleCardClick(index)}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default CardList;

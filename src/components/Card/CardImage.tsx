import React from 'react';

type CardImageProps = {
  image: string;
  title: string;
  isSelected: boolean;
  isMobile: boolean;
};

const CardImage: React.FC<CardImageProps> = ({ image, title, isSelected, isMobile }) => (
  <div className="relative w-full h-40 overflow-hidden">
    <img
      src={image}
      alt={title}
      className={`w-full h-full object-cover transition-opacity duration-300 ${isSelected ? 'opacity-0' : ''} ${
        !isMobile ? 'group-hover:opacity-0' : ''
      }`}
    />
  </div>
);

export default CardImage;

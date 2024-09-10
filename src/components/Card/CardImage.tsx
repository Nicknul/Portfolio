import React from 'react';
import CardStyles from '../../styles/CardStyles';

type CardImageProps = {
  image: string;
  title: string;
  isSelected: boolean;
  isMobile: boolean;
};

const CardImage: React.FC<CardImageProps> = ({ image, title, isSelected, isMobile }) => (
  <div className="relative w-full h-40 overflow-hidden">
    <img src={image} alt={title} className={CardStyles.image(isSelected, isMobile)} />
  </div>
);

export default CardImage;

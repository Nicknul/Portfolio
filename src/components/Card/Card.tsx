import React from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardButtons from './CardButtons';

type CardProps = {
  title: string;
  category: string;
  image: string;
  githubLink: string;
  isSelected: boolean;
  onClick: () => void;
  isMobile: boolean;
};

const Card: React.FC<CardProps> = ({ title, category, image, githubLink, isSelected, onClick, isMobile }) => (
  <div
    onClick={onClick}
    className={`bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80 h-auto transform transition-transform duration-300 cursor-pointer 
    ${isSelected ? 'bg-zinc-800' : ''} ${!isMobile ? 'hover:-translate-y-2 hover:bg-zinc-800 group' : ''} relative`}
  >
    <CardImage image={image} title={title} isSelected={isSelected} isMobile={isMobile} />
    <CardContent title={title} category={category} isSelected={isSelected} isMobile={isMobile} />
    <CardButtons githubLink={githubLink} isSelected={isSelected} isMobile={isMobile} />
  </div>
);

export default Card;

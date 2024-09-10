import React from 'react';
import Button from '../Button';

type CardButtonsProps = {
  githubLink: string;
  isSelected: boolean;
  isMobile: boolean;
};

const CardButtons: React.FC<CardButtonsProps> = ({ githubLink, isSelected, isMobile }) => (
  <div
    className={`absolute inset-0 flex flex-col justify-center items-center space-y-2 transition-all duration-300 ${
      isMobile ? (isSelected ? 'block' : 'hidden') : 'opacity-0 group-hover:opacity-100'
    }`}
  >
    <Button label="자세히 보기" className="w-full max-w-[150px]" />
    <Button label="GitHub 보기" href={githubLink} className="w-full max-w-[150px]" />
  </div>
);

export default CardButtons;

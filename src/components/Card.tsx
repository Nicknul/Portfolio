import React from 'react';
import Button from './Button';

type CardProps = {
  title: string;
  category: string;
  image: string;
  githubLink: string;
  isSelected: boolean;
  onClick: () => void;
  isMobile: boolean;
};

const Card: React.FC<CardProps> = ({ title, category, image, githubLink, isSelected, onClick, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80 h-auto transform transition-transform duration-300 cursor-pointer 
      ${isSelected ? 'bg-zinc-800' : ''} ${!isMobile ? 'hover:-translate-y-2 hover:bg-zinc-800 group' : ''} relative`}
    >
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isSelected ? 'opacity-0' : ''} ${
            !isMobile ? 'group-hover:opacity-0' : ''
          }`}
        />
      </div>
      <div className="p-4">
        <span
          className={`text-sm text-gray-500 ${isSelected ? 'text-white' : ''} ${
            !isMobile ? 'group-hover:text-white' : ''
          }`}
        >
          {category}
        </span>
        <h3
          className={`text-lg sm:text-xl font-semibold mt-2 ${isSelected ? 'text-white' : ''} ${
            !isMobile ? 'group-hover:text-white' : ''
          }`}
        >
          {title}
        </h3>
      </div>
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center space-y-2 transition-all duration-300 ${
          isMobile ? (isSelected ? 'block' : 'hidden') : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <Button label="자세히 보기" className="w-full max-w-[150px]" />
        <Button label="GitHub 보기" href={githubLink} className="w-full max-w-[150px]" />
      </div>
    </div>
  );
};

export default Card;

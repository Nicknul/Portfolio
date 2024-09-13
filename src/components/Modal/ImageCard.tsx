import React from 'react';

type ImageCardProps = {
  image: string;
  altText: string;
  onClick: () => void;
  isVisible: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, altText, onClick, isVisible }) => {
  return (
    <img
      src={image}
      alt={altText}
      className={`absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      onClick={onClick}
    />
  );
};

export default ImageCard;

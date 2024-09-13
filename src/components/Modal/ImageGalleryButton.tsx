import React from 'react';

type ImageGalleryButtonProps = {
  onClick: () => void;
};

const ImageGalleryButton: React.FC<ImageGalleryButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-white text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black"
    >
      자세히 보기
    </button>
  );
};

export default ImageGalleryButton;

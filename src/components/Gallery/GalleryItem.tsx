import React from 'react';

interface GalleryItemProps {
  src: string;
  index: number;
  selectedImage: number | null;
  isButtonVisible: number | null;
  onClick: (index: number) => void;
  onOpenModal: (index: number) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  src,
  index,
  selectedImage,
  isButtonVisible,
  onClick,
  onOpenModal,
}) => {
  return (
    <div className={`relative group ${window.innerWidth >= 1280 ? 'hover:brightness-75' : ''}`}>
      <img
        src={src}
        alt={`Gallery image ${index + 1}`}
        onClick={() => onClick(index)}
        className={`w-full object-cover rounded shadow transform transition duration-300 
          ${selectedImage === index ? 'brightness-50' : ''}
          ${window.innerWidth >= 1280 ? 'hover:brightness-50 hover:translate-y-[-5px]' : ''}
        `}
      />
      {isButtonVisible === index || window.innerWidth >= 1280 ? (
        <button
          onClick={() => onOpenModal(index)}
          className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded"
        >
          자세히 보기
        </button>
      ) : null}
    </div>
  );
};

export default GalleryItem;

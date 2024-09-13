import React from 'react';
import ImageGalleryButton from './ImageGalleryButton';

type GalleryGridProps = {
  images: string[];
  handleOpenImageModal: (index: number) => void;
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, handleOpenImageModal }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group w-full h-auto">
          <img src={image} alt={`설계 이미지 ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 rounded-lg"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ImageGalleryButton onClick={() => handleOpenImageModal(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

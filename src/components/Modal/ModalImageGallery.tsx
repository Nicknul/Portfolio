import React from 'react';
import ModalImageSlider from './ModalImageSlider';

type ModalImageGalleryProps = {
  images: string[];
  isMobile: boolean;
};

const ModalImageGallery: React.FC<ModalImageGalleryProps> = ({ images, isMobile }) => {
  return isMobile ? (
    <ModalImageSlider images={images} />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group w-full h-auto">
          <img src={image} alt={`설계 이미지 ${index + 1}`} className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 hover:cursor-pointer"></div>
        </div>
      ))}
    </div>
  );
};

export default ModalImageGallery;

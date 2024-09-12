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
        <img
          key={index}
          src={image}
          alt={`설계 이미지 ${index + 1}`}
          className="w-full h-auto object-cover hover:cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ModalImageGallery;

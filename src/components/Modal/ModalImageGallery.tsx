import React from 'react';

type ModalImageGalleryProps = {
  images: string[];
};

const ModalImageGallery: React.FC<ModalImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`설계 이미지 ${index + 1}`} className="w-full h-auto object-cover" />
      ))}
    </div>
  );
};

export default ModalImageGallery;

import React from 'react';

type ModalImageGalleryProps = {
  images: string[];
};

const ModalImageGallery: React.FC<ModalImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`설계 이미지 ${index + 1}`} className="w-full h-auto object-cover rounded" />
      ))}
    </div>
  );
};

export default ModalImageGallery;

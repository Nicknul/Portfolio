import React from 'react';
import ModalStyles from '../../styles/ModalStyles';
import ImageGalleryButton from './ImageGalleryButton';

type GalleryGridProps = {
  images: string[];
  handleOpenImageModal: (index: number) => void;
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, handleOpenImageModal }) => {
  return (
    <div className={ModalStyles.gridContainer}>
      {images.map((image, index) => (
        <div key={index} className={ModalStyles.imageWrapper}>
          <img src={image} alt={`설계 이미지 ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
          <div className={ModalStyles.overlay}></div>
          <div className={ModalStyles.buttonWrapper}>
            <ImageGalleryButton onClick={() => handleOpenImageModal(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

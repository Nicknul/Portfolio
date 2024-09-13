import React from 'react';
import ModalStyles from '../../styles/ModalStyles';

type ImagePreviewProps = {
  images: string[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ images, selectedIndex, onSelectImage }) => {
  return (
    <div className={ModalStyles.previewContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`썸네일 이미지 ${index + 1}`}
          onClick={() => onSelectImage(index)}
          className={ModalStyles.previewImage(index === selectedIndex)}
        />
      ))}
    </div>
  );
};

export default ImagePreview;

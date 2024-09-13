import React from 'react';
import ModalStyles from '../../styles/ModalStyles';

type ImageGalleryButtonProps = {
  onClick: () => void;
};

const ImageGalleryButton: React.FC<ImageGalleryButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={ModalStyles.galleryButton}>
      자세히 보기
    </button>
  );
};

export default ImageGalleryButton;

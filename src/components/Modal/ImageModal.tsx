import React from 'react';
import ModalStyles from '../../styles/ModalStyles';
import ImagePreview from './ImagePreview';
import NavigationButtons from './NavigationButtons';

type ImageModalProps = {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectImage: (index: number) => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ images, selectedIndex, onClose, onPrev, onNext, onSelectImage }) => {
  return (
    <div className={ModalStyles.container}>
      <div className="relative flex flex-col items-center">
        <img src={images[selectedIndex]} alt={`확대된 이미지 ${selectedIndex + 1}`} className={ModalStyles.image} />
        <ImagePreview images={images} selectedIndex={selectedIndex} onSelectImage={onSelectImage} />
      </div>
      <NavigationButtons onPrev={onPrev} onNext={onNext} onClose={onClose} />
    </div>
  );
};

export default ImageModal;

import React from 'react';
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
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
      <div className="relative flex flex-col items-center">
        <img
          src={images[selectedIndex]}
          alt={`확대된 이미지 ${selectedIndex + 1}`}
          className="max-w-[85vw] max-h-[85vh] object-contain mb-4"
        />
        <ImagePreview images={images} selectedIndex={selectedIndex} onSelectImage={onSelectImage} />
      </div>
      <NavigationButtons onPrev={onPrev} onNext={onNext} onClose={onClose} />
    </div>
  );
};

export default ImageModal;

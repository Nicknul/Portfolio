import React from 'react';

type ImageModalProps = {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ images, selectedIndex, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative">
        <img
          src={images[selectedIndex]}
          alt={`확대된 이미지 ${selectedIndex + 1}`}
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
      </div>
      <button
        onClick={onPrev}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-50"
      >
        &lt;
      </button>
      <button
        onClick={onNext}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-50"
      >
        &gt;
      </button>
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full px-3 py-1 z-50"
      >
        닫기
      </button>
    </div>
  );
};

export default ImageModal;

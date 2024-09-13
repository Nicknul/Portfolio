import React from 'react';

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
        <div className="flex space-x-2 overflow-visible">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`썸네일 이미지 ${index + 1}`}
              onClick={() => onSelectImage(index)}
              className={`w-16 h-16 object-cover cursor-pointer rounded-lg transition-transform duration-300 ${
                index === selectedIndex ? '-translate-y-2' : ''
              }`}
            />
          ))}
        </div>
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

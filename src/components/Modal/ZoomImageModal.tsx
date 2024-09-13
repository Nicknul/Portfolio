import React from 'react';
import { useSwipeable } from 'react-swipeable';

type ZoomImageModalProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ZoomImageModal: React.FC<ZoomImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <img
        src={images[currentIndex]}
        alt={`확대된 이미지 ${currentIndex + 1}`}
        className="max-w-[85vw] max-h-[85vh] object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full z-50"
      >
        닫기
      </button>
    </div>
  );
};

export default ZoomImageModal;

import React from 'react';
import { useSwipeable } from 'react-swipeable';
import ModalStyles from '../../styles/ModalStyles';

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
    <div {...handlers} className={ModalStyles.container}>
      <img src={images[currentIndex]} alt={`확대된 이미지 ${currentIndex + 1}`} className={ModalStyles.image} />
      <button onClick={onClose} className={ModalStyles.closeButton}>
        닫기
      </button>
    </div>
  );
};

export default ZoomImageModal;

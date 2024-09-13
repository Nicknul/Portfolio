import React from 'react';
import { useSwipeable } from 'react-swipeable';
import ZoomImageModal from './ZoomImageModal';
import useImageSlider from '../../hooks/useImageSlider';
import ImageCard from './ImageCard';

type ModalImageSliderProps = {
  images: string[];
};

const ModalImageSlider: React.FC<ModalImageSliderProps> = ({ images }) => {
  const {
    currentIndex,
    isZoomed,
    zoomedIndex,
    handleNext,
    handlePrev,
    handleZoomNext,
    handleZoomPrev,
    handleImageClick,
    handleZoomClose,
  } = useImageSlider(images);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <div {...handlers} className="relative w-full h-auto">
        <div className="relative w-full h-64 overflow-hidden">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              altText={`설계 이미지 ${index + 1}`}
              onClick={handleImageClick}
              isVisible={index === currentIndex}
            />
          ))}
        </div>
      </div>
      {isZoomed && zoomedIndex !== null && (
        <ZoomImageModal
          images={images}
          currentIndex={zoomedIndex}
          onClose={handleZoomClose}
          onNext={handleZoomNext}
          onPrev={handleZoomPrev}
        />
      )}
    </>
  );
};

export default ModalImageSlider;

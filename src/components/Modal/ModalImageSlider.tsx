import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

type ModalImageSliderProps = {
  images: string[];
};

const ModalImageSlider: React.FC<ModalImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative w-full h-auto">
      <div className="relative w-full h-64 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`설계 이미지 ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-transform duration-150 ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalImageSlider;

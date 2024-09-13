import { useState } from 'react';

const useImageSlider = (images: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleZoomNext = () => {
    if (zoomedIndex !== null) {
      setZoomedIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return (prevIndex + 1) % images.length;
      });
    }
  };

  const handleZoomPrev = () => {
    if (zoomedIndex !== null) {
      setZoomedIndex((prevIndex) => {
        if (prevIndex === null) return images.length - 1;
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      });
    }
  };

  const handleImageClick = () => {
    setIsZoomed(true);
    setZoomedIndex(currentIndex);
  };

  const handleZoomClose = () => {
    setIsZoomed(false);
    setZoomedIndex(null);
  };

  return {
    currentIndex,
    isZoomed,
    zoomedIndex,
    handleNext,
    handlePrev,
    handleZoomNext,
    handleZoomPrev,
    handleImageClick,
    handleZoomClose,
  };
};

export default useImageSlider;
